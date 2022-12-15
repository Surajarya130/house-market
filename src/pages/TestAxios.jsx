import React, { useState } from "react";
import "./TestAxios.css";
import axios from "axios";

function TestAxios() {
  const [data, setData] = useState(null);
  const handleClick = () => {
    let config = {
      url: "https://jsonplaceholder.typicode.com/posts",
      headers: {},
      method: "GET",
    };

    axios(config)
      .then((jsData) => {
        setData(jsData.data);
      })
      .catch((err) => console.log("Error Occured"));
  };

  console.log(data);
  return (
    <>
      <div className="testContainer">
        <h2>Test Axios</h2>
        <button type="button" onClick={handleClick}>
          Fetch Path
        </button>
        {data &&
          data.map((item) => (
            <p key={item.id}>
              <span>No: {item.id}</span>
              {item.userId} - <b>{item.title}</b>
            </p>
          ))}
      </div>
    </>
  );
}

export default TestAxios;
