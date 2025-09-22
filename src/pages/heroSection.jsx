import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import {
    FaLinkedin,
    FaGithub,
    FaFacebook,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import heroImage from "../assets/hero.jpg"; // adjust path

const socialLinks = [
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/joy-barman/" },
    { icon: <FaGithub />, url: "https://github.com/JOYBARMAN" },
    { icon: <SiLeetcode />, url: "https://leetcode.com/u/barmanjoy88/" },
    { icon: <MdEmail />, url: "mailto:barmanjoy88@gmail.com" },
    { icon: <FaFacebook />, url: "https://www.facebook.com/joybarman.orko/" },
];

const Hero = ({ handleScroll }) => {
    return (
        <section
            id="hero-section"
            className="relative min-h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
        >
            {/* Background Image */}
            <motion.div
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 8, ease: "easeOut" }}
                className="absolute inset-0"
                style={{
                    backgroundImage: `url(${heroImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-black/90"></div>

            {/* Left blur */}
            <motion.div
                initial={{ x: -300, opacity: 0 }}
                animate={{ x: 0, opacity: 0.5 }}
                transition={{ duration: 1.5 }}
                className="absolute left-0 top-1/4 w-96 h-96 bg-purple-900/50 rounded-full blur-3xl"
            />
            {/* Right blur */}
            <motion.div
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 0.5 }}
                transition={{ duration: 1.5 }}
                className="absolute right-0 bottom-1/4 w-96 h-96 bg-emerald-900/50 rounded-full blur-3xl"
            />

            {/* Center glow */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.4 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-radial from-white/10 via-transparent to-transparent rounded-full"
            />

            {/* Content */}
            <div className="relative z-10 text-center px-6 sm:px-12">
                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: [0, -10, 0] }}
                    transition={{
                        opacity: { duration: 1 },
                        y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    }}
                    className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-lg dark:text-gray-200"
                >
                    Hi, I'm <span className="text-emerald-400">Joy Barman</span>
                </motion.h1>

                {/* Typewriter */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="mt-6 text-lg md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed"
                >
                    <Typewriter
                        words={["A passionate"]}
                        loop={1}
                        cursor
                        cursorStyle="|"
                        typeSpeed={50}
                        deleteSpeed={0}
                        delaySpeed={1000}
                    />{" "}
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 3, duration: 1 }}
                    >
                        <span className="text-purple-400">Software Engineer</span> &{" "}
                        <span className="text-emerald-400">Full Stack Developer</span> | Creating Impactful Web Experiences.
                    </motion.span>
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: [0, -8, 0] }}
                    transition={{
                        opacity: { duration: 1, delay: 1 },
                        y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                    }}
                    className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
                >
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleScroll("contact")}
                        className="px-8 py-3 bg-emerald-600 text-white  font-semibold rounded-full shadow-lg hover:bg-emerald-700 transition transform"
                    >
                        Let’s Connect
                    </motion.button>

                    <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        href="/joy-software-engineer.pdf" // adjust path
                        download
                        className="px-8 py-3 border border-white text-white font-semibold rounded-full shadow-lg hover:bg-white hover:text-emerald-700 transition transform"
                    >
                        Download CV
                    </motion.a>
                </motion.div>

                {/* Floating Social Icons */}
                <motion.div className="mt-6 flex justify-center gap-6 overflow-visible">
                    {socialLinks.map((social, idx) => (
                        <motion.a
                            key={idx}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.3, rotate: 10, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                            animate={{ y: [0, -6, 0] }}  // floating effect
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatType: "loop",
                                delay: idx * 0.2, // staggered float for each icon
                                ease: "easeInOut",
                            }}
                            className="text-emerald-100 dark:text-gray-200  text-2xl md:text-3xl drop-shadow-lg transition-colors duration-300 hover:text-emerald-600 dark:hover:text-emerald-400 rounded-full"
                        >
                            {social.icon}
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
