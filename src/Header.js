import React from 'react';
import './Header.css'; // Assuming you might want separate CSS for Header if required

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/logo.png" alt="Logo" /> {/* Adjust logo path as needed */}
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
      </div>
      <nav className="navbar">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">My Channel</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
