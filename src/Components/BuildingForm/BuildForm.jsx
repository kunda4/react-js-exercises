import {React,useState} from "react";
export default function BuildForm(){
        const [FirsName,nextName] = useState('')
        const [LastName,nextName2] = useState('')
    
        return(
            <div className="grid gap-3 place-items-center mt-40">
                <input type="text" placeholder="First name" className="border-2 rounded-lg px-5 py-3 " onChange={(e)=>{nextName(e.target.value)}}></input>
                <input type="text" placeholder="Last name" className="border-2 rounded-lg px-5 py-3" onChange={(e)=>{nextName2(e.target.value)}}></input>
                <button className="border-2 rounded-lg px-3 bg-red-700 text-white py-3" onClick={()=>{alert(`Hello ${FirsName} ${LastName}`)}}>Greet Me</button>      
            </div>
        )
    }
