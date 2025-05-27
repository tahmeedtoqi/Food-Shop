import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, User, Search } from 'lucide-react';
import Button from '../ui/Button';
import { useCartStore } from '../../store/cartStore';
import { cn } from '../../lib/utils';
import { restaurantInfo } from '../../data/restaurant';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavLink = ({ to, children, onClick }: NavLinkProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={cn(
        'text-secondary-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors',
        isActive && 'text-primary-600 font-semibold'
      )}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const itemCount = useCartStore((state) => state.itemCount());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-primary-600">{restaurantInfo.name}</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/menu">Menu</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              className="hidden md:flex"
              icon={<Search className="h-5 w-5" />}
            >
              Search
            </Button>
            
            <Link to="/cart">
              <Button
                variant="ghost"
                size="sm"
                className="relative"
                icon={<ShoppingCart className="h-5 w-5" />}
              >
                <span className="sr-only">Cart</span>
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary-600 text-xs text-white">
                    {itemCount}
                  </span>
                )}
              </Button>
            </Link>
            
            <Link to="/account">
              <Button
                variant="ghost"
                size="sm"
                className="hidden md:flex"
                icon={<User className="h-5 w-5" />}
              >
                Account
              </Button>
            </Link>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg animate-slide-down">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink to="/" onClick={closeMobileMenu}>
              Home
            </NavLink>
            <NavLink to="/menu" onClick={closeMobileMenu}>
              Menu
            </NavLink>
            <NavLink to="/about" onClick={closeMobileMenu}>
              About
            </NavLink>
            <NavLink to="/contact" onClick={closeMobileMenu}>
              Contact
            </NavLink>
            <NavLink to="/account" onClick={closeMobileMenu}>
              Account
            </NavLink>
            <div className="pt-2">
              <Button
                variant="primary"
                size="sm"
                fullWidth
                icon={<Search className="h-4 w-4" />}
              >
                Search
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;