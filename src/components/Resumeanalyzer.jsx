import React,{useState,useEffect} from "react"
import "../styles/Resume.css"
// import axios from "axios"
import api from "../api.js"


function Resumeanalyzer(){
    // const token = localStorage.getItem("access");
    const[result,setresult]=useState([])
    const[Resume,setResume]=useState([])
    const[Jd,setJd]=useState("")
    const[selectedResume,setselectedResume]=useState("")
    function handler(e){
        e.preventDefault()
        api.post("resume-analyser/",
            {
                resume:selectedResume,
                Jobdescription:Jd
            }
        )
        .then((response)=>{
            console.log(response.data.data)
            setresult(response.data)
            setselectedResume("")
            setJd(" ")
        
        }) 
        .catch((error)=>{
            console.log(error)
        })   
        
    }
    function fetchset(){
    api.get("resume/")
    .then((response)=>
    {
        console.log(response.data.data)
        setResume(response.data.data)
    })
    .catch((error)=>{
        console.log(error)
    })
}
    useEffect(()=>{
   fetchset()
    },[])

    return(
        <>
        <div className="Left_Resume">
           
            <form className="Resume_Form" onSubmit={handler}>
                <label htmlFor="file1">UPLOAD RESUME</label>
                <br /><br />
                <select className="Resume_file" value={selectedResume} onChange={(e)=>setselectedResume(e.target.value)}
                accept=".pdf,.doc,.docx" >
                    <option value="">Select Resume</option>
                {Resume.map((x)=>
                    (
                        
                        <option value={x.id} key={x.id}>
                            {x.file.split("/").pop()}
                        </option>
                        
                    )
                )
             }    
                </select>

                <br /><br />
                <label htmlFor="Text">PASTE JOB DESCRIPTION</label>
                <br /><br />
                <textarea id="Text" onChange={(e)=>setJd(e.target.value)} value={Jd}></textarea>
                <button className="Resume_button">Analyze Resume</button>
                <br /><br /><br />
            </form>
            </div>

       
        
        <div className="Right_Resume">
        
    <div className="ATS">

        <h2>ATS Score</h2>
       
        <h1>{result.ATS_Score}%</h1>
    </div>
    <div className="Matched_skillsand">
        <h3>Matched Skills</h3>
        <ul type="none">
            {result.Matched_Skills?.map((skill, index) => (
                <li key={index}>{skill}</li>
            ))}
        </ul>

        <h3>Missing Skills</h3>
        <ul type="none">
            {result.Missing_Skills?.map((skill, index) => (
                <li key={index}>{skill}</li>
            ))}
        </ul>
        </div>
        </div>
        <div className="Resume_suggestions">
        <h3>Suggestions</h3>
        <ol>
            {result.Suggestions?.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ol>
        </div>

    
     </>
    )

}
export default Resumeanalyzer;