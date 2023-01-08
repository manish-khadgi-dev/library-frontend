import React from "react";
import { useState } from "react";
import { Form, Button, Col, Container, Row } from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Layout from "../components/layout/Layout";
import { loginUser } from "../helpers/axiosHelper";

const initialState = {
  email: "",
  password: "",
};
const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ initialState });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const { status, message, user } = await loginUser(formData);
    if (status === "success") {
      toast[status](message);
      sessionStorage.setItem("user", JSON.stringify(user));
      status === "success" && navigate("/dashboard");
    } else {
      toast[status](message);
    }

    setFormData(initialState);
  };

  return (
    <Layout>
      <Container>
        <Row className="mt-5">
          <Col className="md-6 bg-warning p-4">
            <div className="bg-light p-4 rounded">
              <Form onSubmit={handleOnSubmit}>
                <h1 className="text-center">Login</h1>
                <hr />
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="a@a.com"
                    required
                    onChange={handleOnChange}
                    value={formData.email}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="******"
                    required
                    onChange={handleOnChange}
                    value={formData.password}
                  />
                </Form.Group>
                <div className="mt-3">
                  <Button type="submit">Login Now</Button>
                </div>
              </Form>
            </div>

            <div className="text-center mt-3">
              Don't have an account ? <Link to="/register"> Register Here</Link>
            </div>
          </Col>

          <Col className="md-6 text-center info d-flex align-items-center d-none d-md-flex">
            <div>
              <h1>Welcome to our Library Management System</h1>
              <hr />
              <p> Login to view and start borrowing books</p>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Login;
