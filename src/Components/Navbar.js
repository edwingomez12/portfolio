import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white py-4 fixed w-full">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Edwin Gomez</h1>
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {/* Hamburger icon */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        <ul className={`md:flex space-x-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
          <li><a href="#about" className="hover:text-gray-400">About</a></li>
          <li><a href='#work-experience' className='hover:text-gray-400'>Work</a></li>
          <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
