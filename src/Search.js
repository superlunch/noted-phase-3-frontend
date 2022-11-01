import { React, useState } from "react";
import Select from "react-select";
import Notes from "./Notes";
import Notecards from "./Notecards";

function Search({ notes, projects }) {
  // fetch("http://localhost:9292/projects")
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data);
  //   });

  const options = [
    { value: 0, label: "Filter by project..." },
    { value: 1, label: "Home" },
    { value: 2, label: "Work" },
    { value: 3, label: "Etc." },
    { value: 4, label: "Secret" },
  ];

  function handleFilter(options) {
    setFilterParam(options.value);
    console.log(options.value);
  }

  const [filterParam, setFilterParam] = useState(0);

  return (
    <div>
      <div className="home-container">
        <div className="search-header" />
        <div style={{ width: "300px" }}>
          <Select
            onChange={handleFilter}
            options={options}
            defaultValue={[options[0]]}
            theme={(theme) => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                primary25: "grey",
                primary: "black",
              },
            })}
          />
        </div>
      </div>
    </div>
  );
}

export default Search;
