import React from "react";

const FilterBar = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <form className="form-inline">
        <div className="input-group mr-4">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              <label htmlFor="sortAZ">Sort:</label>
            </span>
          </div>
          <select
            id="sortAZ"
            value={props.selectedSortMethod}
            onChange={props.handleChangeSortMethod}
          >
            <option value={"a-z"}>A-Z</option>
            <option value={"z-a"}>Z-A</option>
          </select>
        </div>

        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <label htmlFor="selectBzCategory">Category:</label>
            </span>
          </div>
          <select
            id="selectBzCategory"
            value={props.selectedCategory}
            onChange={props.handleChangeCategory}
          >
            {props.businessCategories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </form>
    </nav>
  );
};

export default FilterBar;
