import { useState } from "react";

function Input() {
  // let arr=[];
  const [input,setInput]=useState([])
  function inputtext(event){
    
    if (event.key==="Enter"){
     const arr1=[...input,event.target.value]
     setInput(arr1)
     event.target.value=""
    }
  }
  return ( 
    <div>
      <input type="text" onKeyUp={inputtext}/>
      <h1>{input.map((item, index) => <div key={index}>{item}</div>)}</h1>
    </div>
   )
}

export default Input;