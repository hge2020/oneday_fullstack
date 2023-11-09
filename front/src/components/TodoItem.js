import "./TodoItem.css";

const TodoItem = ({ index, todo, isDone, insert_time, checkTodoFromBackend, delTodoFromBackend }) => {
  
  const onChangeCheckbox = () => {
    checkTodoFromBackend(index);
  };

  const onClickDelete = () =>{
    delTodoFromBackend(index);
  }
  
  return (
    <div className="TodoItem">
      <div className="checkbox_col">
      <input onChange={onChangeCheckbox}
							checked={isDone} type="checkbox" />
      </div>
      <div className="title_col">{todo}</div>
      <div className="date_col">
        {new Date(insert_time).toLocaleDateString()}
      </div>
      <div className="btn_col">
        <button onClick={onClickDelete}>삭제</button>
      </div>
    </div>
  );
};
export default TodoItem;