import React from "react";
import { motion } from "framer-motion";
import ProfileImage from "../assets/about.jpg";

const About = () => {
    return (
        <section
            id="about"
            className="relative py-20 px-6 overflow-hidden transition-colors duration-500
                       bg-gradient-to-b from-gray-100 via-gray-200 to-gray-100 dark:from-black dark:via-gray-900 dark:to-gray-800"
        >
            {/* Animated Decorative Circles */}
            <motion.div
                className="absolute top-0 left-1/4 w-48 h-48 rounded-full blur-3xl bg-emerald-500/20 dark:bg-emerald-600/20"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5 }}
            />
            <motion.div
                className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full blur-3xl bg-purple-500/20 dark:bg-purple-600/20"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5 }}
            />
            {/* TabBar Component */}

            <div className="container mx-auto text-center relative z-10">
                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-extrabold text-center mb-20 text-gray-900 dark:text-white"
                >
                    About <span className="text-emerald-700 dark:text-emerald-400">Me</span>
                </motion.h2>
                <div className="flex flex-col md:flex-row items-center gap-12 justify-center">
                    {/* Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2 text-left"
                    >
                        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                            I'm a results-driven software engineer with hands-on experience in both backend
                            and frontend development. Currently, I specialize in building scalable and efficient
                            backend systems using Python, Django, and Django Rest Framework. My journey began
                            with crafting intuitive user interfaces as a frontend developer, which gave me a
                            strong sense of user experience that I now combine with backend expertise to deliver
                            high-performance, full-stack solutions.
                        </p>
                        <p className="text-lg text-gray-700 dark:text-gray-300">
                            I enjoy solving complex problems, from real-time communication and AI-driven solutions
                            to optimizing system architecture for scalability and maintainability. Beyond work,
                            I like exploring new technologies, contributing to open-source projects, and building
                            personal applications—from real-time chat apps to e-commerce backends. I’m always open
                            to opportunities that challenge me to grow, lead teams, and create meaningful digital
                            experiences.
                        </p>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2 flex justify-center"
                    >
                        <motion.div
                            className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-full p-2 shadow-2xl shadow-black/20 dark:shadow-black/50 bg-gray-100 dark:bg-gray-800 transition-colors duration-500"
                            animate={{
                                y: [0, -10, 0], // floating effect
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "easeInOut",
                            }}
                        >
                            <img
                                src={ProfileImage}
                                alt="Jane Doe"
                                className="rounded-full w-full h-full object-cover border-4 border-emerald-700 dark:border-emerald-400 hover:border-emerald-300 transition-all duration-300 hover:scale-105"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
