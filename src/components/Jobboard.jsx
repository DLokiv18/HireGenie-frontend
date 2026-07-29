import React,{useState} from "react"
import "../styles/Jobboard.css"
import api from "../api.js"

function Jobboard(){
    const[Result,setResult]=useState([])
    const[skill,setskill]=useState("")
    const[location,setLocation]=useState("")
    const[freshness,setFreshness]=useState("")
    const[experience,setExperience]=useState("")
    function Final(e){
        e.preventDefault()
        api.post("jobboard/",
            {
                Skills:skill,
                Location:location,
                Freshness:freshness,
                Experience:experience
            }
        )
        .then((response)=>{
            console.log(response.data.all_jobs)
            setResult(response.data.all_jobs)
            setskill("")
            setExperience("")
            setLocation("")
            setFreshness("")
            

        })
        .catch((error)=>
        {
            console.log(error)
        })

    }
    function SaveJob(Job){
        api.post("job-tracker/",
            {
                company_name:Job.company,
                location:Job.location,
                role:Job.title


            }
        )
        .then((response)=>
        {
            console.log(response.data)
        })
        .catch((error)=>
        {
            console.log(error)
        })
    }


    return(
        <>
        <form className="TopContainer1" onSubmit={Final}>
                <input className="interview1" type="text" placeholder="Keyword:Frontend Developer"
                value={skill}onChange={(e)=>setskill(e.target.value)}/>
                <input type="text" className="interview1" placeholder="Location:Bengaluru"
               value={location} onChange={(e)=>setLocation(e.target.value)}/>
                <input type="number" className="interview1" placeholder="Experience:0 to 10"
               value={experience} onChange={(e)=>setExperience(e.target.value)}/>
                <input type="Text" className="interview1" placeholder="Freshness: Today or week or all"
               value={freshness} onChange={(e)=>setFreshness(e.target.value)}/>
                
                <button className="int_bt1">Search</button>
            </form>
      <div className="Job_details1">
      {Result.map((x)=>
        (
        <>    
        <div className="Job_details">
            <h2 className="Title_name">{x.title}</h2>
            <p className="Des_names">{x.company}•{x.location}</p>
            {/* {/* <button className="fin_bt"> */}
            <a 
        href={x.apply_url}
        target="_blank"
        rel="noopener noreferrer"
    >
        Apply
    </a>
    {/* </button> */}

        <button className="Save"
        onClick={()=>SaveJob(x)}>➕Save To JobTracker</button>
        </div>   
        </> 
        ))}
        </div>
        </>
    )
}
export default Jobboard