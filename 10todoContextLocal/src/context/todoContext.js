import React, { useContext } from "react";

// create context
export const TodoContext = React.createContext({
  todos: [
    {
      id: 2,
      todo: "Todo Msg",
      completed: false
    },
  ],
  addTodo: () => {},
  updateTodo: () => {},
  deleteTodo: () => {},
  toggleComplete: () => {}
  /* 
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
  */
});


// provider
export const TodoProvider = TodoContext.Provider;

// useContext
export function useTodo() {
  return useContext(TodoContext);
}
