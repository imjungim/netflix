import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import FilterYear from "./FilterYear";
import FilterGenres from "./FilterGenres";

const FilterSection = () => {
  const [close, setClose] = useState(false);

  return (
    <div className={close ? "sort-section-closed" : "sort-section"}>
      <div className="sort-section_1">
        <h5>Filter</h5>
        <span>
          <FontAwesomeIcon
            icon={faArrowRight}
            onClick={() => setClose(!close)}
          />
        </span>
      </div>
      <div className="filter">
        <FilterYear min={1990} max={2022} />
        <FilterGenres />
      </div>
    </div>
  );
};

export default FilterSection;
