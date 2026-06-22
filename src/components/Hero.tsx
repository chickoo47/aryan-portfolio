"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { ArrowDown, Download } from "lucide-react";
import Image from "next/image";

const Hero = () => {
    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden pt-20">
            <div className="z-10 max-w-4xl flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 relative"
                >
                    <div className="w-32 h-32 md:w-40 md:h-40 relative rounded-full overflow-hidden border-4 border-primary/50 shadow-[0_0_30px_rgba(0,240,255,0.3)]">
                        <Image
                            src={resumeData.avatarUrl}
                            alt={resumeData.name}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div className="absolute -inset-4 rounded-full border border-primary/20 animate-spin-slow" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h2 className="text-sm md:text-lg font-mono text-primary mb-4 tracking-widest uppercase">
                        {resumeData.role}
                    </h2>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-5xl md:text-8xl font-bold mb-6 tracking-tighter"
                >
                    {resumeData.name}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10"
                >
                    {resumeData.about}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="flex flex-wrap gap-4 justify-center"
                >
                    <a href="#projects" className="px-8 py-3 rounded-full bg-primary/10 border border-primary/50 text-primary hover:bg-primary/20 transition-all backdrop-blur-sm">
                        View Work
                    </a>
                    <a href="#contact" className="px-8 py-3 rounded-full bg-glass-bg border border-glass-border hover:bg-white/10 transition-all backdrop-blur-sm">
                        Contact Me
                    </a>
                    <a
                        href="/resume.pdf"
                        download
                        className="px-8 py-3 rounded-full bg-secondary/10 border border-secondary/50 text-secondary hover:bg-secondary/20 transition-all backdrop-blur-sm flex items-center gap-2"
                    >
                        <Download size={18} />
                        Resume
                    </a>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
            >
                <ArrowDown className="text-gray-500" />
            </motion.div>
        </section>
    );
};

export default Hero;
