import React, { useState, useEffect } from "react";
import { FaMoon, FaSun, FaBars } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

import About from "../pages/aboutSection";
import ProductionProjects from "../pages/productionProjects";
import Experience from "../pages/experiencesSection";
import Skills from "../pages/skillsSection";
import Projects from "../pages/projectsSection";
import Education from "../pages/educationsSection";
import ResearchPublications from "../pages/reserchPublication";
import Contact from "../pages/contactSection";

const FloatingTabBar = ({
    productionProjects,
    experiences,
    skills,
    skillsCategories,
    projects,
    educations,
    darkMode,
    setDarkMode,
}) => {
    const tabrItems = [
        "about",
        "production-projects",
        "experiences",
        "skills",
        "personal-projects",
        "educations & courses",
        "research & publications",
        "contact",
    ];

    const [activeTab, setActiveTab] = useState("about");
    const [showPopup, setShowPopup] = useState(false);
    const [showFloating, setShowFloating] = useState(false);
    const [shake, setShake] = useState(false);

    // Show floating TabBar only when user scrolls down (not at very top)
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setShowFloating(true);
            } else {
                setShowFloating(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Shake animation 2s after floating bar appears
    useEffect(() => {
        if (showFloating) {
            const timer = setTimeout(() => {
                setShake(true);
                setTimeout(() => setShake(false), 600);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [showFloating]);

    const handleSelect = (tab) => {
        setActiveTab(tab);
        setShowPopup(false);
    };

    return (
        <>
            {/* Floating TabBar (appears only when scrolled) */}
            <AnimatePresence>
                {showFloating && (
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        transition={{ duration: 0.4 }}
                        className="fixed top-6 right-6 z-50 flex flex-col items-end"
                    >
                        {/* Main Floating Button */}
                        <motion.button
                            onClick={() => setShowPopup((prev) => !prev)}
                            animate={shake ? { x: [0, -4, 4, -4, 4, 0] } : { x: 0 }}
                            transition={{ duration: 0.6 }}
                            whileTap={{ scale: 0.9 }}
                            className="flex items-center gap-2 px-3 py-2 text-sm md:text-base rounded-full shadow-lg 
                   bg-gray-50 dark:bg-gray-800/90 backdrop-blur-md 
                   text-gray-900 dark:text-gray-100 
                   hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        >
                            <FaBars size={16} />
                            <span className="capitalize font-medium text-sm md:text-base">
                                {activeTab.replace("-", " ")}
                            </span>
                        </motion.button>

                        {/* Popup Menu */}
                        <AnimatePresence>
                            {showPopup && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="mt-2 w-56 max-w-[90vw] rounded-xl shadow-2xl 
                       bg-gray-50 dark:bg-gray-800/80 backdrop-blur-lg 
                       p-2 flex flex-col gap-1"
                                >
                                    {tabrItems.map((tab, index) => (
                                        <motion.button
                                            key={tab}
                                            onClick={() => handleSelect(tab)}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            transition={{ delay: index * 0.05 }}
                                            className={`px-2 py-1 rounded-md text-left capitalize text-sm 
                  transition-colors duration-200 ${activeTab === tab
                                                    ? "bg-emerald-500 text-white"
                                                    : "hover:bg-emerald-100 dark:hover:bg-emerald-700/30 text-gray-900 dark:text-gray-100"
                                                }`}
                                        >
                                            {tab.replace("-", " ")}
                                        </motion.button>
                                    ))}

                                    {/* Dark mode toggle */}
                                    <motion.button
                                        onClick={() => setDarkMode(!darkMode)}
                                        whileTap={{ rotate: 180 }}
                                        className="mt-1 px-2 py-1 rounded-md text-left flex items-center gap-2 
                         hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-sm"
                                    >
                                        {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
                                        {darkMode ? "Light Mode" : "Dark Mode"}
                                    </motion.button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Sections */}
            {activeTab === "about" && <About />}
            {activeTab === "production-projects" && (
                <ProductionProjects productionProjectsData={productionProjects} />
            )}
            {activeTab === "experiences" && (
                <Experience experiencesData={experiences} />
            )}
            {activeTab === "skills" && (
                <Skills skillData={skills} skillCategories={skillsCategories} />
            )}
            {activeTab === "personal-projects" && (
                <Projects projects={projects} />
            )}
            {activeTab === "educations & courses" && (
                <Education educationData={educations} />
            )}
            {activeTab === "research & publications" && (
                <ResearchPublications />
            )}
            {activeTab === "contact" && <Contact />}

        </>
    );
};

export default FloatingTabBar;
