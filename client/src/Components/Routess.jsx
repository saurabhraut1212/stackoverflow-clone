import React from 'react'
import {Routes,Route} from "react-router-dom";
import Home from '../Pages/Home/Home';
import Auth from '../Pages/Auth/Auth';
import Quetions from "../Pages/Quetions/Quetions";
import AskQuestion from '../Pages/AskQuestion/AskQuestion';
import DisplayQuestion from '../Pages/Quetions/DisplayQuestion';
import Tags from '../Pages/Tags/Tags';
import Users from '../Pages/Users/Users';
import UserProfile from '../Pages/UserProfile/UserProfile';
const Routess = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/auth" element={<Auth/>}/>
      <Route path="/Quetions" element={<Quetions/>}/>
      <Route path="/AskQuestion" element={<AskQuestion/>}/>
      <Route path="/Questions/:id" element={<DisplayQuestion/>}/>
      <Route path="/Tags" element={<Tags/>}/>
      <Route path="/Users" element={<Users/>}/>
      <Route path="/Users/:id" element={<UserProfile/>}/>
    </Routes>
  )
}

export default Routess