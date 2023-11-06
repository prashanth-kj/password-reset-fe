import React from "react"
import { BrowserRouter, Route, Routes ,Navigate } from "react-router-dom"
import Signup from "./components/Signup.jsx"
import ForgetPassword from "./components/ForgetPassword.jsx"
import Login from "./components/Login.jsx"
import Dashboard from "./components/Dashboard.jsx"
import ResetPassword from "./components/ResetPassword.jsx"


function App() {
 

  return (
    <>
     <BrowserRouter>
     <Routes>
         <Route path="/signup" element={<Signup/>}/>
         <Route path="/forgetpassword" element={<ForgetPassword/>} />
         <Route path="/reset-password/:randomString/:expirationTimestamp" element={<ResetPassword/>}/>
         <Route path="/login" element={<Login/>} />
         <Route path="/dashboard" element={<Dashboard/>}/>
         <Route path="*" element={<Navigate to='/login'/>} />
     </Routes>
     
     </BrowserRouter>
    </>
  )
}

export default App

