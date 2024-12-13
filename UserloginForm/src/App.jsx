import React, { useState } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Mainlayout from './components/Mainlayout';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Register from './components/register';
import Logout from './components/Logout';

const App = () => {
  const[data,setdata]=useState();
  return (
    <div>
      {/* {JSON.stringify(data)} */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainlayout />}/>
          <Route path="/login" element={<Login regLogin={data}/>}/>
          <Route path="/register" element={<Register regdata={setdata}/>}/>
          <Route path="/dashboard" element={<Dashboard regDash={data}/>}/>
          <Route path="/logout" element={<Logout regLog={setdata}/>}/>
        </Routes>
      </BrowserRouter>
      </div>
  )
}

export default App