from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from app.infra.config import Settings, settings

settings = Settings()

class DBConnectionHandler:
    """Sqlalchemy database connection"""

    def __init__(self):
        
        self.__connection_string = settings.pg_dsn
        self.session = None

    def get_engine(self):
        """Return connection Engine
        :parram - None
        :return - engine connection to Database
        """
        engine = create_engine(self.__connection_string)
        return engine

    def __enter__(self):
        engine = create_engine(self.__connection_string)
        session_maker = sessionmaker()
        self.session = session_maker(bind=engine)
        return self

    def __exit__(self, exc_type, exc_value, traceback):
        """Exit method for with statement"""
        self.session.close()  # pylint: disable=no-member
