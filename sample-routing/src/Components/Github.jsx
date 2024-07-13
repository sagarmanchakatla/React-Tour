import { useState, useEffect } from "react";

function Github() {
  //   const data = useLoaderData();

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/sagarmanchakatla")
      .then((response) => response.json())
      .then((data) => setData(data));
    console.log(data);
  }, []);

  return (
    <>
      <div>Github followers : {data.followers}</div>
      <img src={data.avatar_url} alt="" />
    </>
  );
}

export default Github;
