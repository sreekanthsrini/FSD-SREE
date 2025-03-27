import React, { useState } from "react";

function Advice() {
    const [advice,setAdvice]=useState("HI")
    const [count,setCount]=useState(0)

    async function getAdvice(){
        const response=await fetch("https://api.adviceslip.com/advice")
        const data=await response.json();
        console.log(data)
        setAdvice(data.slip.advice)
        setCount(count+1)
    }
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Welcome to the Advice Page!</h1>
            <p>Here is some useful advice for you.</p>
            <h1>{advice}</h1>
            <button onClick={getAdvice}>Get Advice</button>

            <h2>{count}</h2>
        </div>
    );
}

export default Advice;
