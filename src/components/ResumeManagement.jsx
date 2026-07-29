import React,{useState,useEffect,useRef} from "react"
import "../styles/ResumeManagement.css"
// import axios from "axios"
import api from "../api.js"

function ResumeManagement(){
    const inputref=useRef(null)
    const[resumes,setresumes]=useState(null)
    const[Data,setData]=useState([])
    // const token=localStorage.getItem("access")
    function handler3(e){
        const formData = new FormData();
        formData.append("file",resumes)
        api.post("resume/",formData)            
        .then((response)=>{
            console.log("successfully saved")
            setresumes(null)
            fetchresumes()
            inputref.current.value=""

        })
        .catch((error)=>{
            // console.log(error)
            console.log("Status:", error.response?.status);
            console.log("Response:", error.response?.data);
            // console.log(error.message)
        })    
         
        
    }
    useEffect(()=>
        {fetchresumes()}
    ,[])
    function fetchresumes(){
        api.get("resume/")
        .then((response)=>{
            setData(response.data.data)
            console.log(response.data.data);
            console.log(response.data.data.length);
        })
        .catch((error)=>{
            console.log(error)
        })


    }
    function handlerDe(id){
        api.delete(`resume/${id}/`)
        .then((response)=>{
              console.log("Successfully deleted")
              fetchresumes()
        })
        .catch((error)=>{
            console.log(error)
        })

    }
    
    return(
        <>
        <h1 className="Resume_for_he">Resume Management</h1>
        <div className="Resume_for_co">
            
            <input type="file" onChange={(e)=>setresumes(e.target.files[0])}
             ref={inputref}/>
            <button onClick={handler3}
            className="Resume_Button">Upload Resume</button>
            

        </div>
        

            



        
    <div className="Resume_container">
    {Data.map((resume) => (
        <div key={resume.id} className="Resume_Details">
            <p>< strong className="Same">Resume:</strong> {resume.file.split("/").pop().split("_")[0] + ".pdf"}</p>
            <p><strong className="Same">Version:</strong> {resume.version_no}</p>
            <p><strong className="Same">Status:</strong> {resume.is_primary ? "Primary" : "Secondary"}</p>
            <p><strong className="Same">Uploaded:</strong> {" "}
            {new Date(resume.uploaded_at).toLocaleDateString("en-GB")}
            </p>
            <button className="Resume_Button1" onClick={()=>handlerDe(resume.id)}>Delete</button>
        </div>
    ))}
      </div>  
    </>

    )
}
export default ResumeManagement