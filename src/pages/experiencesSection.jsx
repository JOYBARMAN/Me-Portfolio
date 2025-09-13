import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const Experience = ({ sectionRef, experiences }) => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const containerVariants = {
        hidden: {},
        show: { transition: { staggerChildren: 0.2 } },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
    };

    return (
        <section
            id="experiences"
            ref={sectionRef}
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

            <div className="container mx-auto relative z-10">
                {/* Section Title */}
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-gray-900 dark:text-white"
                >
                    Professional <span className="text-emerald-700 dark:text-emerald-400">Experiences</span>
                </motion.h2>

                {/* Timeline */}
                <div className="relative">
                    {/* Center line */}
                    <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        viewport={{ once: true }}
                        className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 w-1 bg-emerald-300 dark:bg-emerald-600 rounded-full hidden md:block origin-top"
                    />

                    <motion.div
                        className="flex flex-col space-y-12"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        {experiences.map((exp, index) => {
                            const isExpanded = expandedIndex === index;
                            return (
                                <motion.div
                                    key={index}
                                    variants={cardVariants}
                                    className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                        }`}
                                >
                                    {/* Card */}
                                    <div
                                        className={`w-full md:w-1/2 p-4 md:p-8 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                                            }`}
                                    >
                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 transition-all duration-300 border border-gray-100 dark:border-gray-700"
                                        >
                                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                                                {exp.role}
                                            </h3>
                                            <p className="text-emerald-700 dark:text-emerald-400 font-medium">
                                                {exp.company}
                                            </p>
                                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                                {exp.duration}
                                            </p>

                                            {/* Expandable description */}
                                            <AnimatePresence initial={false}>
                                                <motion.p
                                                    key={isExpanded ? "expanded" : "collapsed"}
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.4 }}
                                                    className="text-gray-700 dark:text-gray-300 mt-4 text-sm overflow-hidden"
                                                >
                                                    {isExpanded
                                                        ? exp.description
                                                        : exp.description.slice(0, 120) +
                                                        (exp.description.length > 120 ? "..." : "")}
                                                </motion.p>
                                            </AnimatePresence>

                                            {exp.description.length > 120 && (
                                                <button
                                                    onClick={() => toggleExpand(index)}
                                                    className="mt-3 text-emerald-700 dark:text-emerald-400 font-medium hover:underline focus:outline-none"
                                                >
                                                    {isExpanded ? "Show less ▲" : "Show more ▼"}
                                                </button>
                                            )}
                                        </motion.div>
                                    </div>

                                    {/* Timeline Icon */}
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                                        viewport={{ once: true }}
                                        className="absolute left-1/2 transform -translate-x-1/2 p-4 rounded-full bg-emerald-700 dark:bg-emerald-500 text-white z-10 hidden md:block shadow-xl ring-4 ring-emerald-200 dark:ring-emerald-700"
                                    >
                                        <FaBriefcase className="w-5 h-5" />
                                    </motion.div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
