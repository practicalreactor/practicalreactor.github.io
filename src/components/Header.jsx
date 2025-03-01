// components/Header.jsx
import React from 'react';

const Header = ({ textColor = 'black' }) => {
  return (
    <header className="flex justify-between items-center">
      <h1 className={`text-3xl font-bold text-${textColor}`}>Practical Reactor Technologies</h1>
      <nav>
        <ul className={`flex space-x-6 text-${textColor}`}>
          <li>About</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;