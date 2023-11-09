from sqlalchemy import *
from sqlalchemy.orm import sessionmaker

DB_URL = 'mariadb+pymysql://test:1234@127.0.0.1:3306/fsproj'

class engineconn:

    def __init__(self):
        self.engine = create_engine(DB_URL, pool_recycle = 500)

    def sessionmaker(self):
        Session = sessionmaker(bind=self.engine)
        session = Session()
        return session

    def connection(self):
        conn = self.engine.connect()
        return conn