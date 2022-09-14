import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  FormControl,
} from "react-bootstrap";
import { movieAction } from "../redux/actions/movieAction";

const Navigation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");

  const search = (event) => {
    event.preventDefault();
    dispatch(movieAction.getMovies(keyword));
    navigate(`/movies?query=${keyword}`);
  };

  return (
    <Navbar bg="black" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            width={100}
            src="https://i.pinimg.com/originals/08/68/dc/0868dcacc7c50ca2c7d35b27be81e5a9.png"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to="/" className="nav-item">
              Home
            </Link>
            <Link to="/movies" className="nav-item">
              Movies
            </Link>
          </Nav>
          <Form className="d-flex" onSubmit={search}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(event) => {
                setKeyword(event.target.value);
              }}
            />
            <Button variant="outline-danger">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
