import React from "react";

function Login({ onclickp }) {
  onclickp();

  return (
    <div className="Form-container">
      <div className="Content">
        <div className="Form">
          <div className="Form-group">
            <label htmlFor="Username"></label>
            <input
              type="text"
              name="username"
              placeholder="username"
              className="input"
            />
          </div>
          <div className="Form-group">
            <label htmlFor="Password"></label>
            <input
              type="password"
              name="Password"
              placeholder="password"
              className="input"
            />
          </div>
        </div>
      </div>
      <div className="Form-group">
        <button type="submit" className="btn">
          login
        </button>
      </div>
    </div>
  );
}

export default Login;
