import React from "react";
import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    const increment = () =>{
        setCount(count+1)
    };
    const decrement = () =>{
        if(count!= 0){
            setCount(count-1)
        }else{
            alert("menfi mehsul olmur")
        }
    };


    return(
        <div className="counter">
            <button onClick={increment} title="+" className="primary" /> 
            <p style={{marginTop:"20px", marginBottom:"20px", fontSize:"30px", fontWeight:"800"}}>{count}</p>
            <button onClick={decrement} title="-" className="secondary" />
        </div>
    )
}

export default Counter;