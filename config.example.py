import os
from pathlib import Path
import pymysql

try:
    from dotenv import load_dotenv
except Exception:
    load_dotenv = None

_ENV_PATH = Path(__file__).resolve().parent / ".env"
if load_dotenv and _ENV_PATH.exists():
    load_dotenv(_ENV_PATH)

class Config:
    SECRET_KEY = os.getenv("SECRET_KEY", "replace-me")
    DB_HOST = os.getenv("DB_HOST", "localhost")
    DB_PORT = int(os.getenv("DB_PORT", "3306"))
    DB_NAME = os.getenv("DB_NAME", "mini_erp")
    DB_USER = os.getenv("DB_USER", "root")
    DB_PASSWORD = os.getenv("DB_PASSWORD", "")
    DB_CURSORCLASS = pymysql.cursors.DictCursor
