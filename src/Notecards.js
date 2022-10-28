import { React } from "react";

function Notecards({ note }) {
  return (
    <div className="feed">
      <div className="column">
        <div className="post-setting">title</div>
        <div className="line"> </div>
        <p className="photocred">note</p>
      </div>
    </div>
  );
}

export default Notecards;
