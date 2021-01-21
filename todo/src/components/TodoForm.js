import React from "react";

function TodoForm({ handleAddTodo, handleClearCompleted }) {
  let newTodo = "";

  const handleAddTodoClick = (e) => {
    e.preventDefault();
    if (newTodo === "") {
      return;
    } else {
      handleAddTodo(newTodo);
    }
  };

  const handleClearCompletedClick = (e) => {
    e.preventDefault();
    handleClearCompleted();
  };

  const changeHandler = (e) => {
    newTodo = e.target.value;
  };

  return (
    <div className="todoControl-container">
      <form>
        <input onChange={changeHandler} placeholder="Enter new Todo" />
        <button onClick={handleAddTodoClick} type="submit" name="addTodo">
          Add Todo
        </button>{" "}
        <button onClick={handleClearCompletedClick} name="clearCompleted">
          Clear Completed
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
