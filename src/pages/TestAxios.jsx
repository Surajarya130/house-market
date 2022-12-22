// import React, { useState } from "react";
// import "./TestAxios.css";
// import axios from "axios";

<<<<<<< HEAD
function TestAxios() {
  const [text, setText] = useState("");
  // const handleClick = () => {
  // let config = {
  //   url: "https://jsonplaceholder.typicode.com/posts",
  //   method: "GET",
  //   headers: {},
  // };

  // axios(config)
  //   .then((jsData) => {
  //     // console.log(jsData);
  //     setData(jsData.data);
  //   })
  //   .catch((err) => console.log("Error Occured"));

  // let config = (country) => {
  //   return {
  //     url: `http://universities.hipolabs.com/search?country=${country}`,
  //     headers: {},
  //     method: "GET",
  //   };
  // };

  // let getData = async () => {
  //   let res = await axios(config("india"));
  //   let data = res.data;
  //   // console.log(data);
  //   setData(data);
  // };
  // getData();
  // };
  // console.log(data);

  const handleClick = () => {
    let config = {
      url: "https://jsonplaceholder.typicode.com/posts",
      method: "POST",
      header: {},
      data: JSON.stringify({
        name: "Suraj",
        age: 25,
        add: "Town, Rbj, SBDR",
      }),
    };
    axios(config).then((res) => console.log(res));
  };

  return (
    <>
      <div className="testContainer">
        <h2>Test Axios</h2>
        <button type="button" onClick={handleClick}>
          Fetch Path
        </button>

        <input
          style={{ display: "none" }}
          type="text"
          placeholder="Element..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        {/* {data &&
          data.map((item) => (
            // <p key={item.id}>
            <p>
              <span>No: {Math.floor(Math.random() * 10)}</span>
              {item.alpha_two_code} - <b>{item.name}</b>
            </p>
          ))} */}
      </div>
    </>
  );
}
=======
// function TestAxios() {
//   const [data, setData] = useState(null);
//   const handleClick = () => {
//     let config = {
//       url: "https://jsonplaceholder.typicode.com/posts",
//       headers: {},
//       method: "GET",
//     };

//     axios(config)
//       .then((jsData) => {
//         setData(jsData.data);
//       })
//       .catch((err) => console.log("Error Occured"));
//   };

//   console.log(data);
//   return (
//     <>
//       <div className="testContainer">
//         <h2>Test Axios</h2>
//         <button type="button" onClick={handleClick}>
//           Fetch Path
//         </button>
//         {data &&
//           data.map((item) => (
//             <p key={item.id}>
//               <span>No: {item.id}</span>
//               {item.userId} - <b>{item.title}</b>
//             </p>
//           ))}
//       </div>
//     </>
//   );
// }
>>>>>>> a0f325a (#1 21st Dec)

// export default TestAxios;
