import React, { useState, useEffect } from "react";
import "./Project.css";

function NewNote({ projects }) {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteBody, setNoteBody] = useState("");
  // const [userId, setUserId] = useState(1);
  const [projectId, setProjectId] = useState();

  const handleCreateNote = (e) => {
    fetch("http://localhost:9292/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: noteTitle,
        body: noteBody,
        // user_id: userId,
        project_id: projectId,
      }),
    });
  };

  return (
    <div>
      <div className="home-container">
        <div className="new-note">
          <form className="Form-container" onSubmit={handleCreateNote}>
            <div className="Form-group">
              <label className="label"></label>
              <input
                className="titleinput"
                type="text"
                placeholder="Title"
                value={noteTitle}
                onChange={(e) => setNoteTitle(e.target.value)}
              />
            </div>
            <div className="Form-group">
              <label className="label"></label>
              <textarea
                className="noteinput"
                type="text"
                maxLength={400}
                placeholder="Start typing..."
                value={noteBody}
                onChange={(e) => setNoteBody(e.target.value)}
              />
            </div>
            <div className="btn-group">
              <select
                className="btn2"
                onChange={(e) => setProjectId(e.target.value)}
              >
                <option selected disabled value={0}>
                  add to project?
                </option>
                <option value={1}>Home</option>
                <option value={2}>Work</option>
                <option value={3}>Etc.</option>
                <option value={4}>Secret</option>
              </select>
              <button className="btn" type="submit">
                create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewNote;
