import React,{useState} from "react";
import "../styles/Login.css";
import axios from "axios"
import api from "../api"
import {useNavigate} from "react-router-dom"
function Login(){
    const navigate=useNavigate()
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    function Fetching(e){
        e.preventDefault()
        api.post("login/",
            {
                username:email,
                password:password
            }
        )
        .then(
            (response)=>{
            console.log(response.data.access)    
            localStorage.setItem("access",response.data.access)
            localStorage.setItem("refresh",response.data.refresh)
            navigate("/dashboard")

         }
         
        )
        .catch(
            (error)=>{
            console.log(error)}
        )
    }
    function handler(e){
        setemail(e.target.value)
    }
    function handler1(e){
        setpassword(e.target.value)
    }
    function swap(e){
        navigate("/register")
    }

    return(
        <>
       <div id="Parent">
        <div id="Container">
            <form onSubmit={Fetching} className="L_form">
                <h2>HireGenie AI</h2>
                <h4>Welcome Back Sign in to continue</h4>
                <input className="input" onChange={handler} type="text" placeholder="Email Address"/>
                <br /><br />
                <input className="input" onChange={handler1}
                type="password" placeholder="Password" />
                <br /><br /><br />
                <button className="Bu_Log">Log In</button>
                <br /><br />
                <hr />or
                
                <p onClick={swap}>Dont have an account? Register➡️</p>

                

            </form>
        </div>
        </div>
        

        </>
    )
}
export default Login
