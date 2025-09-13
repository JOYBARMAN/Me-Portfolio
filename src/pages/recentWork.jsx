import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaTasks } from "react-icons/fa";

const RecentWork = ({ sectionRef, workExperiences }) => {
    const containerVariants = {
        hidden: {},
        show: { transition: { staggerChildren: 0.2 } },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <section
            id="production-projects"
            ref={sectionRef}
            className="relative py-20 px-6 overflow-hidden transition-colors duration-500 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-100 dark:from-black dark:via-gray-900 dark:to-gray-800"
        >
            {/* Decorative animated circles */}
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
                {/* Section Title */}
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-gray-900 dark:text-white"
                >
                    Production <span className="text-emerald-600">Projects</span>
                </motion.h2>

                {/* Cards */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {workExperiences.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0px 8px 30px rgba(16, 185, 129, 0.3)",
                            }}
                            className="relative bg-white dark:bg-gray-800/80 backdrop-blur-lg border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg p-8 flex flex-col transition-all duration-300"
                        >
                            {/* Title */}
                            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                                <FaTasks className="text-emerald-600" /> {project.title}
                            </h3>
                            <p className="text-emerald-600 font-medium mb-4">
                                {project.role} | {project.duration}
                            </p>

                            {/* Tasks */}
                            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-6">
                                {project.tasks.map((task, i) => (
                                    <li key={i} className="leading-relaxed text-sm">{task}</li>
                                ))}
                            </ul>

                            {/* Tech stack tags */}
                            {project.technologies && (
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 text-xs font-medium rounded-full bg-emerald-600 text-white shadow-md"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {/* Live Demo Button */}
                            {project.liveLink && (
                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-auto inline-flex items-center justify-center gap-2 px-6 py-2 text-sm bg-emerald-600 text-white font-semibold rounded-full shadow-md hover:bg-emerald-700 transition-all"
                                >
                                    Live Demo
                                    <motion.span
                                        initial={{ x: 0 }}
                                        whileHover={{ x: 3 }}
                                        transition={{ type: "spring", stiffness: 200 }}
                                    >
                                        <FaExternalLinkAlt className="w-4 h-4" />
                                    </motion.span>
                                </a>
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default RecentWork;
