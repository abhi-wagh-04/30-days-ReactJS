import React, { useState } from 'react'

export default function Task04() {

  const [more, setMore] = useState(false);  


  return (
    <div style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
      <div style={{display:'flex', flexDirection: 'column', justifyContent:'center', width: "600px"}}>
        <p style={{background:"linear-gradient(to bottom, #faf1f1, #ffffff)", margin: 0, padding: 0}}>The morning breeze carried a quiet sense of calm as the city slowly woke to life.<br/> People moved along the streets with purpose, chasing routines and responsibilities.</p>
        <div style={{width: "inherit", zIndex: 0, position:'relative'}}>
            <p style={{opacity: more ? 1 : 0, overflow: 'hidden', transition: "all 0.4s ease", background: "linear-gradient(to bottom, #faf1f1, #ffffff)", margin: 0, padding: 0}}>Under the golden glow of the evening sky, the park transformed into a peaceful retreat from the chaos of daily life.<br /> Children laughed as they ran across the grass, while others sat quietly, lost in thought or conversation. <br/>The gentle rustling of leaves blended with distant sounds of traffic, creating a strange but comforting harmony.</p>
            <button onClick={() => setMore((s) => !s)} style={{transition: "all 0.6s ease", transform: more ? "translateY(150px)" : "none",  padding:"10px", background: "linear-gradient(to bottom, #ffcccc, #ffffff )", cursor: 'pointer', position:'absolute', top: 0,zIndex: 10 ,border:"none", boxShadow: "0px 5px 6px rgba(0,0,0,0.4)", width: "inherit"}}>{more ? "Read Less" : "Read More "}</button>
        </div>
      </div>
    </div>
  )
}
