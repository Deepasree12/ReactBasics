import { useState } from "react";

function Oddeven() {
  const [num,setNum]=useState(1)
  function number(){
    setNum(num+1)
    
  }
  function oddev(){
    return num%2==0 ? "even": "odd"
    
  }
  
  return ( 
    <div>
      <h1>{num}</h1>
      <button onClick={number}>click</button>
      <h1>{oddev()}</h1>
     
    </div>
   );
}

export default Oddeven;