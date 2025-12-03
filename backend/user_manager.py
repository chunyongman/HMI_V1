"""
HMI 사용자 인증 관리자
SQLite DB를 사용한 사용자/세션 관리
"""

import sqlite3
import hashlib
import secrets
import logging
from datetime import datetime, timedelta
from typing import Optional, Dict, List
from pathlib import Path
from contextlib import contextmanager

logger = logging.getLogger(__name__)


class UserManager:
    """사용자 인증 및 관리"""

    def __init__(self, db_dir: str = "data"):
        self.db_dir = Path(db_dir)
        self.db_dir.mkdir(parents=True, exist_ok=True)
        self.db_path = self.db_dir / "hmi_users.db"
        self._init_database()

    def _init_database(self):
        """데이터베이스 초기화"""
        with self.get_connection() as conn:
            cursor = conn.cursor()

            # 사용자 테이블
            cursor.execute("""
                CREATE TABLE IF NOT EXISTS users (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    username TEXT UNIQUE NOT NULL,
                    password_hash TEXT NOT NULL,
                    role TEXT NOT NULL DEFAULT 'operator',
                    display_name TEXT,
                    is_active INTEGER DEFAULT 1,
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                    last_login TIMESTAMP
                )
            """)

            # 세션 테이블
            cursor.execute("""
                CREATE TABLE IF NOT EXISTS user_sessions (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    session_token TEXT UNIQUE NOT NULL,
                    user_id INTEGER NOT NULL,
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                    expires_at TIMESTAMP NOT NULL,
                    is_valid INTEGER DEFAULT 1,
                    FOREIGN KEY (user_id) REFERENCES users(id)
                )
            """)

            conn.commit()
            logger.info(f"[UserManager] 데이터베이스 초기화 완료: {self.db_path}")

    @contextmanager
    def get_connection(self):
        """SQLite 연결 컨텍스트 매니저"""
        conn = sqlite3.connect(str(self.db_path), check_same_thread=False)
        conn.row_factory = sqlite3.Row
        try:
            yield conn
            conn.commit()
        finally:
            conn.close()

    # ==================== 사용자 관리 ====================

    def create_user(
        self,
        username: str,
        password_hash: str,
        role: str = "operator",
        display_name: str = None
    ) -> Optional[int]:
        """사용자 생성"""
        try:
            with self.get_connection() as conn:
                cursor = conn.cursor()
                cursor.execute("""
                    INSERT INTO users (username, password_hash, role, display_name)
                    VALUES (?, ?, ?, ?)
                """, (username, password_hash, role, display_name or username))
                user_id = cursor.lastrowid
                logger.info(f"[UserManager] 사용자 생성: {username} (역할: {role})")
                return user_id
        except sqlite3.IntegrityError:
            logger.warning(f"[UserManager] 사용자 이미 존재: {username}")
            return None

    def get_user_by_username(self, username: str) -> Optional[Dict]:
        """사용자명으로 사용자 조회"""
        with self.get_connection() as conn:
            cursor = conn.cursor()
            cursor.execute("""
                SELECT id, username, password_hash, role, display_name, is_active, created_at, last_login
                FROM users WHERE username = ?
            """, (username,))
            row = cursor.fetchone()
            if row:
                return dict(row)
            return None

    def get_user_by_id(self, user_id: int) -> Optional[Dict]:
        """ID로 사용자 조회"""
        with self.get_connection() as conn:
            cursor = conn.cursor()
            cursor.execute("""
                SELECT id, username, role, display_name, is_active, created_at, last_login
                FROM users WHERE id = ?
            """, (user_id,))
            row = cursor.fetchone()
            if row:
                return dict(row)
            return None

    def update_user_last_login(self, user_id: int):
        """마지막 로그인 시간 업데이트"""
        with self.get_connection() as conn:
            cursor = conn.cursor()
            cursor.execute("""
                UPDATE users SET last_login = ? WHERE id = ?
            """, (datetime.now(), user_id))

    def get_all_users(self) -> List[Dict]:
        """모든 사용자 조회"""
        with self.get_connection() as conn:
            cursor = conn.cursor()
            cursor.execute("""
                SELECT id, username, role, display_name, is_active, created_at, last_login
                FROM users ORDER BY id
            """)
            return [dict(row) for row in cursor.fetchall()]

    def update_user(self, user_id: int, role: str = None, display_name: str = None, is_active: int = None) -> bool:
        """사용자 정보 업데이트"""
        with self.get_connection() as conn:
            cursor = conn.cursor()
            updates = []
            params = []
            if role is not None:
                updates.append("role = ?")
                params.append(role)
            if display_name is not None:
                updates.append("display_name = ?")
                params.append(display_name)
            if is_active is not None:
                updates.append("is_active = ?")
                params.append(is_active)

            if not updates:
                return False

            params.append(user_id)
            cursor.execute(f"""
                UPDATE users SET {', '.join(updates)} WHERE id = ?
            """, params)
            return cursor.rowcount > 0

    def update_user_password(self, user_id: int, password_hash: str) -> bool:
        """비밀번호 업데이트"""
        with self.get_connection() as conn:
            cursor = conn.cursor()
            cursor.execute("""
                UPDATE users SET password_hash = ? WHERE id = ?
            """, (password_hash, user_id))
            return cursor.rowcount > 0

    def delete_user(self, user_id: int) -> bool:
        """사용자 완전 삭제"""
        with self.get_connection() as conn:
            cursor = conn.cursor()
            # 먼저 해당 사용자의 세션 삭제
            cursor.execute("DELETE FROM user_sessions WHERE user_id = ?", (user_id,))
            # 사용자 삭제
            cursor.execute("DELETE FROM users WHERE id = ?", (user_id,))
            return cursor.rowcount > 0

    # ==================== 세션 관리 ====================

    def create_session(self, user_id: int, session_token: str, expires_hours: int = 8) -> int:
        """세션 생성"""
        with self.get_connection() as conn:
            cursor = conn.cursor()
            expires_at = datetime.now() + timedelta(hours=expires_hours)
            cursor.execute("""
                INSERT INTO user_sessions (session_token, user_id, expires_at)
                VALUES (?, ?, ?)
            """, (session_token, user_id, expires_at))
            return cursor.lastrowid

    def get_session(self, session_token: str) -> Optional[Dict]:
        """세션 조회"""
        with self.get_connection() as conn:
            cursor = conn.cursor()
            cursor.execute("""
                SELECT s.id, s.session_token, s.user_id, s.created_at, s.expires_at, s.is_valid,
                       u.username, u.role, u.display_name, u.is_active
                FROM user_sessions s
                JOIN users u ON s.user_id = u.id
                WHERE s.session_token = ? AND s.is_valid = 1 AND s.expires_at > ?
            """, (session_token, datetime.now()))
            row = cursor.fetchone()
            if row:
                return dict(row)
            return None

    def invalidate_session(self, session_token: str) -> bool:
        """세션 무효화"""
        with self.get_connection() as conn:
            cursor = conn.cursor()
            cursor.execute("""
                UPDATE user_sessions SET is_valid = 0 WHERE session_token = ?
            """, (session_token,))
            return cursor.rowcount > 0

    def invalidate_all_user_sessions(self, user_id: int) -> int:
        """특정 사용자의 모든 세션 무효화"""
        with self.get_connection() as conn:
            cursor = conn.cursor()
            cursor.execute("""
                UPDATE user_sessions SET is_valid = 0 WHERE user_id = ?
            """, (user_id,))
            return cursor.rowcount

    def cleanup_expired_sessions(self):
        """만료된 세션 정리"""
        with self.get_connection() as conn:
            cursor = conn.cursor()
            cursor.execute("""
                UPDATE user_sessions SET is_valid = 0 WHERE expires_at < ?
            """, (datetime.now(),))
            return cursor.rowcount

    # ==================== 초기화 ====================

    def init_default_users(self):
        """기본 사용자 초기화 (최초 실행 시)"""
        # admin 사용자가 없으면 기본 사용자 생성
        if not self.get_user_by_username("admin"):
            # 기본 비밀번호: admin123 (SHA-256 해시)
            admin_hash = hashlib.sha256("admin123".encode()).hexdigest()
            self.create_user("admin", admin_hash, "admin", "관리자")

        if not self.get_user_by_username("operator"):
            # 기본 비밀번호: operator123
            operator_hash = hashlib.sha256("operator123".encode()).hexdigest()
            self.create_user("operator", operator_hash, "operator", "운전자")

        logger.info("[UserManager] 기본 사용자 초기화 완료")


# 싱글톤 인스턴스
_user_manager: Optional[UserManager] = None


def get_user_manager(db_dir: str = "data") -> UserManager:
    """UserManager 싱글톤 인스턴스 반환"""
    global _user_manager
    if _user_manager is None:
        _user_manager = UserManager(db_dir)
    return _user_manager
