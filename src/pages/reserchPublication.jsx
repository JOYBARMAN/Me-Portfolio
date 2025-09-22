import React from "react";
import { motion } from "framer-motion";

const publicationsData = [
    {
        title: "Airlines Fatalities Predictor using Machine Learning",
        authors: "Joy Barman",
        journal: "Journal of AI Research",
        year: "2021",
        link: "https://github.com/JOYBARMAN/Airline_fatalities_predictor",
    },
    {
        title: "Flight Fare Predictor using Machine Learning",
        authors: "Joy Barman",
        journal: "Journal of AI Research",
        year: "2021",
        link: "https://github.com/JOYBARMAN/Fligth_fare_predictor",
    }
];

const ResearchPublications = () => {
    return (
        <section
            id="research & publications"
            className="relative py-24 px-6 overflow-hidden transition-colors duration-500
                 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-100
                 dark:from-black dark:via-gray-900 dark:to-gray-800"
        >
            {/* Decorative floating shapes */}
            <motion.div
                className="absolute top-10 left-10 w-40 h-40 rounded-full blur-3xl bg-purple-400/20 dark:bg-emerald-600/20"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5 }}
            />
            <motion.div
                className="absolute bottom-10 right-10 w-56 h-56 rounded-full blur-3xl bg-emerald-400/20 dark:bg-pink-600/20"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5 }}
            />

            <div className="container mx-auto relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-gray-900 dark:text-white"
                >
                    Me <span className="text-emerald-600"> Research & Publications</span>
                </motion.h2>

                {/* Publications grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {publicationsData.map((pub, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: index * 0.2 }}
                            whileHover={{ scale: 1.03 }}
                            className="relative rounded-2xl p-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg shadow-xl border border-gray-200 dark:border-gray-700 flex flex-col justify-between transition-transform duration-300 cursor-pointer"
                        >
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                                    {pub.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-1">{pub.authors}</p>
                                <p className="text-gray-500 dark:text-gray-400 mb-2">{pub.journal}, {pub.year}</p>
                            </div>
                            <a
                                href={pub.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 inline-block px-4 py-2 rounded-full bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition"
                            >
                                View Paper
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ResearchPublications;
