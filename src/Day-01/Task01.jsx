import React, { useState } from 'react'

export default function Task01() {

  const [count, setCount] = useState(1);
  const [step, setStep] = useState(1);

  const incrementCounter = () => {
    setCount(cnt => cnt + Number(step));
  }

  const reset = () => {
    setCount(1);
  }

  return (
    <div style={{display: "flex", flexDirection:"column" ,justifyContent: "center", alignItems: "center",  height: "50vh", backgroundColor: "#E6E6FA" }}>
       <div style={{display: 'flex', gap: "10px", marginBottom: "20px"}}>
          <span style={{fontSize: "20px"}}>Step Size:</span>
          <input value={step} onChange={(e) => setStep(e.target.value)} style={{border: "none", borderRadius: "10px", padding:"1px 12px", backgroundColor: "whitesmoke", outline:"none", boxShadow: "0px 2px 3px rgba(0,0,0,0.4)"}}/>
      </div> 
       <div style={{display: "flex",boxShadow: "0px 7px 10px rgba(0,0,0,0.5)", border:"1px", gap: "20px", alignItems: "center", margin: "0px", backgroundColor: "whitesmoke"}}>
          <div>
              <button onClick={() => setCount( cnt => cnt - Number(step))} style={{ justifyContent: "center", textAlign: "center", padding: "30px 50px", border: "none", cursor:"pointer"}}>
                  -
              </button>
          </div>
          <div style={{margin: "0px"}}>
            
             {count >= 0 ?
              <p style={{margin:"0px", padding: "auto", fontSize: "20px"}}>
                {count}
              </p>  
              : 
              <p style={{color: "red"}}>
                Negative count is not allowed
              </p>
              }
            
          </div>
          <div>
             <button onClick={incrementCounter} style={{ justifyContent: "center", textAlign: "center", padding: "30px 50px", border:"none", cursor:"pointer"}}>
                  +
              </button>
          </div>
       </div>
       <div style={{margin: "30px"}}>
          <button onClick={reset} style={{padding: "10px 20px", border: "none", backgroundColor: "whitesmoke",boxShadow:"0px 3px 5px rgba(0,0,0,0.2)", cursor: 'pointer'}}>
            Reset
          </button>
       </div>
    </div>
  )
}
