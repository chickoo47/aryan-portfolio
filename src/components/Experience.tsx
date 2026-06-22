"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";

const Experience = () => {
    return (
        <section id="experience" className="py-20 px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold mb-16 text-center"
                >
                    Work <span className="text-secondary">Experience</span>
                </motion.h2>

                <div className="space-y-12">
                    {resumeData.experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative pl-8 border-l-2 border-white/10 hover:border-secondary/50 transition-colors"
                        >
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-secondary" />

                            <div className="mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                <h3 className="text-2xl font-bold text-white">{exp.company}</h3>
                                <span className="text-sm text-gray-400 font-mono">{exp.date}</span>
                            </div>

                            <h4 className="text-lg text-secondary mb-4">{exp.role}</h4>

                            <ul className="space-y-2">
                                {exp.details.map((detail, i) => (
                                    <li key={i} className="text-gray-400 text-sm leading-relaxed">
                                        • {detail}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
