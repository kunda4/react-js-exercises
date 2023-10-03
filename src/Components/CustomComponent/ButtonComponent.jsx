import React from "react"
export default function Button(props){
    function clickHandler(){
        alert(`You Clicked on ${props.name}`)
    }
    return(


        <button onClick={clickHandler}>{props.name}</button>
    )
}