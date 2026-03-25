import React, { useState } from 'react'

export default function Task02() {

  const [show, setShow] = useState(false);  

  const toggle = () => {
    setShow(val => !val);
  }

  return (
    <div style={{display: 'flex', justifyContent:'center', alignItems:'center', height: "50vh", backgroundColor: "#DFF5E1"}}>
        <div style={{display: 'flex', justifyContent: "stretch"}}>
            <input type={`${show ? 'text' : 'password'}`} placeholder='Enter Password' style={{outline: "none",fontSize:"20px", border:"none", padding:"8px 30px", width:"300px", borderRadius:"20px"}}/>
            <button onClick={toggle} style={{ cursor:'pointer',borderRadius: "20px", border:"none", padding:"30px 20px", background:"linear-gradient(120deg, #E3F2FD, #EDE7F6, #FCE4EC)"}}>Show Password</button>
        </div>
    </div>
  )
}
