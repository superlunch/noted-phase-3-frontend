import React from "react";
import NoteCon from "./NoteCon";
import "./Feed.css";

function Notes({ note }) {
  return (
    <div>
      <NoteCon notes={note} />
    </div>
  );
}

export default Notes;
