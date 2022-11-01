import { React, useState } from "react";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleRegister = (e) => {
    fetch("http://localhost:9292/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
        email: email,
      }),
    });
  };

  return (
    <div className="Form-container">
      <div className="Content">
        <div className="Form">
          <form className="Form-container" onSubmit={handleRegister}>
            <div className="Form-group">
              <label htmlFor="Add Username"></label>
              <input
                type="text"
                name="Add Username"
                placeholder="username"
                className="input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="Form-group">
              <label htmlFor="Add Email"></label>
              <input
                type="email"
                name="Add Email"
                placeholder="email"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="Form-group">
              <label htmlFor="Password"></label>
              <input
                type="Password"
                name="Password"
                placeholder="password"
                className="input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn">
              register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
