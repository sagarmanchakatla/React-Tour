import { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      setTodo([...todo, input]);
      setInput("");
    }
  };
  console.log(todo);
  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
          <h1 className="text-2xl font-bold mb-4">Todo List</h1>
          <div className="mb-4">
            <input
              type="text"
              className="border p-2 w-full rounded mb-2"
              value={input}
              onChange={handleChange}
              placeholder="Add a todo item"
            />
            <button
              className="bg-blue-500 text-white p-2 rounded w-full"
              onClick={handleSubmit}
            >
              Add
            </button>
          </div>
          <ul className="list-disc pl-5 space-y-2">
            {todo.map((item, index) => (
              <li key={index} className="flex justify-between items-center">
                <span className="text-slate-700">{item}</span>
                <div className="space-x-2">
                  <button className="text-green-500 hover:text-green-700">
                    Edit
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
