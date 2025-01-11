import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import { handleSuccess } from "../../assets/utils";
import { ToastContainer, Bounce } from "react-toastify";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebook,
//   faTwitter,
//   faInstagram,
// } from "@fortawesome/free-brands-svg-icons"; 
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
      <div className="header-top d-none d-sm-block">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="d-flex justify-content-between flex-wrap align-items-center">
                {/* Left Section: Links */}
                <div className="header-info-left ">
                  <ul className="flex gap-5 text-[14px]">
                    <li>
                      <Link
                        className="no-underline text-gray-900"
                        to="/about-us"
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="no-underline text-gray-900"
                        to="/privacy"
                      >
                        Privacy
                      </Link>
                    </li>
                    <li>
                      <Link className="no-underline text-gray-900" to="/faq">
                        FAQ
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="no-underline text-gray-900"
                        to="/careers"
                      >
                        Careers
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Right Section: Orders & Social */}
                <div className="  header-info-right d-flex">
                  {/* Order Links */}
                  <ul className="order-list flex gap-4 text-[14px]">
                    <li>
                      <Link
                        className="no-underline text-gray-900"
                        to="/wishlist"
                      >
                        My Wishlist
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="no-underline text-gray-900"
                        to="/track-order"
                      >
                        Track Your Order
                      </Link>
                    </li>
                  </ul>

                  {/* Social Icons */}
                  <ul className="header-social flex ml-3 gap-2 ">
                    <li>
                      <a
                        className="no-underline  "
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        className="no-underline "
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        className="no-underline "
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        className="no-underline text-gray-500"
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        className="no-underline "
                        href="https://youtube.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Navbar className="">
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
                <Button
                  variant="outline-dark"
                  className="fa fa-sign-in ms-2"
                  onClick={handleLogout}
                >
                  {" "}
                  Logout
                </Button>
              ) : (
                <Button
                  variant="outline-dark"
                  className="fa fa-sign-in ms-2"
                  onClick={handleLogin}
                >
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
