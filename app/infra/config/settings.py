from pydantic import (
    BaseSettings,
    PostgresDsn,
)


class Settings(BaseSettings):
    pg_dsn: PostgresDsn = 'postgresql+psycopg2://postgres:postgres@db:5432'
    BASE_URL: str = 'http://urlshortener.natandev.com.br'
    # pg_dsn: PostgresDsn = str(os.getenv('DATABASE_URL'))
 