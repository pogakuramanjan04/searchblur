import "./styles.css";
import React, { useState } from "react";
export default function App() {
  const [a, ua] = useState([]);
  function v() {
    // console.log(event.target.value);
    if (event.target.value !== undefined) {
      let endpoint = event.target.value;
      ram1(endpoint);
    }
  }
  ram1 = async (ep) => {
    //  console.log(endpoint)
    //  ramya add for the api end point like this
    let endpoint1 = "https://randomuser.me/api/?results=5" + ep;
    console.log(endpoint1);
    const response = await fetch("https://randomuser.me/api/?results=5");
    const data = await response.json();
    let a = [];
    for (let x in data.results) {
      // console.log(data.results[x].name.first);
      let j = (
        <>
          {" "}
          <h1>{data.results[x].name.first}</h1>{" "}
        </>
      );
      a.push(j);
    }
    // console.log(a);
    ua(a);
  };
  return (
    <div className="App">
      <input type="text" onBlur={v} />
      {a}
    </div>
  );
}
