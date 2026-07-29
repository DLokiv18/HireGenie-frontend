import React,{useState} from "react";
// import axios from "axios"
import api from "../api.js"
import "../styles/Emailgenerate.css"
function Emailgenerate(){
    const[Email,setEmail]=useState([])
    const[User,setUser]=useState("")
    const[Receiptent,setReceiptent]=useState("")
    const[Company,setCompany]=useState("")
    const[Role,setRole]=useState("")
    const[Type,setType]=useState("")
    const[Job,setJob]=useState("")
    function handleremail(e){
        e.preventDefault()
        api.post("email-generator/",
            {
                user:User,
                receiptent:Receiptent,
                company:Company,
                role:Role,
                type:Type,
                Job_description:Job

            }
        )  
            .then((response)=>{
                console.log(response.data)
                setEmail(response.data.Email)
            })
            .catch((error)=>
            {
                console.log(error)
            }
            )
        
    }

    return(

        <>
        <div className="Email_form">
        <form className="form_email1" onSubmit={handleremail}>
            <label htmlFor="">Username</label>
            <input type="text" className="Email_g " onChange={(e)=>setUser(e.target.value)}/>
            <label htmlFor="">Receiptent_name</label>
            <input type="text" className="Email_g" onChange={(e)=>setReceiptent(e.target.value)}/>
            <label htmlFor="">company_name</label>
            <input type="text" className="Email_g" onChange={(e)=>setCompany(e.target.value)} />
            <label htmlFor="">Role_name</label>
            <input type="text" className="Email_g" onChange={(e)=>setRole(e.target.value)}/>
            <label htmlFor="">email_type</label>
            <input type="text" className="Email_g" onChange={(e)=>setType(e.target.value)}/>
            <label htmlFor="">Job_description</label> 
            <textarea className="text_Jd" onChange={(e)=>setJob(e.target.value)}></textarea>
            <button className="But_genem">Generate Email</button>


        </form>
        </div>
        <div className="Right_Email">
                  <pre>{Email}</pre>
        </div>
        
        </>
    )
}
export default Emailgenerate;