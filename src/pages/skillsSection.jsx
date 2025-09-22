import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const Skills = ({ skillData, skillCategories }) => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [skills, setSkills] = useState(skillData);

    const skillsFiltered = (category) => {
        setActiveCategory(category);
        setSkills(category === "All" ? skillData : skillData.filter((skill) => skill.category === category));
    };

    const containerVariants = { hidden: {}, show: { transition: { staggerChildren: 0.15 } } };
    const cardVariants = { hidden: { opacity: 0, y: 40, scale: 0.9 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } } };
    const starVariants = { hidden: { opacity: 0, scale: 0.5 }, show: (i) => ({ opacity: 1, scale: 1, transition: { delay: i * 0.1, type: "spring", stiffness: 200 } }) };

    return (
        <section
            id="skills"
            className="relative py-20 px-6 overflow-hidden transition-colors duration-500
                       bg-gradient-to-b from-gray-100 via-gray-200 to-gray-100 dark:from-black dark:via-gray-900 dark:to-gray-800"
        >
            {/* Decorative animated circles */}
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
                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-900 dark:text-white"
                >
                    My <span className="text-emerald-700 dark:text-emerald-400">Skills & Expertise</span>
                </motion.h2>

                {/* Category Buttons */}
                <div className="flex justify-center flex-wrap gap-4 mb-12">
                    {skillCategories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => skillsFiltered(cat)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat
                                ? "bg-gradient-to-r from-emerald-600 to-emerald-500 text-white shadow-lg scale-105"
                                : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-emerald-100 dark:hover:bg-emerald-700/30"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Skills Grid */}
                <motion.div
                    key={activeCategory}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                >
                    {skills.map((skill) => (
                        <motion.div
                            key={skill.name}
                            variants={cardVariants}
                            whileHover={{ scale: 1.1, rotate: [0, -2, 2, 0], boxShadow: "0px 10px 30px rgba(16, 185, 129, 0.2)" }}
                            className="relative p-6 bg-white dark:bg-gray-800/80 backdrop-blur-lg rounded-xl text-center flex flex-col items-center justify-center cursor-pointer transition-all duration-300 group shadow-lg"
                        >
                            {/* Icon */}
                            <motion.div whileHover={{ scale: 1.2, rotate: 10 }} className="mb-3">
                                {skill.icon}
                            </motion.div>

                            {/* Skill Name */}
                            <div className="text-lg font-medium text-gray-900 dark:text-white">{skill.name}</div>

                            {/* Stars appear on hover */}
                            <div className="flex mt-3 space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <motion.div key={i} custom={i} initial="hidden" animate={i < skill.rating ? "show" : "hidden"} variants={starVariants}>
                                        <FaStar className={`w-5 h-5 ${i < skill.rating ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"}`} />
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;