function Color() {
  function click(){
    console.log("button clicked");
  }
  return ( 
    <div>
      <button onClick={click}>click button</button>
    </div>
   );
}

export default Color;