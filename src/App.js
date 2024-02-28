// /src/App.js

import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, Books, Electronics, Mobile, Desktop, Laptop } from './pages';
import { Navbar } from './navbar';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
          <Routes>
            <Route path="/my-profile" element={<Home />} />
            <Route path="/my-profile/books" element={<Books />} />
            <Route path="/my-profile/electronics" element={<Electronics />} />
            <Route path="/my-profile/electronics/mobile" element={<Mobile />} />
            <Route path="/my-profile/electronics/desktop" element={<Desktop />} />
            <Route path="/my-profile/electronics/laptop" element={<Laptop />} />
          </Routes>
      </div>
    );
  }
}

export default App;