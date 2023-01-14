import React, { useState } from "react";
import { Button, Form, Col, Spinner } from "react-bootstrap";
import DashboardLayout from "../components/layout/DashboardLayout";
import books from "../assets/books.jpg";

import { toast } from "react-toastify";
import { addBook } from "../helpers/axiosHelper";

const AddBooks = () => {
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const { status, message } = await addBook(formData);

    if (status) {
      setIsLoading(false);
      return toast[status](message);
    }
  };

  return (
    <DashboardLayout>
      <div className="add">
        <div className="add-top">
          <h1>Add New Book</h1>
        </div>
        <div className="add-bottom">
          <Col md={7} className="d-none d-sm-block">
            <img src={books} alt="book-img" style={{ width: "100%" }} />
          </Col>
          <Col md={5} sm={12} xs={12}>
            <Form onSubmit={handleOnSubmit}>
              <Form.Group className="mb-2">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  placeholder="Book Title"
                  required
                  type="text"
                  name="title"
                  onChange={handleOnChange}
                />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Author</Form.Label>
                <Form.Control
                  placeholder="Author"
                  required
                  type="text"
                  name="author"
                  onChange={handleOnChange}
                />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>ISBN</Form.Label>
                <Form.Control
                  placeholder="ISBN"
                  required
                  type="text"
                  name="isbn"
                  onChange={handleOnChange}
                />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Year Published</Form.Label>
                <Form.Control
                  placeholder="Year Published"
                  required
                  type="number"
                  name="year"
                  onChange={handleOnChange}
                />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Thumbnail</Form.Label>
                <Form.Control
                  placeholder="Thumbnail"
                  required
                  type="text"
                  name="thumbnail"
                  onChange={handleOnChange}
                />
                <Button
                  variant="info"
                  type="submit"
                  className="mt-4 d-flex align-items-center gap-3"
                >
                  ADD BOOK
                  <span>
                    {isLoading && <Spinner animation="border" variant="dark" />}
                  </span>
                </Button>
              </Form.Group>
            </Form>
          </Col>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AddBooks;
