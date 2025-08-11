import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [{
    name: 'Home',
    href: '#home'
  }, {
    name: 'About',
    href: '#about'
  }, {
    name: 'Skills',
    href: '#skills'
  }, {
    name: 'Projects',
    href: '#projects'
  }, {
    name: 'Experience',
    href: '#experience'
  }, {
    name: 'Contact',
    href: '#contact'
  }];
  return <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold text-cyan-500">
          Samyam Bista
        </a>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map(link => <a key={link.name} href={link.href} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
              {link.name}
            </a>)}
        </nav>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-300 hover:text-cyan-400" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <div className="md:hidden bg-gray-800 py-4">
          <nav className="flex flex-col space-y-4 px-4">
            {navLinks.map(link => <a key={link.name} href={link.href} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
                {link.name}
              </a>)}
          </nav>
        </div>}
    </header>;
};