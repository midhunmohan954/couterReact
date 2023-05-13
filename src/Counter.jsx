import React from "react";

function Counter({ count, increment, decrement }) {
  return (
    <div>
      <h2>COUNT IS {count}</h2>
      <button onClick={increment}>INCREMENT</button>
      <button onClick={decrement}>DECREMENT</button>
    </div>
  );
}

export default Counter;
