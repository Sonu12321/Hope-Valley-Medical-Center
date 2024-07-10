import React, { useContext, useEffect } from 'react'
import './App.css'
// import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Appointment from './pages/Appointment';
import Register from './pages/Register';
import About from './pages/About';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import { Context } from './main';
import axios from 'axios';
import Footer from './components/Footer';
import Tryme from './components/Tryme'





function App() {
 const {isAuthenticated, setIsAuthenticated,setUser} =useContext(Context)
 useEffect(()=>{
  const fetcherUser = async()=>{
    try {
      const response = await axios.get("https://backendhos.onrender.com/api/user/Patient/me",
        {
          withCredentials:true,
        }
      ) 
      setIsAuthenticated(true)
      setUser(response.data.user)
    } catch (error) {
      setIsAuthenticated(false);
      setUser({});
    }
  }
  fetcherUser()
 },[isAuthenticated])

  return (
    <>
     <Router>
      <Tryme/>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/appointment' element={<Appointment/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/about' element={<About/>} />
 
          
        </Routes>
        <ToastContainer position='top-center'/>
        <Footer/>
      </Router>
    </>
  )
}

export default App
