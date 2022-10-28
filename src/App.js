import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./Home";
import Notes from "./Notes";
import Project from "./Project";
// import Profile from "./Profile"

function App() {
  const [users, setUsers] = useState([]);
  const [notes, setNotes] = useState([]);

  // use mockaroo api when proj is ready
  // https://my.api.mockaroo.com/users1025221258.json?key=e1ac8d70
  // https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001

  useEffect(() => {
    fetch("http://localhost:9292/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        console.log(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:9292/notes")
      .then((res) => res.json())
      .then((data) => {
        setNotes(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="navbar sticky">
      <nav className="links">
        <Link className="HomeLink" to="/">
          <i class="bx bxs-home"></i>
        </Link>

        <Link className="FeedLink" to="/Notes">
          <i class="bx bx-library"></i>
        </Link>

        <Link className="ProjectsLink" to="/Projects">
          <i class="bx bxs-pen"></i>
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home users={users} />} />
        <Route path="/Notes" element={<Notes notes={notes} />} />
        <Route path="/Projects" element={<Project />} />
        {/* <Route path="nav" element={null} />
        <Route path="nav" element={null} /> */}
      </Routes>
    </div>
  );
}

export default App;
/* <Home users={users} stockImages={stockImages}/> */
