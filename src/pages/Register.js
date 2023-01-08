import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import { CustomField } from "../components/customField/CustomField";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { registerNewUser } from "../helpers/axiosHelper";

const fields = [
  {
    label: "First Name",
    placeholder: "Sam ",
    name: "fName",
    required: true,
  },
  {
    label: "Last Name",
    placeholder: "smith ",
    name: "lName",
    type: "lName",
    required: true,
  },
  {
    label: "Email",
    placeholder: "s@s.com ",
    name: "email",
    type: "email",
    required: true,
  },

  {
    label: "Password",
    placeholder: "****** ",
    name: "password",
    type: "password",
    required: true,
  },
  {
    label: "confirmPassword",
    placeholder: "****** ",
    name: "confirmPassword",
    type: "password",
    required: true,
  },
];

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const { confirmPassword, ...rest } = formData;
    if (confirmPassword !== rest.password) {
      return toast.error("Passowrd do not match");
    }

    const { status, message } = await registerNewUser(rest);
    toast[status](message);
    status === "success" && navigate("/");
  };

  return (
    <Layout>
      <Container className="bg-info">
        <Row className="mt-5">
          <Col className="md-6 text-center d-flex align-center d-none d-md-flex info">
            <div className=""></div>
          </Col>
          <Col>
            <div className="register-form mt-5 p-5 ">
              <div className="div">
                <h2>Register Now !</h2>
                <hr />
              </div>
              <Form onSubmit={handleOnSubmit}>
                {fields.map((item, i) => (
                  <CustomField key={i} {...item} onChange={handleOnChange} />
                ))}
                <Form.Group className="mt-5">
                  <Form.Select name="role" onChange={handleOnChange}>
                    <option value="">Select an option</option>
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mt-2 mb-3">
                  <Form.Check
                    type="checkbox"
                    label="I agree to the T&Cs"
                    required
                  />
                </Form.Group>
                <div className="d-grid mb-3">
                  <Button type="submt"> Register now</Button>
                </div>
                <div className=" mt-3">
                  already have an account...
                  <Link to="/" className="mt-3">
                    login now
                  </Link>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Register;
