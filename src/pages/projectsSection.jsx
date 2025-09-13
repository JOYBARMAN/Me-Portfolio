import React, { useState } from "react";
import { motion } from "framer-motion";

const Projects = ({ sectionRef, projects }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleActive = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section
            id="projects"
            ref={sectionRef}
            className="relative py-20 px-6 overflow-hidden transition-colors duration-500
                       bg-gradient-to-b from-gray-100 via-gray-200 to-gray-100 dark:from-black dark:via-gray-900 dark:to-gray-800"
        >
            {/* Decorative blurred circles like RecentWork */}
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
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {projects.map((project, index) => {
                        const isActive = activeIndex === index;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, ease: "easeOut" }}
                                className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-xl
                                           bg-white/70 dark:bg-gray-800/60 backdrop-blur-lg border border-gray-200 dark:border-gray-700
                                           transition-all duration-300"
                                onClick={() => toggleActive(index)}
                                whileHover={{ scale: 1.05 }}
                            >
                                {/* Project Image */}
                                <div className="relative">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-64 object-cover rounded-2xl transform group-hover:scale-105 transition duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-2xl"></div>
                                </div>

                                {/* Overlay (hover / click) */}
                                <motion.div
                                    initial={{ y: "100%" }}
                                    animate={{ y: isActive ? 0 : "100%" }}
                                    whileHover={{ y: 0 }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                    className="absolute inset-0 bg-black/80 flex flex-col justify-center items-center p-6 text-center text-white"
                                >
                                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                                    <p className="text-sm mb-4 opacity-90">
                                        {project.description.length > 150
                                            ? project.description.slice(0, 150) + "..."
                                            : project.description}
                                    </p>

                                    {/* Tech Tags */}
                                    <div className="flex flex-wrap gap-2 justify-center mb-5">
                                        {project.technologies.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 text-xs font-medium rounded-full bg-emerald-600 text-white shadow-md"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Buttons */}
                                    <div className="flex gap-4">
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-2 bg-emerald-600 text-white font-semibold rounded-full hover:bg-emerald-700 transition"
                                        >
                                            Live Demo
                                        </a>
                                        {project.codeLink && (
                                            <a
                                                href={project.codeLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-4 py-2 border border-white text-white font-semibold rounded-full hover:bg-white hover:text-emerald-700 transition"
                                            >
                                                View Code
                                            </a>
                                        )}
                                    </div>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
