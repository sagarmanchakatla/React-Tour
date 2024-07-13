import { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({});

  const handleChange = (event) => {
    setForm({ ...form, phone: event.target.value });
    setForm({ ...form, email: event.target.value });
    console.log(form);
  };

  return (
    <>
      <h1>Vite + React</h1>
      <form action="get">
        <input
          type="text"
          name="Email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleChange}
        />
      </form>
    </>
  );
}

export default App;
