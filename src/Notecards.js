import { React, useState, useEffect } from "react";

function Notecards({ notes, projects }) {
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [isEditingBody, setIsEditingBody] = useState(false);

  const [noteTitle, setNoteTitle] = useState("");
  const [noteBody, setNoteBody] = useState("");

  // const [projectTitle, setProjectTitle] = useState("");

  function handleDeleteNote() {
    fetch(`http://localhost:9292/notes/${notes.id}`, {
      method: "DELETE",
    });
    alert("Note successfully deleted!");
    window.location.reload();
  }

  function handleEditTitle() {
    fetch(`http://localhost:9292/notes/${notes.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: noteTitle,
        body: notes.body,
      }),
    });
    console.log("Title successfully edited!");
  }

  function handleEditBody() {
    fetch(`http://localhost:9292/notes/${notes.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: notes.title,
        body: noteBody,
      }),
    });
    console.log("Body successfully edited!");
    window.location.reload();
  }

  // function getTitle({ notes }) {
  //   fetch(`http://localhost:9292/test/${notes.id}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     }, []);
  // }

  return (
    <div className="feed">
      <div className="column">
        {isEditingTitle ? (
          <form onSubmit={handleEditTitle}>
            <input
              className="titleinput2"
              type="text"
              defaultValue={notes.title}
              onChange={(e) => setNoteTitle(e.target.value)}
            />
          </form>
        ) : (
          <div
            className="post-setting"
            onDoubleClick={() => setIsEditingTitle(true)}
          >
            {notes.title}
          </div>
        )}
        <div className="line"></div>
        <div className="notecontent">
          {isEditingBody ? (
            <form>
              <textarea
                className="noteinput2"
                type="text"
                maxLength={400}
                defaultValue={notes.body}
                onChange={(e) => setNoteBody(e.target.value)}
              />
              <i
                className="bx bx-check"
                id="submit"
                onClick={handleEditBody}
              ></i>
            </form>
          ) : (
            <p
              className="photocred"
              onDoubleClick={() => setIsEditingBody(true)}
            >
              {notes.body}
            </p>
          )}
          <i className="bx bx-x" id="delete" onClick={handleDeleteNote}></i>
          {/* <div id="submit">{notes.project_id}</div> */}
        </div>
      </div>
    </div>
  );
}

export default Notecards;
