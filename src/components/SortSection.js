import React, { useState } from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const SortSection = () => {
  const [close, setClose] = useState(false);

  return (
    <div>
      <div className={close ? "sort-section-closed" : "sort-section"}>
        <div className="sort-section_1">
          <h5>Sort</h5>
          <span className="arrow-right">
            <FontAwesomeIcon
              icon={faArrowRight}
              onClick={() => setClose(!close)}
            />
          </span>
        </div>
        <div className="sort-dropdown">
          <NavDropdown
            id="nav-dropdown-dark-example"
            title="Sort Results By"
            variant="secondary"
          >
            <NavDropdown.Item href="#action/3.1">None</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Popularity(Desc)
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
              Popularity(Asc)
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
              Release Day(Desc)
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
              Release Day(Asc)
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Vote(Desc)</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Vote(Asc)</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
              Revenue(Desc)
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Revenue(Asc)</NavDropdown.Item>
          </NavDropdown>
        </div>
      </div>
    </div>
  );
};

export default SortSection;
