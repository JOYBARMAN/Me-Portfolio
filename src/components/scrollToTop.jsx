import React from "react";
import { motion } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";

const ScrollToTop = ({ showScrollTop, handleScroll }) => {
    return (
        <>
            {showScrollTop && (
                <motion.button
                    onClick={() => handleScroll("hero")}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 50, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="fixed bottom-8 right-8 p-3 rounded-full bg-emerald-700 text-white shadow-lg transition-all duration-300 flex items-center justify-center"
                >
                    <FiArrowUp size={24} />
                </motion.button>
            )}
        </>
    );
};

export default ScrollToTop;
