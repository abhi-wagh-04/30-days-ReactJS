import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {

  const navigate = useNavigate();  

  return (
    <div style={{display: 'flex', justifyContent:"center", alignItems: "center", height:"100vh"}}>
      <div style={{display: 'flex', flexDirection: "column"}}>
        <p style={{fontSize: "20px"}}>Welcome to React 30days Task Challenge</p>
        <button style={{borderRadius: "20px", cursor: 'pointer', padding:"10px"}} onClick={() => navigate("Day-01")}>Let's start with Task 1 !!!!</button>
      </div>
    </div>
  )
}
