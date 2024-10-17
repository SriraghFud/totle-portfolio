import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking for does not exist. Return to the <Link to="/">homepage</Link>.</p>
    </div>
  );
}

export default NotFound;
