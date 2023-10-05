
import React from "react";
import { useState } from "react"
import ButtonComponent from "./ButtonComponent";
export default function StateProps(){
    const [count, setCount] = useState(0);
    function hundleClick(){
        setCount(prev=> prev+1)
    }
    return(
        <div className="myCount">
            <h4>Button has been clicked: <span>{count}</span> times</h4>
            <ButtonComponent Clickon= {hundleClick}/>
        </div>

    )
}