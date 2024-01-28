import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

// class vs functional

// class -> state handling is good but cant use hooks etc
// functional -> no state, thats why we use hooks

import PostList from "./pages/PostList";

const Calculator = ()=> {

  return <>
      <div>
        <div>
          Calculator
        </div>
      </div>
  </>
}


const App = function () {
  const [counter, setCounter] = useState(0);
  const [decCounter, setDecCounter] = useState(10);

  useEffect(() => {
    console.log("App rendering");
  }, [counter, decCounter]);

  return (
    <>
      <Calculator />
      <PostList />
    </>
  );
};

export default App;

// test -> 2 times
// prod -> 1 time

// this is for pure functions-> SOLID

// run dynamic things
// ={}
