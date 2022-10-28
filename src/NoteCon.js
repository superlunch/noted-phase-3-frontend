import React from "react";
import Notecards from "./Notecards";

function NoteCon({ note }) {
  return (
    <div className="feed">
      {note.map((notes) => (
        <Notecards key={notes.id} feed={notes} />
      ))}
    </div>
  );
}

export default NoteCon;
