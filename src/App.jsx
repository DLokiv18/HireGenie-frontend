import React, { useEffect } from "react";
import Login from "./components/Login";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Register from "./components/Register"
import Dashboard from "./components/Dashboard"
import Emailgenerate from "./components/Emailgenerate"
import Jobtracker from "./components/Jobtracker"
import Resumeanalyzer from "./components/Resumeanalyzer"
import ResumeManagement from "./components/ResumeManagement";
import Interview from "./components/Interview";
import Jobboard from "./components/Jobboard";
import Nav from "./components/Nav"
import api from "./api";

function App() {

  useEffect(() => {
  api.get("health/")
    .then((response) => {
      console.log("Backend is awake:", response.data);
    })
    .catch((error) => {
      console.log("Backend wake-up request failed:", error);
    });
}, []);
  
  const router=createBrowserRouter([
    {
      path:"/",
      element:<><Login></Login></>
    },
    {
      path:"/register",
      element:<><Register></Register></>

    },
    {
      path:"/dashboard",
      element:<><Nav></Nav><Dashboard></Dashboard></>
    },
    {
      path:"/resume",
      element:<><Nav></Nav><Resumeanalyzer></Resumeanalyzer></>

    

    },
    {
      path:"/resumemanage",
      element:<><Nav></Nav><ResumeManagement></ResumeManagement></>

    },
    {
      path:"/email",
      element:<><Nav></Nav><Emailgenerate></Emailgenerate></>
    },
    {
      path:"/jobtracker",
      element:<><Nav></Nav><Jobtracker></Jobtracker></>
    },
    {
      path:"/interview",
      element:<><Nav></Nav><Interview></Interview></>
    },
    {
      path:"/jobboard",
      element:<><Nav></Nav><Jobboard></Jobboard></>
    }
   

  ])
  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    
      
    </>
  )
}

export default App
