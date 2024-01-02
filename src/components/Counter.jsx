import { useState } from "react";

function Counter() {
  
  const [count,setCount] = useState(0);
  const [incrementBy,setIncrementBy] =useState(1)
  function click(){
    setCount(count+incrementBy)
    
  }
  function clickdec(){
    setCount(count-1)
    

  }
  function incrementbutton(){
    setIncrementBy(incrementBy+1)
  }
  return ( 
    <div>
      <h1>counter value is :{count}</h1>
      <button onClick={click}>increment</button>
      <button onClick={clickdec}>decerement</button>
      <h1>value increment by:{incrementBy}</h1>
      <button onClick={incrementbutton}>incrementBy</button>
    </div>
   );
}

export default Counter;