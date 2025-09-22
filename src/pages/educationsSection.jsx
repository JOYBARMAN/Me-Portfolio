import React from "react";
import { motion } from "framer-motion";


const Education = ({ educationData }) => {
    return (
        <section
            id="educations & courses"
            className="relative py-24 px-6 overflow-hidden transition-colors duration-500
                 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-100
                 dark:from-black dark:via-gray-900 dark:to-gray-800"
        >
            {/* Decorative floating shapes */}
            <motion.div
                className="absolute top-10 left-10 w-40 h-40 rounded-full blur-3xl bg-emerald-400/20 dark:bg-purple-600/20"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5 }}
            />
            <motion.div
                className="absolute bottom-10 right-10 w-56 h-56 rounded-full blur-3xl bg-pink-400/20 dark:bg-emerald-600/20"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5 }}
            />

            <div className="container mx-auto relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-extrabold text-center mb-20 text-gray-900 dark:text-white"
                >
                    My <span className="text-emerald-600">Education & Courses</span>
                </motion.h2>

                {/* Floating card grid */}
                <div className="relative flex flex-wrap justify-center gap-10">
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ y: 50, opacity: 0, rotate: -2 + index * 2 }}
                            whileInView={{ y: 0, opacity: 1, rotate: 0 }}
                            transition={{ duration: 0.7, delay: index * 0.2 }}
                            whileHover={{ scale: 1.05, rotate: 0, y: -5 }}
                            className="relative w-80 md:w-96 bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-6 flex flex-col transition-transform duration-300 cursor-pointer"
                        >
                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                                {edu.degree}
                            </h3>
                            <p className="text-emerald-600 dark:text-emerald-600 font-medium mb-1">
                                {edu.institution}
                            </p>
                            <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                                {edu.duration}
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">{edu.description}</p>
                            {edu.certificateLink && (
                                <a
                                    href={edu.certificateLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-3 inline-block text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 dark:hover:text-emerald-300 transition-colors"
                                >
                                    View Certificate
                                </a>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
