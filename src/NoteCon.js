import React, { useState, useEffect } from "react";
import Notecards from "./Notecards";
import Search from "./Search";

function NoteCon({ notes, projects }) {
  return (
    <div className="home-container">
      <Search />
      <div className="feed">
        {notes.map((notes) => (
          <Notecards key={notes.id} notes={notes} projects={projects} />
        ))}
      </div>
    </div>
  );
}

export default NoteCon;
