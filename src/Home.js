import React from "react";
import "./Home.css";
import HTCon from "./HTCon";

function Home({ stockImages }) {
  return (
    <div>
      <header className="App-header">
        <img src="noted wide-1.png" className="App-logo" alt="logo" />
      </header>

      <HTCon stockImages={stockImages} />
    </div>
  );
}

export default Home;
