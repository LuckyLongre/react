import { MdDelete, MdOutlineDoneAll } from "react-icons/md";

const ShowTask = ({ task, handleDelete, handleComplete }) => {
  return (
    <li
      className={`flex items-center justify-between ${
        task.completed ? "bg-green-600" : "bg-gray-800"
      } border border-gray-700/60 rounded-lg px-4 py-3 shadow hover:shadow-2xl transition-shadow`}
    >
      <span
        className={`text-lg ${
          task.completed ? "line-through text-white" : "text-gray-100"
        }`}
      >
        {task.task}
      </span>
      <div className="flex gap-2">
        <button
          onClick={() => handleComplete(task)}
          className="bg-green-600 cursor-pointer hover:bg-green-500 text-gray-100 px-3 py-1 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
          aria-label="Complete task"
        >
          <MdOutlineDoneAll size={25} />
        </button>
        <button
          onClick={() => handleDelete(task)}
          className="bg-red-600 cursor-pointer hover:bg-red-500 text-gray-100 px-3 py-1 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
          aria-label="Delete task"
        >
          <MdDelete size={25} />
        </button>
      </div>
    </li>
  );
};

export default ShowTask;
