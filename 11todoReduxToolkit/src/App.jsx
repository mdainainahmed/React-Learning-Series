import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import "./App.css";
import { updateTodo } from "./features/todo/todoSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) dispatch(updateTodo(todos));
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
