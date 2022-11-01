import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Notes from "./Notes";
import NewNote from "./NewNote";
import Footer from "./Footer";

function App() {
  const [users, setUsers] = useState([]);
  const [notes, setNotes] = useState([]);
  const [projects, setProjects] = useState([]);

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

  useEffect(() => {
    fetch("http://localhost:9292/projects")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home users={users} />} />
        <Route
          path="/notes"
          element={<Notes notes={notes} projects={projects} />}
        />
        <Route path="/new-note" element={<NewNote />} />
        {/* <Route path="*" element={<h1>404 Not Found</h1>} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
/* <Home users={users} stockImages={stockImages}/> */
