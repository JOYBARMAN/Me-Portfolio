import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact = ({ sectionRef }) => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                    to_email: "barmanjoy88@gmail.com",
                },
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    setLoading(false);
                    setSent(true);
                    setFormData({ name: "", email: "", message: "" });
                },
                (error) => {
                    setLoading(false);
                    alert("Failed to send message. Please try again.");
                    console.error(error);
                }
            );
    };

    return (
        <section
            id="contact"
            ref={sectionRef}
            className="relative py-20 px-6 overflow-hidden transition-colors duration-500
                       bg-gradient-to-b from-gray-100 via-gray-200 to-gray-100
                       dark:from-black dark:via-gray-900 dark:to-gray-800"
        >
            {/* Decorative Circles */}
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

            <div className="container mx-auto relative z-10 text-center">
                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4"
                >
                    Get In <span className="text-emerald-700 dark:text-emerald-400">Touch</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-12"
                >
                    Have a project in mind or just want to say hi? Let’s connect and build something amazing together.
                </motion.p>

                {/* Contact Form */}
                <motion.form
                    onSubmit={sendEmail}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center max-w-xl mx-auto space-y-4"
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-600 transition-all"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-600 transition-all"
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="6"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-600 transition-all"
                    ></textarea>

                    <motion.button
                        type="submit"
                        disabled={loading}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full py-4 bg-emerald-700 text-white font-semibold rounded-xl shadow-lg hover:bg-emerald-800 transition-all disabled:opacity-70"
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </motion.button>

                    {sent && (
                        <p className="text-emerald-600 dark:text-emerald-400 mt-4 font-medium">
                            ✅ Message sent successfully!
                        </p>
                    )}
                </motion.form>

                {/* Social Icons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex justify-center space-x-8 mt-12 text-3xl"
                >
                    {[
                        { href: "https://facebook.com", icon: <FaFacebook /> },
                        { href: "https://twitter.com", icon: <FaTwitter /> },
                        { href: "https://instagram.com", icon: <FaInstagram /> },
                        { href: "https://linkedin.com", icon: <FaLinkedin /> },
                    ].map((social, i) => (
                        <motion.a
                            key={i}
                            href={social.href}
                            target="_blank"
                            rel="noreferrer"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            className="text-gray-600 dark:text-gray-300 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
                        >
                            {social.icon}
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
