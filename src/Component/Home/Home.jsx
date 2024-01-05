import React from 'react'

function Home() {
    
    const s={
        fontSize:"40px",
        color:"#c0c0c0",              // <-- CSS AS const
        textAlign:"center"
     }
     
   function myfun(){
    alert("This is test function")     // Define Function
     }
    
  return (
     <div>    
         <h1 style={s}>Home</h1>
         <button onClick={myfun} style={{width:"400px", height:"70px", color:"#fff",background:"#000",alignSelf:"center"}}>Click</button>      {/*  <-- Calling Function and Inline Css */}
     </div>
  );
}

export default Home;