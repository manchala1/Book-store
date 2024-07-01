import React, { useState } from 'react';
import './BooksPage.css';
import books from '../mockData/books'; // Import mock data
import ShoppingCart from '../components/ShoppingCart'; // Import ShoppingCart component

const BooksPage = () => {
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedAuthor, setSelectedAuthor] = useState('');
  const [cartItems, setCartItems] = useState([]);

  const genres = [...new Set(books.map(book => book.genre))];
  const authors = [...new Set(books.map(book => book.author))];

  const filteredBooks = books.filter(book => {
    return (
      (selectedGenre ? book.genre === selectedGenre : true) &&
      (selectedAuthor ? book.author === selectedAuthor : true)
    );
  });

  const addToCart = (book) => {
    setCartItems(prevItems => [...prevItems, book]);
  };

  const removeFromCart = (bookId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== bookId));
  };

  return (
    <div className="books-page">
      <h1>Books</h1>
      
      {/* Filters */}
      <div className="filters">
        <div className="filter">
          <label htmlFor="genre-filter">Filter by Genre:</label>
          <select
            id="genre-filter"
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
          >
            <option value="">All Genres</option>
            {genres.map((genre, index) => (
              <option key={index} value={genre}>{genre}</option>
            ))}
          </select>
        </div>

        <div className="filter">
          <label htmlFor="author-filter">Filter by Author:</label>
          <select
            id="author-filter"
            value={selectedAuthor}
            onChange={(e) => setSelectedAuthor(e.target.value)}
          >
            <option value="">All Authors</option>
            {authors.map((author, index) => (
              <option key={index} value={author}>{author}</option>
            ))}
          </select>
        </div>
      </div>
      
      {/* Display filtered books */}
      <div className="books-grid">
        {filteredBooks.map(book => (
          <div key={book.id} className="book-card">
            <img className="book-cover" src={book.cover} alt={book.title} />
            <div className="book-info">
              <h3>{book.title}</h3>
              <p><strong>Author:</strong> {book.author}</p>
              <p><strong>Genre:</strong> {book.genre}</p>
              <p>{book.description}</p>
              <p><strong>Price:</strong> ${book.price.toFixed(2)}</p>
              <button onClick={() => addToCart(book)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>

      {/* Shopping Cart */}
      <ShoppingCart cartItems={cartItems} onRemoveFromCart={removeFromCart} />
    </div>
  );
};

export default BooksPage;
