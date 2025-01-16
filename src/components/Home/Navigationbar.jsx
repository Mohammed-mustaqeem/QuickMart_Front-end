import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import {  Offcanvas } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import { handleSuccess } from "../../assets/utils";
import { ToastContainer, Bounce } from "react-toastify"; 
import './Navigationbar.css'

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
      <header>
        {/* Top Bar */}
        <div className="header-top bg-light py-2">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              {/* Left Section - Always Visible */}
              <div className="col-6 col-md-6">
                <ul className="d-flex gap-3 list-unstyled mb-0 text-sm">
                  <li>
                    <Link
                      className="text-decoration-none text-dark"
                      to="/about-us"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-decoration-none text-dark"
                      to="/privacy"
                    >
                      Privacy
                    </Link>
                  </li>
                  
                </ul>
              </div>

              {/* Social Icons - Always Visible */}
              <div className="col-6 col-md-6 text-end">
                <ul className="d-flex gap-2 list-unstyled mb-0 justify-content-end">
                  <li>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                    >
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Twitter"
                    >
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>



        

        {/* Navbar */}
        <Navbar expand="lg" bg="light" variant="light" sticky="top">
          <Container>
            <Navbar.Brand href="/" className="fw-bold">
              Quick<span className="text-danger">Mart</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                  <NavLink className="nav-link" to="/products">
                    Products
                  </NavLink>
                  <NavLink className="nav-link" to="/about">
                    About
                  </NavLink>
                  <NavLink className="nav-link" to="/contact">
                    Contact
                  </NavLink>
                </Nav>

                {/* Buttons */}
                <div className="flex gap-3 mt-2">
                  {isLoggedIn ? (
                    <Button
                      variant="outline-dark"
                      className="fa fa-sign-out"
                      onClick={handleLogout}
                    >
                      Logout
                    </Button>
                  ) : (
                    <Button
                      variant="outline-dark"
                      className="fa fa-sign-in"
                      onClick={handleLogin}
                    >
                      Login
                    </Button>
                  )}
                  <Button
                    variant="outline-dark"
                    className="fa fa-shopping-cart"
                    onClick={handleCart}
                  >
                    Cart ({state.length})
                  </Button>
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>

        {/* Toast Notifications */}
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
      </header>
    </>
  );
};

export default Navigationbr;
