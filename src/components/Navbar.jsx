import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Dna } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Committees', path: '/committees' },
        { name: 'Invited', path: '/invited' },
        { name: 'Schedule', path: '/schedule' },
        { name: 'Dates', path: '/dates' },
        { name: 'Submission', path: '/submission' },
        { name: 'Venue', path: '/venue' },
        { name: 'Special Session', path: '/special-session' },
    ];

    const isActive = (path) => {
        if (path === '/') return location.pathname === '/';
        return location.pathname.startsWith(path);
    };

    return (
        <nav className="sticky top-0 z-50 glass-panel border-b border-white/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-24 items-center">
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0 flex items-center gap-4 group">
                            <img
                                src={`${import.meta.env.BASE_URL}BIOMAP_logo.png`}
                                alt="BIOMAP Logo"
                                className="h-16 w-auto object-contain transition-transform group-hover:scale-105"
                            />
                            <span className="font-display font-bold text-2xl text-sage-900 tracking-tight flex flex-col leading-none">
                                <span>BIOMAP</span>
                                <span className="text-sm text-sage-600 font-medium tracking-widest">2026</span>
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`nav-link-animated px-4 py-2 rounded-md text-base font-medium transition-colors duration-200 ${isActive(link.path)
                                    ? 'text-sage-800 bg-sage-50'
                                    : 'text-gray-600 hover:text-sage-600'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-sage-600 hover:bg-sage-50 focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden bg-white border-b border-sage-100">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(link.path)
                                    ? 'text-sage-800 bg-sage-50'
                                    : 'text-gray-600 hover:text-sage-600 hover:bg-sage-50/50'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
