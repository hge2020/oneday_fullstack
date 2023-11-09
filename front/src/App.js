import {useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";
import TodoList from "./components/TodoList";
import axios from 'axios';

const fetchTodosFromBackend = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/todoitems');
    return response.data;
  } catch (error) {
    console.error('API 호출 오류: ', error);
    throw error;
  }
};

function App() {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    // 데이터 가져오기 함수 호출
    fetchTodosFromBackend()
      .then(data => {
        setTodo(data);
      })
      .catch(error => {
        console.error('데이터 가져오기 오류: ', error);
      });

  }, []);

  const addTodoToBackend = async (content) => {
    const newItem = {
      todo: content};
    try {
      const response = await axios.post('http://127.0.0.1:8000/addtodo', newItem);
      return response.data;
    } catch (error) {
      console.error('추가 API 오류: ', error);
      throw error;
    }
  };

  const checkTodoFromBackend  = async (targetId) => {
    const Item = {
      index: targetId};
    try {
      const response = await axios.post('http://127.0.0.1:8000/checktodo', Item);
      return response.data;
    } catch (error) {
      console.error('선택 API 오류: ', error);
      throw error;
    }
  };

  const delTodoFromBackend = async (targetId) => {
    const delItem = {
      index: targetId};
    try {
      const response = await axios.post('http://127.0.0.1:8000/deltodo', delItem);
      return response.data;
    } catch (error) {
      console.error('삭제 API 오류: ', error);
      throw error;
    }
  };

  return (
    <div className="App">
      <Header />
      <TodoEditor addTodoToBackend={addTodoToBackend} />
      <TodoList todo={todo} checkTodoFromBackend={checkTodoFromBackend} delTodoFromBackend={delTodoFromBackend} />
    </div>
  );
}
export default App;