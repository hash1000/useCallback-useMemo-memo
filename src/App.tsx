import React, { useState } from "react";
import "./App.css";
import Child from "./Child";

function App() {
  const [count, setCount] = useState<number>(0);
  
  const increment = React.useCallback(() => {
    setCount((prev)=>prev+1);
  },[setCount]);

const result= React.useMemo(()=>{
  let i=0;
  console.time("result");
  while(i < 100000000000000000){
    i++;
  }
  console.timeEnd("result");
  return 90;
},[])
  return (
    <>
    {/* // why its is render again */}
    {/* but if i pass props and change on its props then it is called with react.memo */}
    {/* we pass refence again and again */}
    {/* // useCallback to memoize the increment function so that it doesn't change on each render */}
 {/* for cash value we use useMemo */}
      <h1>hello i am here {count} {result}</h1>
      <Child increment={increment}/> 
      <button onClick={increment}>click</button>
    </>
  );
}

export default App;
