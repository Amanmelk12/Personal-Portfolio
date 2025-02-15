"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export function Hero() {
    return (
        <section
            id="top"
            className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden"
        >
            {/* Background glow effects */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 dark:bg-primary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-3xl -z-10" />

            <div className="container mx-auto px-4 md:px-6 z-10">
                <div className="max-w-3xl flex flex-col items-start gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Available for new opportunities
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-gray-50 leading-tight"
                    >
                        Hi, I&apos;m{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600 dark:to-purple-400">
                            Amanuel
                        </span>
                        <br />
                        Full-Stack Developer.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl"
                    >
                        I build scalable, user-centric web and mobile applications using modern
                        technologies like Next.js, Django, and Flutter.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full sm:w-auto"
                    >
                        <a
                            href="#projects"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 w-full sm:w-auto"
                        >
                            View Projects
                            <ArrowRight size={18} />
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-50 font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors w-full sm:w-auto text-center"
                        >
                            Contact Me
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
