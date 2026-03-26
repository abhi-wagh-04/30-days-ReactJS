import React, { useState } from 'react'

export default function Task03() {

  const [char, setChar] = useState("");   

  const limit = char.length < 250;
  console.log(char.length);
  console.log(limit);

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: "100vh", margin:0}}>
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <textarea  value={char} onChange={(e) => setChar(e.target.value)} rows="6" cols="50" placeholder='Enter your text here' style={{ fontSize: "20px",padding:"10px", width:"600px", height:"180px"}}/>
            <p style={{marginLeft: "85%", fontSize: "25px"}}>{char.length}<span style={{color: "red", fontSize: "25px"}}>/250</span></p>
            <p style={{marginLeft: "10%", marginRight:"10%" ,transition: "all 0.5s ease", overflow: 'hidden', opacity: limit ? 0 : 1, transform: limit ? "translateY(-10px)" : "translateY(0px)", background: "linear-gradient(to bottom, #ffcccc, #ffffff )", color:"#FF0000", textAlign:'center', padding:"10px", boxShadow: "0px 6px 8px rgba(0,0,0,0.4)"}}>
                You have crossed char limit    
            </p>
            
        </div>
      
    </div>
  )
}
