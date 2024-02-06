import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        completed: false,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      state.todos.map((todo) =>
        todo.id === action.payload ? { ...todo, text: action.payload } : todo
      );
      console.log("updateTodo", action.payload);
    },
    toggleComplete: (state, action) => {
      state.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    },
  },
});

// export reducers to components
export const { addTodo, removeTodo, updateTodo, toggleComplete } =
  todoSlice.actions;

// export reducter to app.jsx or main.jsx
const todoReducer = todoSlice.reducer;
export default todoReducer;
