import React from "react"
import {Link} from "react-router-dom"
import "../styles/Nav.css"
import { useNavigate } from "react-router-dom"
function Nav(){
    const navigate=useNavigate()
    function signhandler(){
        navigate("/")
    }
    return(
        <>
        <div className="Nav_cont">
            {/* <div className="Small_cont"> */}
               
                <h3 className="Center">HireGenie AI</h3>
                
               
                
                

            {/* </div> */}
            <div className="Full_nav">
            <div className="Inner_nav">
            <Link to="/dashboard" className="Link_style">🤖Dashboard</Link>
            <Link to="/resume" className="Link_style">Resume Analyzer</Link>
            <Link to="/resumemanage" className="Link_style">Resume Management</Link>
            <Link to="/email" className="Link_style">📩Email Generation</Link>
            <Link to="/jobtracker" className="Link_style">Job Tracker</Link>
            <Link to="/interview" className="Link_style">Interview Preparation</Link>
            <Link to="/jobboard" className="Link_style">Job Board</Link>
            </div>
            <div className="Below_nav">
            <button className="Left_but"
            onClick={signhandler}>Logout</button>
            </div>
            
        </div>
        </div>

        </>
    )
}
export default Nav;