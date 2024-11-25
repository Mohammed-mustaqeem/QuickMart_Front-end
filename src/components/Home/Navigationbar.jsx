import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

// import './Navigationbar.css'

const Navigationbr = () => {
  const navigate = useNavigate();

  const state = useSelector((state) => state.handleCart);

  const handleCart = () => {
    navigate("/cart");
  };
  const handleLogin =()=>{
    navigate('/user/login')
  }

  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-tertiary navbar shadow-md bg-white "
      >
        <Container
          fluid
          className="p-3  navbar-expand-lg navbar-light bg-light container"
        >
          <Navbar.Brand href="/" className="fw-bold ">
            Quick<span style={{ color: "red" }}>Mart</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0  flex space-x-8 "
              style={{ maxHeight: "200px" }}
              navbarScroll
            >
              <NavLink className="no-underline text-gray-500" to="/">
                Home
              </NavLink>
              <NavLink className="no-underline text-gray-500" to="/products">
                Products
              </NavLink>
              <NavLink className="no-underline text-gray-500" to="/About">
                About
              </NavLink>
              <NavLink className="no-underline text-gray-500" to="/Contact">
                Contact
              </NavLink>
            </Nav>

            <div className="button">
              <Button variant="outline-dark" className="fa fa-sign-in ms-2" onClick={()=>handleLogin()}>
                {" "}
                Login
              </Button>
              <Button
                variant="outline-dark"
                className="fa fa-shopping-cart ms-2"
                onClick={() => handleCart()}
              >
                Cart ({state.length})
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigationbr;
