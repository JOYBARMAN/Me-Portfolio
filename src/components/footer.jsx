import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    const socialLinks = [
        { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/joy-barman/" },
        { icon: <FaGithub />, url: "https://github.com/JOYBARMAN" },
        { icon: <SiLeetcode />, url: "https://leetcode.com/u/barmanjoy88/" },
        { icon: <MdEmail />, url: "mailto:barmanjoy88@gmail.com" },
        { icon: <FaFacebook />, url: "https://www.facebook.com/joybarman.orko/" },
    ];

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

            {/* Social Links */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 1 }}
                className="flex justify-center gap-6 mb-4 text-xl"
            >
                {socialLinks.map((social, idx) => (
                    <motion.a
                        key={idx}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300"
                    >
                        {social.icon}
                    </motion.a>
                ))}
            </motion.div>

            {/* Copyright */}
            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                &copy; {new Date().getFullYear()} Joy Barman. All rights reserved.
            </motion.p>
        </motion.footer>
    );
};

export default Footer;

