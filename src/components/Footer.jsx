import React from 'react';

const Footer = () => {
  return (
    <footer className="p-8 mt-auto border-t">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <a href="contact@practicalreactor.com" className="text-blue-600 hover:text-blue-800">
            Contact Us
          </a>
          <p className="text-sm mt-2 text-gray-600">
            © {new Date().getFullYear()} Practical Reactor Technologies
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;