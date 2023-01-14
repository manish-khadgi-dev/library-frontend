import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import DashboardLayout from "../components/layout/DashboardLayout";
import { getbooks } from "../helpers/axiosHelper";
import BookList from "../components/BookList";

const Books = () => {
  const [user, setUser] = useState({});
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const u = JSON.parse(sessionStorage.getItem("user"));
    setUser(u);
  }, []);

  const fetchBooks = async () => {
    const response = await getbooks();
    setBooks(response.book);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  console.log(books);

  return (
    <DashboardLayout>
      <Container>
        <Row className="p-5">
          <BookList books={books} fetchBooks={fetchBooks} user={user} />
        </Row>
      </Container>
    </DashboardLayout>
  );
};

export default Books;
