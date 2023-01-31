import { useState } from "react";



function Count() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("")

  function incrementValue() {
    setCount((prevCount) => count + 1);
    if(count >= 10) {
      setCount(10);
    }
  }
  function decrementValue() {
    setCount((prevCount) => count - 1);
    if(count <= 0) {
      setCount(0);
    }
  }
  function handleOnChange(e) {
    setInput((prevInput) => e.target.value);
    console.log(input);
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "50px",
          justifyContent: "center",
          padding: "33.5px",
          backgroundColor: "lightgray",
          color: "green",
          width: 'auto',
        }}
      >
        <button onClick={decrementValue} style={{ width: "40px" }}>
          -
        </button>
        <span style={{ fontSize: "30px" }}>₱ {count}</span>
        <button variant="primary" onClick={incrementValue} style={{ width: "40px" }}>
          +
        </button>

        <input onChange={handleOnChange} value={input}></input>
      </div>
    </>
  );
}

export default Count;
