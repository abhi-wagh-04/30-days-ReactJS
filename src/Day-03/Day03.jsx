import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Day03() {
  return (
    <div style={{display:'flex', justifyContent:'center', flexDirection:'column',alignItems: 'center', background: "linear-gradient(to right, #FFF9E6, #FFE4E1)", height:"100vh"}}>
      <div style={{display:'flex', flexDirection:"column", marginTop:"90px", marginBottom: "70px"}}>
        <p style={{fontSize:"20px"}}>Welcome to Day 2 of React Challenge Series !!!</p>  
        <div style={{display: 'flex', gap: "20px", justifyContent:"space-between"}}>
            <Link to="Task-05"><button style={{cursor:'pointer', borderRadius: "20px", padding:"10px 20px", outline: "none", border: "none", boxShadow: "0px 10px 10px rgba(0,0,0,0.3)"}}>Task 05</button></Link>
            {/* <Link to="Task-04"><button style={{cursor:'pointer', borderRadius: "20px", padding:"10px 20px", outline: "none", border: "none",boxShadow: "0px 10px 10px rgba(0,0,0,0.3)"}}>Task 04</button></Link> */}
        </div>
      </div>
      {}

      <div style={{width:"800px", height:"inherit"}}>
        <Outlet/>
      </div>  
        

    </div>
  )
}
