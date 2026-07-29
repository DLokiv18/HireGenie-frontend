import React,{useState,useEffect} from "react";
import "../styles/Jobtracker.css"
// import axios from "axios"
import api from "../api.js"
function Jobtracker(){
    const[Application,setApplication]=useState([])
    function fetching(){
        api.get("job-tracker/")
        .then((response)=>{

        
        console.log(response.data.Data)
        setApplication(response.data.Data)
    }
    )
        .catch((error)=>{
            console.log(error)
        })
    }   
    useEffect(()=>{
    fetching()
    },[])
    
    return(
        <>
       
       <div className="heading_jobt">
           <h2>Welcome to Job History</h2>

       </div>
       <div className="Application_Details">
       {Application.map((x)=>{
               return(
               <> 
               <div className="Application_Card" key={x.id}>
                       <p>Company_name:{x.company_name}</p>
                       <p>{x.location}</p>
                       <p>{x.role}</p>
                       <p>{x.status}</p>
                       <p>{x.applied_date}</p>
               </div>
               </>
       )
       })}
       </div>
        </>
    )
}
export default Jobtracker;