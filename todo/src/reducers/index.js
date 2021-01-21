import { ADD_TODO, TOGGLE_COMPLETED, CLEAR_COMPLETED } from '../actions/index';

// the definition of our data
//what can change in our data
export const initialValues = {
  todos: [
    {
      title: "Get to da choppa!",
      id: 0,
      completed: false,
    },
    {
      title: "Clean the bathroom",
      id: 1,
      completed: false,
    },
    {
      title: "Make dinner",
      id: 2,
      completed: false,
    },
  ],
};

export const reducer = (state, action) => {

  switch (action.type) {
    case ADD_TODO:
      const newTodo = {
        id: state.todos.length,
        completed: false,
        title: action.payload,
      };
      return {...state, todos: [...state.todos, newTodo]};

    case TOGGLE_COMPLETED:
      return({
        ...state,
        todos: state.todos.map((todo) => {
          return (todo.id === action.payload ? {...todo, completed: !todo.completed} : todo)
        })
      })

      case CLEAR_COMPLETED:
      return({
        ...state,
        todos: state.todos.filter((todo) => {
          return (!todo.completed)
        })
      })

    default:
      return state;
  }
};