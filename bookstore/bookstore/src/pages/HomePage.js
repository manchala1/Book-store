import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="welcome-section">
        <h1>Welcome to the Bookstore</h1>
      </div>
      <section className="featured-book-section">
        <h2>Featured Book</h2>
        <div className="featured-book">
          <img className="featured-book-cover" src="/images/wHAKJUu.jpg" alt="Book Cover" />
          <div className="book-details">
            <h3>The Great Gatsby</h3>
            <p>Author: F. Scott Fitzgerald</p>
            <p>Genre: Classic</p>
            <p>A novel set in the Roaring Twenties, depicting the life of the wealthy Jay Gatsby and his obsession with the beautiful Daisy Buchanan.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;