import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Projects = ({ projects }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleEnter = (i) => setActiveIndex(i);
    const handleLeave = () => setActiveIndex(null);
    const handleClick = (i) => {
        if (typeof window !== "undefined" && window.innerWidth <= 768) {
            setActiveIndex((prev) => (prev === i ? null : i));
        }
    };

    return (
        <section
            id="projects"
            className="relative py-20 px-6 overflow-hidden transition-colors duration-500
                 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-100
                 dark:from-black dark:via-gray-900 dark:to-gray-800"
        >
            {/* Decorative blurred circles */}
            <motion.div
                className="absolute top-0 left-1/4 w-48 h-48 rounded-full blur-3xl bg-pink-400/20 dark:bg-purple-600/20"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5 }}
            />
            <motion.div
                className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full blur-3xl bg-emerald-400/20 dark:bg-pink-600/20"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5 }}
            />

            <div className="container mx-auto relative z-10">
                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-gray-900 dark:text-white"
                >
                    Personal <span className="text-emerald-600">Projects</span>
                </motion.h2>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, index) => {
                        const isActive = activeIndex === index;
                        return (
                            <motion.div
                                key={index}
                                onMouseEnter={() => handleEnter(index)}
                                onMouseLeave={handleLeave}
                                onClick={() => handleClick(index)}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.45, ease: "easeOut" }}
                                className="relative rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700
                           bg-white/70 dark:bg-gray-800/60 backdrop-blur-lg p-6 flex flex-col transition-all duration-300 overflow-visible"
                            >
                                {/* Image with overlay animation */}
                                <div className="relative overflow-hidden rounded-xl mb-4">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-36 object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
                                    />

                                    {/* Overlay slides from top to center */}
                                    <AnimatePresence>
                                        {isActive && (
                                            <motion.div
                                                initial={{ y: "-100%", opacity: 0 }}
                                                animate={{ y: "0%", opacity: 1 }}
                                                exit={{ y: "-100%", opacity: 0 }}
                                                transition={{ duration: 0.4, ease: "easeOut" }}
                                                className="absolute inset-0 bg-black/60 flex items-center justify-center"
                                            >
                                                <a
                                                    href={project.liveLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="px-5 py-2 bg-emerald-600 text-white font-semibold rounded-full shadow-lg hover:bg-emerald-700 transition"
                                                >
                                                    Live Demo
                                                </a>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                {/* Tech Tags (emerald green) */}
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 text-xs font-medium rounded-full bg-emerald-600 text-white shadow-md"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Projects;
