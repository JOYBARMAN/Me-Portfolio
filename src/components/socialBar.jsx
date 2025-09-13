import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const socials = [
    { id: "leetcode", icon: <SiLeetcode size={22} />, url: "https://leetcode.com/your-username" },
    { id: "github", icon: <FaGithub size={22} />, url: "https://github.com/your-username" },
    { id: "linkedin", icon: <FaLinkedin size={22} />, url: "https://linkedin.com/in/your-username" },
    { id: "instagram", icon: <FaInstagram size={22} />, url: "https://instagram.com/your-username" },
];

const SocialBar = () => {
    const [isHero, setIsHero] = useState(true);

    // Detect scroll to change icon color
    useEffect(() => {
        const handleScroll = () => {
            const heroHeight = document.getElementById("hero")?.offsetHeight || 0;
            setIsHero(window.scrollY < heroHeight);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed left-2 bottom-0 flex flex-col justify-end gap-6 z-50 h-full pb-8">
            {socials.map((item, index) => (
                <motion.a
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    whileHover={{ scale: 1.3, rotate: 10 }}
                    className={`transition-colors duration-300 ${isHero ? "text-white hover:text-emerald-400" : "text-gray-700 hover:text-emerald-600"
                        }`}
                >
                    {item.icon}
                </motion.a>
            ))}
        </div>
    );
};

export default SocialBar;
