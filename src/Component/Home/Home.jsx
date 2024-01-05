import React from 'react'

function Home() {
    
    const s={
        fontSize:"40px",
        color:"#c0c0c0",              // <-- CSS AS const
        textAlign:"center"
     }

     const cnc={title:"CNC Web World",
                Subtitle:"Pune MH", 
                Course1:"Java Full Stack",
                Course2:"Python Full Stack"
            }
     
   function myfun(){
    alert("This is test function")     // Define Function
     }
    
  return (
     <div>    
         <h1 style={s}>Home</h1>
         <button onClick={myfun} style={{width:"400px", height:"70px",
          color:"#fff",background:"#000",alignSelf:"center"}}>Click</button>      {/*  <-- Calling Function and Inline Css */}
          <h1>{cnc.title}</h1>
     </div>
  );
}

export default Home;