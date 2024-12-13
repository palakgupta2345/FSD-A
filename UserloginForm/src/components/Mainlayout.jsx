import React from 'react'
import {Link,Outlet} from "react-router-dom";
import './MainLayout.css';

const Mainlayout = () => {
  return (
    <div>
        <nav>
            <ul>
                <li><Link to="/Login">Login</Link></li>
                <li><Link to="/Register">register</Link></li>
            </ul>
        </nav>
        <Outlet/>
     </div>
  )
}

export default Mainlayout