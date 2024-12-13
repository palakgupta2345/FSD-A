import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from "react-router-dom"; 
import './Dashboard.css'

const DashBoard = ({ regDash }) => {
  return (
    <div>
      <div className="container">
        <div className="jumbotron"
        style={{ colot:"white", backgroundColor:"lightblue"}}>
          <div className="row">
            <div className="col-sm-12">
            <h1>User DashBoard</h1>
            </div>
          </div>
          <div className="row">
          <div className="col-sm-12">
            <h2>Welcome {regDash.name}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <h1>
              <Link to="/logout">Logout</Link>
            </h1>
          </div>
        </div>
          
        </div>
        <p>You Login Email : {regDash.email}</p>
        <p>Click the button to Fetch Weather</p>
      </div>
    </div>
  );
};

export default DashBoard;