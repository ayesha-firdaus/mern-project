import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Signup from './Pages/Signup/Signup';
import Login from "./Pages/Login/Login"
export default function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/signup' exact element={<Signup />} />
        <Route path='/login' exact element={<Login />} />
      </Routes>
    </BrowserRouter>
      
   
  )
}

