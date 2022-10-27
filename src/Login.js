import React from "react";

function Login({onclickp}) {
    onclickp()

  return (
    <div className="Form-container">
       
      <div className="Header">Login</div>
      <div className="Content">
        <div className="logo">
          <img src="" alt="" />
        </div>
        <div className="Form">
      
          <div className="Form-group">
            <label htmlFor="Username">Username: </label>
            <input type="text" name="username" placeholder="Username" />
          </div>
          <div className="Form-group">
            <label htmlFor="Password">Password: </label>
            <input type="text" name="Password" placeholder="Password" />
          </div>
      
        </div>
      </div>
      <div className="Form-group">
        <button type="button" className="btn">Submit</button>
        </div>
        
    </div>
   
  );
}

export default Login;
