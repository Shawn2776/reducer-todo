import React from "react";

function Todo({ todo, handleToggleCompleted }) {
  const clickHandler = () => {
    handleToggleCompleted(todo.id);
  };

  return (
    <>
      <div key={todo.id} className="todo-container">
        <section className={todo.completed === true ? "completed" : ""}>
          {todo.title}
        </section>
        {todo.completed === true ? (
          <button onClick={clickHandler} name="undoCompleted">
            Undo Completed
          </button>
        ) : (
          <>
            <button onClick={clickHandler} name="markCompleted">
              Mark Complete
            </button>
          </>
        )}
      </div>
    </>
  );
}

export default Todo;
