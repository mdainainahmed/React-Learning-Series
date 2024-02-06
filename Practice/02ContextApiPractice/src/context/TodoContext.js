/* eslint-disable no-unused-vars */
import React, { useContext } from "react";

// create context
export const TodoContext = React.createContext({
  todos: [
    {
      id: 1,
      todo: "Todo Msg",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

// provider
export const TodoProvider = TodoContext.Provider;

// useContext
export const useTodo = () => {
  return useContext(TodoContext);
};
