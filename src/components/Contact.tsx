"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const Contact = () => {
    return (
        <section id="contact" className="py-20 px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold mb-8"
                >
                    Let's <span className="text-primary">Connect</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-gray-400 mb-12 max-w-xl mx-auto"
                >
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col md:flex-row justify-center gap-6 md:gap-12 items-center"
                >
                    <a
                        href={`mailto:${resumeData.email}`}
                        className="flex items-center gap-3 text-lg hover:text-primary transition-colors"
                    >
                        <Mail /> {resumeData.email}
                    </a>
                    <a
                        href={`tel:${resumeData.phone}`}
                        className="flex items-center gap-3 text-lg hover:text-primary transition-colors"
                    >
                        <Phone /> {resumeData.phone}
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-12 flex justify-center gap-6"
                >
                    <a href={resumeData.links.linkedin} className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                        <Linkedin size={24} />
                    </a>
                    <a href={resumeData.links.github} className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                        <Github size={24} />
                    </a>
                </motion.div>

                <footer className="mt-20 text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} {resumeData.name}. All rights reserved.</p>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
