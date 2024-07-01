import React from 'react';
import { Link } from 'react-router-dom';

const Author = ({ author }) => {
  return (
    <div>
      <h3>{author.name}</h3>
      <Link to={`/author/${author.id}`}>View Books</Link>
    </div>
  );
};

export default Author;