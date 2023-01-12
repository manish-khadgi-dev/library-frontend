import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
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
  };
  return (
    <div>
      <Navbar bg="dark" className="text-white" expand="lg">
        <Container>
          <Navbar.Brand className="text-white fw-bold ">
            Library Management System
          </Navbar.Brand>
          <div className="d-flex justify-content-between"></div>

          <Navbar.Toggle />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto gap-4">
              {user?._id ? (
                <>
                  <Link to="/dashboard"> Dashboard </Link>
                  <Link to="/" onClick={handleOnLogout}>
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
