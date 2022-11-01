import { React, useState } from "react";
import Select from "react-select";

const options = [
  { value: null, label: "Filter by project..." },
  { value: 1, label: "Home" },
  { value: 2, label: "Work" },
  { value: 3, label: "Etc." },
  { value: 4, label: "Secret" },
];

function Search() {
  //   fetch("http://localhost:9292/projects")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  const [projectFilter, setProjectFilter] = useState(options);

  function handleFilter() {
    setProjectFilter(options.value);
    console.log("filtering...");
  }

  return (
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
            width: 10,
            colors: {
              ...theme.colors,
              primary25: "grey",
              primary: "black",
            },
          })}
        />
      </div>
    </div>
  );
}

export default Search;
