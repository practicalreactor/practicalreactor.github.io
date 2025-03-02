// layouts/MainLayout.jsx
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Logo from '../components/Logo';

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-4 flex flex-col flex-grow">
        <header className="flex justify-between items-center py-4 border-b border-gray-200 bg-white">
          <Link to="/" className="flex items-center">
            <Logo size={50} />
            <h1 className="text-3xl font-bold text-gray-800 ml-4">Practical Reactor Technologies</h1>
          </Link>
          <nav>
            <ul className="flex space-x-6 text-gray-700">
              {/* <li>
                <Link to="/about" className="hover:text-gray-900">People</Link>
              </li> */}
              <li>
                <Link to="/contact" className="hover:text-gray-900">Contact</Link>
              </li>
            </ul>
          </nav>
        </header>
        
        <main className="flex-grow my-8">
          <Outlet />
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;