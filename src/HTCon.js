import { React, useState } from "react";
import Login from "./Login";
import Register from "./Register";

//boolean for Article/personalboard that dis plays based on logged in status

function HomeContainer({ stockImages }) {
  const [showRegister, setShowRegister] = useState(true);
  const [showOption, setShowOption] = useState(true);

  function handleClick() {
    setShowRegister(!showRegister);
  }
  function onClick() {
    setShowOption(showOption);
  }

  return (
    <div className="home-container">
      <div className="userInput">
        {showRegister ? (
          <Register onclickp={onClick} />
        ) : (
          <Login onclickp={onClick} />
        )}
        <p className="userbtn" onClick={handleClick}>
          {showRegister ? "Login?" : "Register?"}
        </p>
      </div>
    </div>
  );
}

export default HomeContainer;
