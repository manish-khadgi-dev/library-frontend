import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({});
  useEffect(() => {
    const userStr = sessionStorage.getItem("user");
    if (userStr) {
      const userObj = JSON.parse(userStr);
      setUser(userObj);
    }
  }, []);

  const handleOnLogout = () => {
    sessionStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div>
      <Navbar bg="info" className="text-dark" expand="lg">
        <Container>
          <Navbar.Brand className=" fw-bold ">
            Library Management System
          </Navbar.Brand>
          <div className="d-flex justify-content-between"></div>

          <Navbar.Toggle />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto gap-4">
              {user?._id ? (
                <>
                  <h5> Welcome Back {user.fName}</h5>
                  <Link to="/" onClick={() => handleOnLogout()}>
                    Log out
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/"> Log in </Link>
                  <Link to="/registration"> Registration </Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
