import React from 'react'
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { useAuthContext } from './context/Authcontext';

const App = () => {

  const { authUser } = useAuthContext();
  

  return (
     
    <div className=" p-4 min-h-screen flex items-center justify-center bg-[url('./assets/bgImage.jpg')] bg-cover bg-center ">
      
      <Routes> 
        <Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />
        <Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
        <Route path='/signup' element={authUser ? <Navigate to='/' /> : <Signup />} />
      </Routes>
      
    </div>
  )
}

export default App