import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = ({ todo, checkTodoFromBackend, delTodoFromBackend }) => { 
  return (
    <div className="TodoList">
      <h4>Todo List 🌱</h4>
      <input className="searchbar" placeholder="검색어를 입력하세요" />
      <div className="list_wrapper">
        {todo.map((it) => (
          <TodoItem
          key = {it.index}
          {...it}
          checkTodoFromBackend={checkTodoFromBackend}
          delTodoFromBackend={delTodoFromBackend} />
        ))}
      </div>
    </div>
  );
};
export default TodoList;