import { useState } from "react";

function Counter() {
  const [friends, setfriends] = useState(["Alex", "John"]);
  const [input, setInput] = useState("");
  const [remove, setRemove] = useState("");

  const changeName = () => {
    setfriends([...friends, input]);
  };

  const removeName = () => {
    setfriends(friends.filter((f) => f != remove));
  };

  return (
    <>
      {friends.map((f) => (
        <h1 key={Math.random()}>{f}</h1>
      ))}
      <div>
        <input type="text" onChange={(e) => setInput(e.target.value)} />
        <button onClick={changeName}>Change Username</button>
        <input type="text" onChange={(e) => setRemove(e.target.value)} />
        <button onClick={removeName}>Remove Username</button>
      </div>
    </>
  );
}

export default Counter;
