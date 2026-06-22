"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
    return (
        <section id="projects" className="py-20 px-4 relative z-10">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold mb-12 text-center"
                >
                    Featured <span className="text-primary">Projects</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {resumeData.projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-8 rounded-2xl hover:border-primary/50 transition-colors group"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <div className="flex gap-3">
                                    {project.links.github && (
                                        <a
                                            href={project.links.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-white transition-colors"
                                        >
                                            <Github size={20} />
                                        </a>
                                    )}
                                    {project.links.live && (
                                        <a
                                            href={project.links.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-white transition-colors"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tech.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <ul className="list-disc list-inside text-xs text-gray-500 space-y-2">
                                {project.points.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
