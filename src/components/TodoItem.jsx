import React from "react";

/**
 * Single ToDo item component.
 * Props:
 * - todo: { id, text, completed }
 * - onToggle: function to toggle completion
 * - onRemove: function to remove item
 */
const TodoItem = ({ todo, onToggle, onRemove }) => (
  <li
    className={`flex items-center justify-between bg-gray-700 rounded px-4 py-2 transition ${
      todo.completed ? "opacity-60" : ""
    }`}
  >
    <span
      onClick={onToggle}
      className={`flex-1 cursor-pointer select-none ${
        todo.completed
          ? "line-through text-green-400"
          : "text-gray-100"
      }`}
      title="Toggle complete"
    >
      {todo.text}
    </span>
    <button
      className="ml-3 text-red-400 hover:text-red-600 text-xl font-bold transition"
      onClick={onRemove}
      title="Remove"
    >
      ×
    </button>
  </li>
);

export default TodoItem;
