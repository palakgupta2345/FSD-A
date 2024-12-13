import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'


const register = ({regdata}) => {
    const [name, setname] = useState();
    const [email,setemail]=useState();
    const [password,setpassword]=useState();
    const data={name,email,password};
    const handleregister=(e)=>{
        e.preventDefault();
        alert("Register Success");
        regdata(data);
    }
   

  return (
    <div>
        {name},{email},{password}
       <form action="">
       <div className="form-group">
    <label for="name">NAME:</label>
    <input type="text" className="form-control" id="name" onChange={(e)=>{setname(e.target.value)}}/>
  </div>
  <div className="form-group">
    <label for="email">Email address:</label>
    <input type="email" className="form-control" id="email" onChange={(e)=>{setemail(e.target.value)}}/>
  </div>
  <div className="form-group">
    <label for="pwd">Password:</label>
    <input type="password" className="form-control" id="password"onChange={(e)=>{setpassword(e.target.value)}}/>
  </div>
  <br/>
  <button onClick={handleregister} className="btn btn-Primary">Submit</button>
</form></div>
  )
}

export default register