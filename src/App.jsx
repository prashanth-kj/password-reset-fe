import React from "react"
import { BrowserRouter, Route, Routes ,Navigate } from "react-router-dom"
import Signup from "./components/SignUp"
import ForgetPassword from "./components/ForgetPassword"
import Login from "./components/Login"
import Dashboard from "./components/Dashboard"
import ResetPassword from "./components/ResetPassword"


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

