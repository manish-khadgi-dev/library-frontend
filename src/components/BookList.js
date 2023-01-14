import React from "react";
import BooksCard from "./BooksCard";

const BookList = ({ books, fetchBooks, user }) => {
  return (
    <div className="books-list">
      {books?.map((book) => (
        <BooksCard
          key={book._id}
          book={book}
          user={user}
          fetchBooks={fetchBooks}
        />
      ))}
    </div>
  );
};

export default BookList;
