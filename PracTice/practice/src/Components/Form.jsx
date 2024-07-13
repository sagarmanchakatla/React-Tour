import { useState } from "react";

function Form() {
  const [userName, setUserName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`You have entered ${userName}`);
    setUserName("");
  };

  const handleChange = (event) => {
    setUserName(event.target.value);
  };

  return (
    <>
      <h1>User Form</h1>
      <form action="submit" onSubmit={handleSubmit}>
        <input type="text" value={userName} onChange={handleChange} />
        <button>Submit</button>
      </form>
    </>
  );
}

export default Form;
