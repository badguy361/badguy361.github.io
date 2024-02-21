// /src/pages.js

import React from 'react';

/**
 * These are root pages
 */
const Home = () => {
  return <h1 className="py-3">Home</h1>;
};

const Books = () => {
  return <h1 className="py-3">Books</h1>;
};

const Electronics = () => {
    return (
        <div>
            <h1>Electronics</h1>
        </div>
        );
};

/**
 * These are pages nested in Electronics
 */
const Mobile = () => {
  return <h3>{<Electronics />}Mobile Phone</h3>;
};

const Desktop = () => {
  return <h3>{<Electronics />}Desktop PC</h3>;
};

const Laptop = () => {
  return <h3>{<Electronics />}Laptop</h3>;
};

export { Home, Books, Electronics, Mobile, Desktop, Laptop };