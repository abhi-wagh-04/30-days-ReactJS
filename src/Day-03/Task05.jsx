import React, { useState } from 'react'

export default function Task05() {

  const [degree, setDegree] = useState(0);  
  const [farenhit, setFarenhit] = useState(32);

  const convertToFarenhit = (val) => {
    setFarenhit(far => {
        setDegree(val);
        return (val * 9/5) + 32;
    })
  }  

  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent:'center', alignItems: 'center'}}>
      <div style={{display: "flex", justifyContent: 'space-between', textAlign:'center', alignItems: 'center', height: "300px", width:"700px", background: "linear-gradient(to right, #1E3A8A, #06B6D4", padding:"20px"}}>
        <div style={{display: 'flex', flexDirection: 'column', width: "50%"}}>
            <p style={{fontSize: "23px", color: "white",}}>Enter the temparature in <br/>℃</p>
            <input type='number' value={degree} onChange={(e) => convertToFarenhit(e.target.value)} placeholder='Eg. 25℃' style={{borderRadius: "15px", padding: "10px 20px"}}/>
            <button onClick={() => convertToFarenhit(degree)} style={{marginTop: "10px", borderRadius: "7px", padding:"10px", background: "linear-gradient(to right, #E3F2FD, #F3E8FF)", color:"black", border:"none", boxShadow:"0px 5px 5px rgba(0,0,0,0.4)", cursor: 'pointer'}}>Convert to °F</button>
        </div>
        <div style={{width: "50%"}}>
            <h1>{farenhit}°F</h1>
        </div>
      </div>
    </div>
  )
}
