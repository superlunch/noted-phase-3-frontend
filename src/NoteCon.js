import React, { useState } from "react";
import Notecards from "./Notecards";
import Search from "./Search";

function NoteCon({ notes, projects }) {
  // const notesDisplay = notes.filter((notes) => (notes.project_id = 1));
  const notesDisplayEl = notes.map((notes) => (
    <Notecards key={notes.id} notes={notes} projects={projects} />
  ));

  // console.log(notesDisplay);
  console.log(notesDisplayEl);

  return (
    <div className="home-container">
      <Search />
      <div className="feed">{notesDisplayEl}</div>
    </div>
  );
}

export default NoteCon;
