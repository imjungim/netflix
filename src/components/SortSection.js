import React, { useEffect, useState } from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../redux/actions/movieAction";

const SortSection = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [close, setClose] = useState(false);
  const [filterTitle, setFilterTitle] = useState("popularity.desc");
  const { sortMovies, popularMovies } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(movieAction.getMovies(filterTitle));
  }, [filterTitle]);

  //sort select
  const handleChange = (eventKey) => {
    setFilterTitle(eventKey);
    navigate("/movies");
  };

  return <div></div>;
};

export default SortSection;
