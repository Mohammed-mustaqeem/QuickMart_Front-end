import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import { handleSuccess } from "../../assets/utils";
import { ToastContainer, Bounce } from "react-toastify";
// import './Navigationbar.css'

const Navigationbr = () => {
  const navigate = useNavigate();

  const state = useSelector((state) => state.handleCart);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status

   // Check login status on component mount
   useEffect(() => {
    const token = Cookies.get("Token");
    setIsLoggedIn(token); // Update state based on token presence
  }, []);

  const handleCart = () => {
    navigate("/cart");
  };
  const handleLogin =()=>{
    navigate('/user/login')
  }

  const handleLogout = () => {
    Cookies.remove("Token");
    Cookies.remove("name");
    setIsLoggedIn(false); // Update login status
    handleSuccess("You have been logged out")
    navigate("/"); // Redirect to home page
  };

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
              {isLoggedIn ? (
              <Button variant="outline-dark" className="fa fa-sign-in ms-2" onClick={handleLogout}>
                {" "}
                Logout
              </Button> ) : (
                <Button variant="outline-dark" className="fa fa-sign-in ms-2" onClick={handleLogin}>
                {" "}
                Login
              </Button>
              )}
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
        <ToastContainer
          position="top-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Bounce}
        />
      </Navbar>
    </>
  );
};

export default Navigationbr;
