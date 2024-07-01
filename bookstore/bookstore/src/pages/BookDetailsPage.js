import React from 'react';
import { useParams } from 'react-router-dom';
import booksData from '../mockData/books';

const BookDetailsPage = () => {
  const { id } = useParams();
  const book = booksData.find(book => book.id === parseInt(id));

  if (!book) return <div>Book not found...</div>;

  return (
    <div>
      <h1>{book.title}</h1>
      <h2>{book.author}</h2>
      <p>{book.genre}</p>
      <p>{book.description}</p>
      <img src={book.coverImage} alt={book.title} />
    </div>
  );
};

export default BookDetailsPage;