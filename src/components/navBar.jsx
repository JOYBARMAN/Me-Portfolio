import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = ({
    sections,
    activeSection,
    isNavOpen,
    setIsNavOpen,
    handleScroll,
    darkMode,
    setDarkMode,
}) => {
    return (
        <nav className="fixed w-full z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm shadow-md transition-all duration-300">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <button
                    onClick={() => handleScroll("hero")}
                    className="text-2xl font-bold text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300"
                >
                    Joy Barman
                </button>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6 items-center">
                    {sections.map((section) => (
                        <button
                            key={section}
                            onClick={() => handleScroll(section)}
                            className={`text-sm font-medium transition-all duration-500 transform capitalize
                ${activeSection === section
                                    ? "scale-110 text-white font-bold bg-emerald-700 rounded-full px-4 py-2 shadow-md"
                                    : "text-gray-600 dark:text-gray-300 hover:text-emerald-700 dark:hover:text-emerald-400"
                                }`}
                        >
                            {section.replace("-", " ")}
                        </button>
                    ))}

                    {/* Dark/Light Mode Toggle */}
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition"
                    >
                        {darkMode ? (
                            <FaSun className="text-yellow-400" />
                        ) : (
                            <FaMoon className="text-gray-800" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button onClick={() => setIsNavOpen(true)} className="md:hidden">
                    <svg
                        className="w-6 h-6 text-gray-800 dark:text-gray-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        ></path>
                    </svg>
                </button>
            </div>

            {/* Mobile Nav Menu */}
            {isNavOpen && (
                <div className="fixed inset-0 w-full h-screen bg-white dark:bg-gray-900 z-50 flex flex-col items-center justify-center animate-fadeIn">
                    <button
                        onClick={() => setIsNavOpen(false)}
                        className="absolute top-6 right-6 text-gray-800 dark:text-gray-200"
                    >
                        <svg
                            className="w-8 h-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            ></path>
                        </svg>
                    </button>
                    <div className="flex flex-col items-center justify-center w-full space-y-8">
                        {sections.map((section) => (
                            <button
                                key={section}
                                onClick={() => handleScroll(section)}
                                className="text-3xl text-gray-800 dark:text-gray-200 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors capitalize"
                            >
                                {section.replace("-", " ")}
                            </button>
                        ))}

                        {/* Dark/Light Toggle for Mobile */}
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="mt-6 p-3 rounded-full bg-gray-200 dark:bg-gray-700 transition"
                        >
                            {darkMode ? (
                                <FaSun className="text-yellow-400 text-2xl" />
                            ) : (
                                <FaMoon className="text-gray-800 dark:text-gray-200 text-2xl" />
                            )}
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
