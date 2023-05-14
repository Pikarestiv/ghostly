// src/components/organisms/Header.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '../atoms/CustomButton';

const Header: React.FC = () => {
  return (
    <header className="bg-transparent w-full">
      <nav className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="text-white text-xl font-bold">Logo</div>
        <ul className="flex space-x-4">
          <li><Link to="/" className="text-white hover:text-gray-300">Home</Link></li>
          <li><Link to="/contact" className="text-white hover:text-gray-300">Contact</Link></li>
          <li><CustomButton>Sign up</CustomButton></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
