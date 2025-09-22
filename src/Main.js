import React, { useState, useEffect, useRef } from "react";

import Hero from "./pages/heroSection";
import Footer from "./components/footer";
import FloatingTabBar from "./components/tabBar";

import {
    productionProjects,
    experiences,
    skills,
    skillCategories,
    projects,
    educations,
} from "./constants/constants.jsx";


export const Main = () => {
    const [darkMode, setDarkMode] = useState(false);
    const contactRef = useRef(null);

    const handleScroll = (section) => {
        if (section === "contact" && contactRef.current) {
            contactRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);


    return (
        <div className="leading-relaxed relative bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-500">
            <Hero handleScroll={handleScroll} />
            <FloatingTabBar productionProjects={productionProjects} experiences={experiences} skills={skills} skillsCategories={skillCategories} projects={projects} educations={educations} darkMode={darkMode} setDarkMode={setDarkMode} />
            <Footer />
        </div>
    );
};