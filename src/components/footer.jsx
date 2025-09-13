import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative py-8 px-6 text-center text-sm text-gray-600 dark:text-gray-300 
                       bg-gradient-to-b from-gray-100 via-gray-200 to-gray-100 
                       dark:from-black dark:via-gray-900 dark:to-gray-800 
                       border-t border-gray-200 dark:border-gray-700 transition-colors duration-500 overflow-hidden"
        >
            {/* Decorative Circles */}
            <motion.div
                className="absolute top-0 left-1/4 w-24 h-24 rounded-full blur-3xl bg-emerald-500/20 dark:bg-emerald-600/20"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5 }}
            />
            <motion.div
                className="absolute bottom-0 right-1/4 w-32 h-32 rounded-full blur-3xl bg-purple-500/20 dark:bg-purple-600/20"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5 }}
            />

            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 1 }}
            >
                &copy; {new Date().getFullYear()} Joy Barman. All rights reserved.
            </motion.p>

            <motion.p
                className="mt-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                Designed and built with{' '}
                <motion.span
                    animate={{ y: [0, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
                    className="text-red-500 inline-block"
                >
                    ❤️
                </motion.span>
            </motion.p>
        </motion.footer>
    );
};

export default Footer;
