import React, { useState, useEffect } from "react";
import Notecards from "./Notecards";

function NoteCon({ notes, projects }) {
  return (
    <div>
      <div className="feed">
        {notes.map((notes) => (
          <Notecards key={notes.id} notes={notes} projects={projects} />
        ))}
      </div>
    </div>
  );
}

export default NoteCon;
