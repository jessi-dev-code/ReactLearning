import React, { useState, type FormEvent, type ChangeEvent } from "react";
import { nanoid } from "nanoid";

type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newTask.trim()) return;

    setTodos([
      ...todos,
      { id: nanoid(), text: newTask.trim(), completed: false },
    ]);
    setNewTask("");
  };

  const handleToggleComplete = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  
  return (
    <div className="flex flex-col p-20 items-center justify-center">
      <h3 className="text-5xl pt-10">To Do List</h3>

      <form
        onSubmit={handleSubmit}
        className="mt-20 w-full flex items-center justify-center gap-4"
      >
        <input
          className="border p-2 rounded"
          type="text"
          value={newTask}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setNewTask(e.target.value)
          }
          placeholder="Add a new task..."
        />
        <button
          type="submit"
          className="bg-zinc-950 text-white p-2 px-8 rounded"
        >
          Add
        </button>
      </form>

      <div className="mt-8 w-full max-w-md">
        {todos.map((todo) => (
          <div key={todo.id} className="flex gap-2 items-center mb-2">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleComplete(todo.id)}
            />
            <div className="flex justify-between items-center w-full">
              <h4
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.text}
              </h4>
              <span
                className="text-red-500 hover:text-amber-50 cursor-pointer"
                onClick={() => handleDelete(todo.id)}
              >
                Delete
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoApp;
