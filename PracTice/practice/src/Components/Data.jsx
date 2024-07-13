import { useEffect, useState } from "react";
function Data() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      let response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      if (data && data.length) setData(data);
    }

    getData();
  }, []);

  return (
    <>
      <ul>
        {data.map((item) => (
          <li key={Math.random()}>{item.title}</li>
        ))}
      </ul>
    </>
  );
}

export default Data;
