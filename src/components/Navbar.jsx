import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/LogoPng.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md pt-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-start">
            <img src={Logo} alt="Logo" className=" w-36 h-28" />
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="px-3 py-2 text-dark hover:text-primary font-medium">Home</Link>
            <Link to="/products" className="px-3 py-2 text-dark hover:text-primary font-medium">Products</Link>
            <Link to="/AboutUs" className="px-3 py-2 text-dark hover:text-primary font-medium">About Us</Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-dark-light hover:text-primary focus:outline-none"
            >
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div
  className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
    isMenuOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
  }`}
>
  <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
    <Link 
      to="/" 
      className="block px-3 py-2 text-base font-medium text-dark hover:text-primary hover:bg-light-dark rounded-md"
      onClick={() => setIsMenuOpen(false)}
    >
      Home
    </Link>
    <Link 
      to="/products" 
      className="block px-3 py-2 text-base font-medium text-dark hover:text-primary hover:bg-light-dark rounded-md"
      onClick={() => setIsMenuOpen(false)}
    >
      Products
    </Link>
    <Link 
      to="/AboutUs" 
      className="block px-3 py-2 text-base font-medium text-dark hover:text-primary hover:bg-light-dark rounded-md"
      onClick={() => setIsMenuOpen(false)}
    >
      About Us
    </Link>
  </div>
</div>


      )}
    </nav>
  );
};

export default Navbar;