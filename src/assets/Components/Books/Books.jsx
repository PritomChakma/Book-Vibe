import { useEffect, useState } from "react";
import BooksCard from "./BooksCard";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("../../../../public/booksData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div >
      <h1 className="text-4xl font-bold text-center my-10">Books</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <BooksCard key={book.bookId} book={book}></BooksCard>
        ))}
      </div>
    </div>
  );
};

export default Books;
