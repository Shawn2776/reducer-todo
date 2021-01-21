import React, { useReducer } from "react";
import Navbar from "./components/Navbar";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./styles/App.css";
import { reducer, initialValues } from './reducers/index';
import { addTodo, toggleCompleted, clearCompleted } from './actions/index';

function App() {
  const [state,dispatch] = useReducer(reducer, initialValues);

  const handleAddTodo = (title) => {
    dispatch(addTodo(title))
  }

  const handleToggleCompleted = (id) => {
    dispatch(toggleCompleted(id))
  }

  const handleClearCompleted = () => {
    dispatch(clearCompleted())
  }

  return (
    <div className="App">
      <Navbar />
      <TodoForm handleAddTodo={handleAddTodo} handleClearCompleted={handleClearCompleted}/>
      <TodoList todos={state.todos} handleToggleCompleted={handleToggleCompleted}/>
    </div>
  );
}

export default App;
