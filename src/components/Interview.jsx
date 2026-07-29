import React,{useState} from "react";
import "../styles/Interview.css"
// import axios from "axios"
import api from "../api.js"
function Interview(){
    const[Questions,setQuestions]=useState([])
    const[Role,setRole]=useState("")
    const[name,setname]=useState("")
    function handlerI(e){
        e.preventDefault()
        console.log("The Form is Submitted")
        api.post("http://127.0.0.1:8000/api/interview/",
            {
                role:Role,
                Company_name:name
            }

        )
        .then((response)=>
        {
            console.log(response.data)
            setQuestions(response.data.Questions.join("\n"))

        })
        .catch((error)=>
        {
            console.log(error)
        })

    }
    return(
        <>
        
            <form className="TopContainer" onSubmit={handlerI}>
                <input className="interview" type="text" placeholder="Role:Frontend Developer"
                onChange={(e)=>setRole(e.target.value)}/>
                <input type="text" className="interview" placeholder="Ex:Cognizant"
                onChange={(e)=>setname(e.target.value)}/>
                <button className="int_bt">Generate Questions</button>
            </form>

            <div className="Middle_inter">
                     <pre>{Questions}</pre>

            </div>
        </>
    )
}
export default Interview