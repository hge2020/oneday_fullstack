import { useState } from "react";
import "./TodoEditor.css";


const TodoEditor = ({ addTodoToBackend }) => {
  const [content, setContent] = useState("");
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onSubmit = () => {
    addTodoToBackend(content);
  };

  return (
    <div className="TodoEditor">
      <h4>새로운 Todo 작성하기 ✏️ </h4>
      <div className="editor_wrapper">
        <input value={content}
          onChange={onChangeContent}
          placeholder="할 일을 작성하세요" />
        <button onClick={onSubmit}>추가</button>
      </div>
    </div>
  );
};
export default TodoEditor;