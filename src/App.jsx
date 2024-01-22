import { TodoProvider } from "./Context";
import TodoForm from "./Components/TodoForm";
import { useEffect, useState } from "react";
import TodoItem from "./Components/TodoItem";
const App = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos((oldtodo) => [...oldtodo, { id: Date.now(), ...todo }]);
  };

  const updatedTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevtodo) => (prevtodo.id === id ? todo : prevtodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prev) => prev.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prev) =>
        prev.id === id ? { ...prev, completed: !prev.completed } : prev
      )
    );
  };
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todo"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todos));
  }, [todos]);
  console.log(todos);
  return (
    <TodoProvider
      value={{ todos, addTodo, updatedTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8 ">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4 w-full">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
};

export default App;
