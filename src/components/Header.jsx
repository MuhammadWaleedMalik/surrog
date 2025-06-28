import React, { useState, useCallback, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, User, LogOut, Home, Info, DollarSign, Mail } from 'lucide-react';
import { WEBSITE } from '../utils/websiteInfo';
import LanguageSwitcher from './LanguageSwitcher';
import logo from '../assets/images/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Check for token and user data on component mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    
    if (token && userData) {
      try {
        setUser(JSON.parse(userData));
      } catch (e) {
        console.error('Failed to parse user data', e);
      }
    }
  }, []);

  // Handle logout
  const handleLogout = useCallback(() => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
    setIsUserMenuOpen(false);
    setIsMenuOpen(false);
  }, [navigate]);

  // Scroll detection for sticky header
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items
  const navigation = React.useMemo(
    () => [
      { name: t('nav.home'), href: '/', icon: Home },
      { name: t('nav.about'), href: '/about', icon: Info },
      { name: t('nav.pricing'), href: '/pricing', icon: DollarSign },
      { name: t('nav.contact'), href: '/contact', icon: Mail },
    ],
    [t]
  );

  // Handle logo error
  const [logoError, setLogoError] = useState(false);
  const logoSrc = logoError ? '/fallback-logo.png' : logo;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 text-black transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500"
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Logo and Website Name */}
          <div className="flex items-center justify-center md:justify-start flex-1 md:flex-none">
            <Link
              to="/"
              className="flex items-center space-x-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 rounded-md"
              aria-label="Home"
            >
              <img
                src={logoSrc}
                onError={() => setLogoError(true)}
                alt={`${WEBSITE.NAME} Logo`}
                className="h-10 w-auto object-contain"
                width={40}
                height={40}
                loading="eager"
              />
              <span className="text-2xl font-extrabold text-red-600 hover:text-red-800 transition-colors">
                {WEBSITE.NAME}
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === item.href
                    ? 'text-red-600'
                    : 'text-red-600 hover:text-red-800'
                }`}
                aria-current={location.pathname === item.href ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Language Switcher and User Actions */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />

            {user ? (
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                  aria-expanded={isUserMenuOpen}
                  aria-label="User menu"
                >
                  <User className="h-5 w-5 text-red-600" />
                  <span className="text-sm font-medium text-red-600 md:inline hidden">
                    {user.name}
                  </span>
                </button>

                <AnimatePresence>
                  {isUserMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-50"
                    >
                      <div className="p-2 space-y-1">
                        <div className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200 truncate">
                          {t('header.welcome')}, {user.name}
                        </div>
                        <button
                          onClick={handleLogout}
                          className="w-full flex items-center space-x-2 px-4 py-3 text-left text-sm hover:bg-gray-100 rounded-lg transition-colors"
                        >
                          <LogOut className="h-5 w-5 text-red-600" />
                          <span>{t('header.logout')}</span>
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link
                  to="/login"
                  className="hidden md:inline-flex items-center px-4 py-2 text-sm font-medium text-red-600 hover:text-red-800 transition-colors"
                >
                  {t('nav.login')}
                </Link>
                <Link
                  to="/signup"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-800 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  {t('nav.signup')}
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white shadow-md"
          >
            <div className="px-2 pt-2 pb-4 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === item.href
                      ? 'bg-gray-100 text-red-600'
                      : 'text-red-600 hover:bg-gray-50 hover:text-red-800'
                  }`}
                  aria-current={location.pathname === item.href ? 'page' : undefined}
                >
                  <div className="flex items-center space-x-3">
                    <item.icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </div>
                </Link>
              ))}

              <div className="pt-4 border-t border-gray-200">
                {user ? (
                  <>
                    <div className="px-3 py-2 text-sm font-medium text-gray-500">
                      {t('header.welcome')}, {user.name}
                    </div>
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium text-red-600 hover:bg-gray-50 hover:text-red-800"
                    >
                      <LogOut className="h-5 w-5" />
                      <span>{t('header.logout')}</span>
                    </button>
                  </>
                ) : (
                  <div className="grid grid-cols-2 gap-2 px-1">
                    <Link
                      to="/login"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center justify-center px-4 py-2 text-sm font-medium text-red-600 hover:bg-gray-50 hover:text-red-800 rounded-md"
                    >
                      {t('nav.login')}
                    </Link>
                    <Link
                      to="/signup"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-800 rounded-md"
                    >
                      {t('nav.signup')}
                    </Link>
                  </div>
                )}
              </div>

              <div className="px-3 py-2">
                <LanguageSwitcher mobile />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;