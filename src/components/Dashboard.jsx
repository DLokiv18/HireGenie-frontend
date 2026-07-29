import React,{useState,useEffect} from "react";
import "../styles/Dashboard.css"
import api from "../api.js"
// import axios from "axios"

function Dashboard(){
    const token=localStorage.getItem("access")
    const[Users,setUsers]=useState(0)
    const[Resumes,setResumes]=useState(0)
    const[Jobs,setJobs]=useState(0)
    const[Rejected,setRejected]=useState(0)

    useEffect(
        ()=>{
            // axios.get("http://127.0.0.1:8000/api/dashboard/",
            //     {
            //         headers:{
            //             Authorization:`Bearer ${token}`
            //         }
            //     }
            // )
            api.get("dashboard/")
            .then(
                (response)=>
                {
                    setUsers(response.data.data.total_users)
                    setResumes(response.data.data.total_resumes)
                    setJobs(response.data.data.total_jobs)
                    setRejected(0)

                })

            .catch(
                (error)=>{
                    console.log(error)
                })    
        },[])

    return(
        
        <>
       
        <h1 className="heading_dash">Welcome to the Dashboard</h1>
        
        <div className="Dash_Cont">
            <div className="Job">
                    <div className="First_half">
                         <div className="Score">
                            {Users}
                         </div>
                    </div>
                    <div className="Bottom_half">
                       <h1>Total</h1>
                       <h1>Users</h1>
                    </div>

            </div>
            <div className="Job">
            <div className="First_half">
                <div className="Score">
                            {Resumes}
                         </div>

                    </div>
                    <div className="Bottom_half">
                        <h1>Total</h1>
                        <h1>Resumes</h1>
                        
                    </div>
            </div>
            <div className="Job">
                <div className="First_half">
                    <div className="Score">
                            {Jobs}
                         </div>

                    </div>
                    <div className="Bottom_half">
                        <h1>Total</h1>
                        <h1>Applications</h1>
                        
                    </div>

            </div>
            <div className="Job">
                <div className="First_half">
                    <div className="Score">
                            {Rejected}
                         </div>

                    </div>
                    <div className="Bottom_half">
                        <h1>Rejected</h1>
                        
                    </div>

            </div>

        </div>
        </>
    )
}
export default Dashboard;