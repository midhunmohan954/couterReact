import { useState } from "react";
import "./App.css";
import Counter from "./Counter";

function App() {
  const [count, setCount] = useState(0);
  const addfunction = () => {
    // console.log('addfunc app')
    count < 10
      ? setCount((prev) => prev + 1)
      : alert("Increment is limited upto 10");
  };
  const subfunction = () => {
    //  console.log('subfunc app')
    count > 0
      ? setCount((prev) => prev - 1)
      : alert("Negative Value is not possible");
  };

  return (
    <div className="App">
      <h1>Counter App</h1>
      <div className="card">
        <Counter
          count={count}
          increment={addfunction}
          decrement={subfunction}
        />
      </div>
    </div>
  );
}

export default App;
