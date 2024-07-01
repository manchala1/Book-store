import React, { useState } from 'react';
import './AuthorsPage.css';
import books from '../mockData/books'
const authors = [...new Set(books.map(book => book.author))];
const authorsObjects=authors.map((author,index)=>{return {id:index,name:author}} )
console.log(authorsObjects)

const AuthorsPage = () => {
  const [selectedAuthor, setSelectedAuthor] = useState(null);

  // Function to get books by selected author
  const getBooksByAuthor = (authorName) => {
    return books.filter(book => book.author === authorName);
  };

  return (
    <div className="authors-page">
      <h1>Authors</h1>
      <div className="authors-list">
        <h2>Author List</h2>
        <ul>
          {authorsObjects.map(author => (
            <li key={author.id}>
              <button onClick={() => setSelectedAuthor(author.name)}>
                {author.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {selectedAuthor && (
        <div className="author-details">
          <h2>Books by {selectedAuthor}</h2>
          <div className="books-grid">
            {getBooksByAuthor(selectedAuthor).map(book => (
              <div key={book.id} className="book-card">
                <img className="book-cover" src={book.cover} alt={book.title} />
                <div className="book-info">
                  <h3>{book.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthorsPage;
