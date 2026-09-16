import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinkClass = ({ isActive }) =>
        `block py-2 px-3 duration-200 rounded-lg ${
            isActive ? 'text-orange-700' : 'text-gray-700'
        } hover:bg-gray-50 hover:text-orange-700 lg:p-0 lg:hover:bg-transparent`;

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className="shadow sticky z-50 top-0 bg-white">
            <nav className="bg-white border-gray-200 px-4 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" onClick={closeMenu} className="flex items-center min-w-0">
                        <img
                            src="https://github.com/FalakPatel213.png"
                            className="mr-3 h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover shrink-0"
                            alt="Falak Patel"
                        />
                        <span className="text-base sm:text-lg font-semibold text-gray-900 truncate">
                            Falak Patel
                        </span>
                    </Link>

                    <div className="flex items-center lg:order-2">
                        <a
                            href="https://github.com/FalakPatel213"
                            target="_blank"
                            rel="noreferrer"
                            className="hidden sm:inline-block text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-3 sm:px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            GitHub
                        </a>

                        <Link
                            to="/contact"
                            onClick={closeMenu}
                            className="hidden sm:inline-block text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-3 sm:px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Contact Me
                        </Link>

                        <button
                            type="button"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-expanded={isMenuOpen}
                            aria-controls="mobile-menu"
                            aria-label="Toggle navigation menu"
                            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? (
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>

                    <div
                        id="mobile-menu"
                        className={`${isMenuOpen ? 'block' : 'hidden'} w-full lg:flex lg:w-auto lg:order-1`}
                    >
                        <ul className="flex flex-col mt-4 mb-2 font-medium lg:flex-row lg:space-x-8 lg:mt-0 lg:mb-0">
                            <li><NavLink onClick={closeMenu} className={navLinkClass} to="/">Home</NavLink></li>
                            <li><NavLink onClick={closeMenu} className={navLinkClass} to="/about">About</NavLink></li>
                            <li><NavLink onClick={closeMenu} className={navLinkClass} to="/contact">Contact</NavLink></li>
                            <li><NavLink onClick={closeMenu} className={navLinkClass} to="/github">Github</NavLink></li>
                            <li className="sm:hidden">
                                <a
                                    href="https://github.com/FalakPatel213"
                                    target="_blank"
                                    rel="noreferrer"
                                    onClick={closeMenu}
                                    className="block py-2 px-3 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-orange-700"
                                >
                                    GitHub Profile
                                </a>
                            </li>
                            <li className="sm:hidden">
                                <Link
                                    to="/contact"
                                    onClick={closeMenu}
                                    className="block py-2 px-3 rounded-lg text-orange-700 hover:bg-gray-50"
                                >
                                    Contact Me
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
