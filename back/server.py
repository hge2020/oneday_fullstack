from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from database import engineconn
from models import Todo

app = FastAPI()

engine = engineconn()
session = engine.sessionmaker()

class addItem(BaseModel):
    todo: str

class selItem(BaseModel):
    index: int

# CORS 미들웨어 설정 추가
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # 요청을 허용할 도메인 목록에 추가
    allow_credentials=True,
    allow_methods=["*"],  # 모든 HTTP 메서드 허용
    allow_headers=["*"],  # 모든 헤더 허용
)

@app.get("/")
async def first_get():
    example = session.query(Todo).all()
    return example

@app.get("/todoitems")
async def first_get():
    example = session.query(Todo).all()
    return example

@app.post("/addtodo")
async def add_data(item: addItem):
    data = Todo(todo = item.todo, isDone = False)
    session.add(data)
    session.commit()
    return "success"

@app.post("/checktodo")
async def check_data(item: selItem):
    data = session.query(Todo).filter(Todo.index == item.index).all()
    data[0].isDone = True
    print(data[0].isDone)
    session.commit()
    session.refresh(data[0])
    return data

@app.post("/unchecktodo")
async def check_data(item: selItem):
    data = session.query(Todo).filter(Todo.index == item.index).all()
    data[0].isDone = False
    print(data[0].isDone)
    session.commit()
    session.refresh(data[0])
    return data

@app.post('/deltodo')
async def del_data(item: selItem):
    session.query(Todo).filter(Todo.index == item.index).delete()
    session.commit()
    return "success"