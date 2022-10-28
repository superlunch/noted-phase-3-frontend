import React from "react";
import "./Project.css";

function Project() {
  return (
    <div>
      <div className="home-container">
        <div className="new-note">
          <form className="Form-container">
            <div className="Form-group">
              <label className="label"></label>
              <input className="titleinput" type="text" placeholder="Title" />
            </div>
            <div className="Form-group">
              <label className="label"></label>
              <textarea
                className="noteinput"
                type="text"
                placeholder="Start typing..."
              />
            </div>
            <div className="Form-group">
              <label className="label"></label>
              <button className="btn" type="submit" placeholder="submit">create</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Project;
