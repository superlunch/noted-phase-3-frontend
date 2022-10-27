import React from "react";
import "./Project.css"

function Project() {
  return (
    <div className="upload">
      <form id="formCon">
        <label className="label">Photo Url: </label>
        <input 
        className="inputline"
         type="text" 
        placeholder="photo..."/>

        <label className="label">Author: </label>
        <input 
        className="inputline"
        type="text" 
        placeholder="author..."/>

        <label className="label">Submit: </label>
        <input 
        className="submitline" 
        type="submit" 
        placeholder="submit"/>

      </form>
    </div>
  );
}

export default Project;
