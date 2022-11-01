import React from "react";
import NoteCon from "./NoteCon";
import "./Feed.css";


function Notes({ notes, projects }) {
  return (
    <div>
      <NoteCon notes={notes} projects={projects}/>
    </div>
  );
}

export default Notes;
