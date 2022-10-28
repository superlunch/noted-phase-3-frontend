import React from "react";

function Register({ onclickp }) {
  onclickp();

  return (
    <div className="Form-container">
      <div className="Content">
        <div className="Form">
          <form>
            <div className="Form-group">
              <label htmlFor="Add Username"></label>
              <input
                type="text"
                name="Add Username"
                placeholder="username"
                className="input"
              />
            </div>
            <div className="Form-group">
              <label htmlFor="Add Email"></label>
              <input
                type="email"
                name="Add Email"
                placeholder="email"
                className="input"
              />
            </div>
            <div className="Form-group">
              <label htmlFor="Password"></label>
              <input
                type="Password"
                name="Password"
                placeholder="password"
                className="input"
              />
            </div>
          </form>
        </div>
      </div>
      <div>
        <button type="button" className="btn">
          register
        </button>
      </div>
    </div>
  );
}

export default Register;
