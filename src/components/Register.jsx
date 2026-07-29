import React,{useState} from "react";
import "../styles/Register.css"
// import axios from "axios"
import api from "../api"
import { useNavigate } from "react-router-dom";
function Register(){
    const navigate=useNavigate()
    const [name,setname]=useState("")
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    const [Experience,setExperience]=useState("")
    const [Location,setLocation]=useState("") 

    function handler(e){
        e.preventDefault()
        api.post("register/",
            {  
                username:email,
                full_name:name,
                email:email,
                password:password,
                experience_level:Experience,
                prefered_location:Location

            }
        )
        .then(
            (response)=>{
                console.log(response.data.message)
            
            if(response.data.message==="Data Saved Successfully"){
                    navigate("/")
            }
            }    
        )
        .catch(
            (error)=>{
                console.log(error)
                alert(JSON.stringify(error.response.data))
            }
        )

    }
    function swaplogin(e){
        navigate("/")
    }

    return(
        <>
        <div id="Parent1">
            <div id="Container1">
                <form onSubmit={handler}>
                <h2>Create your account</h2>
                <input type="text" onChange={e=>setname(e.target.value)} placeholder="Full name" className="R_input"/>
                <br /><br />
                <input type="email" onChange={e=>setemail(e.target.value)} placeholder="Email address" className="R_input"/>
                <br /><br />
                <input type="password" onChange={e=>setpassword(e.target.value)}
                placeholder="Password" className="R_input"/>
                <br /><br />
                <input type="password" placeholder="Confirm Password" className="R_input"/>
                <br /><br />
                <input type="number" onChange={e=>setExperience(e.target.value)} placeholder="Experience Level" className="R_input"/>
                <br /><br />
                <input type="text" onChange={e=>setLocation(e.target.value)} placeholder="Prefered Location" className="R_input"/>
                <br /><br />
                <button id="R_button">Create Account</button>
                <br />
                <p onClick={swaplogin}>Already have an account? Login➡️</p>
                </form>



            </div>

        </div>
        </>
    )
}
export default Register
