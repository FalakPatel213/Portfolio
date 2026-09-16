import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-white border-y">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-8 lg:py-10">
                <div className="md:flex md:justify-between md:items-start gap-10">
                    <div className="mb-8 md:mb-0 max-w-sm">
                        <Link to="/" className="flex items-center">
                            <img
                                src="https://github.com/FalakPatel213.png"
                                className="mr-4 h-16 w-16 rounded-full object-cover"
                                alt="Falak Patel"
                            />
                            <div>
                                <h2 className="text-lg font-semibold text-gray-900">Falak Patel</h2>
                                <p className="text-sm text-gray-500">Computer Science &amp; Engineering</p>
                            </div>
                        </Link>
                        <p className="mt-4 text-sm leading-6 text-gray-500">
                            B.E. CSE student at GTU interested in web development, software projects, and learning new technologies.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-8 sm:gap-12 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-5 text-sm font-semibold text-gray-900 uppercase">Navigation</h2>
                            <ul className="text-gray-500 font-medium space-y-3">
                                <li><Link to="/" className="hover:underline hover:text-gray-900">Home</Link></li>
                                <li><Link to="/about" className="hover:underline hover:text-gray-900">About</Link></li>
                                <li><Link to="/contact" className="hover:underline hover:text-gray-900">Contact</Link></li>
                                <li><Link to="/github" className="hover:underline hover:text-gray-900">GitHub</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-5 text-sm font-semibold text-gray-900 uppercase">Connect</h2>
                            <ul className="text-gray-500 font-medium space-y-3">
                                <li>
                                    <a href="https://github.com/FalakPatel213" target="_blank" rel="noreferrer" className="hover:underline hover:text-gray-900">GitHub</a>
                                </li>
                                <li>
                                    <a href="mailto:falakpatel213@gmail.com" className="hover:underline hover:text-gray-900">Email</a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/falakpatel213/" target="_blank" rel="noreferrer" className="hover:underline hover:text-gray-900">LinkedIn</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-5 text-sm font-semibold text-gray-900 uppercase">Details</h2>
                            <ul className="text-gray-500 font-medium space-y-3">
                                <li>Ahmedabad, Gujarat</li>
                                <li>India</li>
                                <li>Expected Graduation: 2027</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center">
                        © 2026 Falak Patel. All Rights Reserved.
                    </span>
                    <a
                        href="https://github.com/FalakPatel213"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-4 sm:mt-0 text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline"
                    >
                        View my GitHub profile →
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;