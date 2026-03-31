import React, { useState } from 'react'

export default function Task06() {

    const quotes = [
    "Success doesnt come from what you do occasionally, it comes from what you do consistently.",
    "Discipline is choosing between what you want now and what you want most.",
    "Small progress every day adds up to big results.",
    "Your only limit is your mind.",
    "Dream big, start small, act now.",
    "Dont watch the clock; do what it does—keep going.",
    "Hard work beats talent when talent doesnt work hard.",
    "Stay patient and trust your journey.",
    "Make yourself proud.",
    "Consistency is more powerful than motivation."
    ];
    
    const [quote, setQuote] = useState(null);

    const generateQuote = () => {
        const index = Math.floor(Math.random() * quotes.length);
        console.log(index);
        setQuote(quotes[index]);
    }


    return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent:'center', alignItems: 'center'}}>
      <div style={{display: "flex", flexDirection: 'column',justifyContent: 'space-between', textAlign:'center', alignItems: 'center', height: "300px", width:"700px", padding:"20px"}}>
        <div style={{width: "100%", position:"relative", alignItems: 'center', justifyContent:'center', textAlign:'center'}}>
            <p style={{color: 'black', transition: "all 0.8s ease", position:"absolute", opacity: quote ? 1 : 0, overflow: 'hidden', alignItems: 'center', justifyContent:'center', height: "auto", marginLeft: "30%"}}>
                “{quote}”
            </p>
            <p style={{ position:"absolute", opacity: quote  ? 0 : 1, right:"50%"}}>Click the button to generate a random quote!!!</p> 
        </div>
        <button onClick={generateQuote} style={{cursor:'pointer'}}>Generate Quote</button>
      </div>
    </div>
  )
}
