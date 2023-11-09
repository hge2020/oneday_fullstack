# coding: utf-8
from sqlalchemy import CHAR, Column, TIMESTAMP, text
from sqlalchemy.dialects.mysql import INTEGER
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()
metadata = Base.metadata


class Todo(Base):
    __tablename__ = 'todo'

    index = Column(INTEGER(10), primary_key=True)
    todo = Column(CHAR(255))
    isDone = Column(CHAR(1))
    insert_time = Column(TIMESTAMP, nullable=False, server_default=text("current_timestamp()"))
