import React, { useState } from "react";
import TodoItem from "./TodoItem";

/**
 * Main ToDo application component.
 * Handles state for the list of todos and input.
 */
const TodoApp = () => {
  // State for the list of todos
  const [todos, setTodos] = useState([]);
  // State for the current input value
  const [input, setInput] = useState("");

  /**
   * Adds a new todo to the list.
   * A todo is only added if the input is not empty.
   */
  const addTodo = () => {
    // Ignore empty input
    if (input.trim() === "") return;
    // Add new todo to the list
    setTodos([
      ...todos,
      { id: Date.now(), text: input, completed: false }
    ]);
    // Clear the input field
    setInput("");
  };

  /**
   * Toggles the completion status of a todo.
   * If the todo is completed, it will be marked as not completed and vice versa.
   */
  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  /**
   * Removes a todo from the list.
   * The todo is identified by its unique id.
   */
  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-gray-800 rounded-xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-cyan-400 text-center mb-6">ToDo List</h1>
        <div className="flex gap-2 mb-4">
          <input
            className="flex-1 px-3 py-2 rounded bg-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Add a new task..."
          />
          <button
            className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 font-semibold px-4 py-2 rounded transition"
            onClick={addTodo}
          >
            Add
          </button>
        </div>
        <ul className="space-y-2">
          {todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={() => toggleTodo(todo.id)}
              onRemove={() => removeTodo(todo.id)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoApp;