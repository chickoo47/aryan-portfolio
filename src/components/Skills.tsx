"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";

const Skills = () => {
    return (
        <section id="about" className="py-20 px-4 relative z-10 bg-black/20 backdrop-blur-sm">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold mb-16 text-center"
                >
                    Technical <span className="text-accent">Arsenal</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass p-6 rounded-xl"
                    >
                        <h3 className="text-xl font-bold mb-4 text-primary">Languages</h3>
                        <div className="flex flex-wrap gap-2">
                            {resumeData.skills.languages.map((skill) => (
                                <span key={skill} className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="glass p-6 rounded-xl"
                    >
                        <h3 className="text-xl font-bold mb-4 text-secondary">Technologies</h3>
                        <div className="flex flex-wrap gap-2">
                            {resumeData.skills.technologies.map((skill) => (
                                <span key={skill} className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="glass p-6 rounded-xl"
                    >
                        <h3 className="text-xl font-bold mb-4 text-accent">Soft Skills</h3>
                        <div className="flex flex-wrap gap-2">
                            {resumeData.skills.softSkills.map((skill) => (
                                <span key={skill} className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
