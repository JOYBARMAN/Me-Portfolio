import "./animations.css";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import Reveal from "./components/reveal.jsx";
import Navbar from "./components/navBar.jsx";
import Hero from "./pages/heroSection.jsx";
import About from "./pages/aboutSection.jsx";
import Projects from "./pages/projectsSection.jsx";
import Skills from "./pages/skillsSection.jsx";
import Experience from "./pages/experiencesSection.jsx";
import RecentWork from "./pages/recentWork.jsx";
import Contact from "./pages/contactSection.jsx";
import Footer from "./components/footer.jsx";
import ScrollToTop from "./components/scrollToTop.jsx";
import SocialBar from "./components/socialBar.jsx";

import {
  projects,
  experiences,
  workExperiences,
  skills,
  sections,
} from "./constants/constants.jsx";

const App = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const sectionsRef = useRef([]);


  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    const currentSections = sectionsRef.current;
    currentSections.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      currentSections.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isNavOpen]);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsNavOpen(false);
  };

  console.log("Active Section:", activeSection);

  return (
    <div className="leading-relaxed relative bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-500">
      {/* Navbar */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Navbar
          sections={sections}
          activeSection={activeSection}
          isNavOpen={isNavOpen}
          setIsNavOpen={setIsNavOpen}
          handleScroll={handleScroll}
          darkMode={darkMode}
          setDarkMode={setDarkMode} // ✅ pass to navbar
        />
      </motion.div>

      {/* Sections with reveal animations */}
      <Reveal>
        <Hero
          sectionRef={(el) => (sectionsRef.current[0] = el)}
          handleScroll={handleScroll}
        />
      </Reveal>

      <Reveal delay={0.2}>
        <About sectionRef={(el) => (sectionsRef.current[1] = el)} />
      </Reveal>

      <Reveal delay={0.3}>
        <RecentWork
          sectionRef={(el) => (sectionsRef.current[2] = el)}
          workExperiences={workExperiences}
        />
      </Reveal>

      <Reveal delay={0.4}>
        <Experience
          sectionRef={(el) => (sectionsRef.current[3] = el)}
          experiences={experiences}
        />
      </Reveal>

      <Reveal delay={0.5}>
        <Projects
          sectionRef={(el) => (sectionsRef.current[4] = el)}
          projects={projects}
        />
      </Reveal>

      <Reveal delay={0.6}>
        <Skills
          sectionRef={(el) => (sectionsRef.current[5] = el)}
          skills={skills}
        />
      </Reveal>

      <Reveal delay={0.7}>
        <Contact sectionRef={(el) => (sectionsRef.current[6] = el)} />
      </Reveal>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Footer />
      </motion.div>

      {/* Floating components */}
      <ScrollToTop showScrollTop={showScrollTop} handleScroll={handleScroll} />
      <SocialBar />
    </div>
  );
};

export default App;
