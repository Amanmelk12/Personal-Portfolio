"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "../SectionHeading";
import { portfolioData } from "@/data/portfolio";

export function About() {
    return (
        <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900/50">
            <div className="container mx-auto px-4 md:px-6">
                <SectionHeading
                    title="About Me"
                    subtitle="Get to know a bit more about my background and my journey so far."
                />

                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-white dark:bg-gray-950 rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100 dark:border-gray-800"
                    >
                        <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 leading-relaxed">
                            <p>{portfolioData.about}</p>
                        </div>

                        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 border-t border-gray-100 dark:border-gray-800 pt-10">
                            <div className="flex flex-col items-center justify-center gap-1 md:gap-2 text-center">
                                <span className="text-3xl md:text-4xl font-bold text-primary">2+</span>
                                <span className="text-xs md:text-sm font-medium text-gray-500 dark:text-gray-400">
                                    Years Experience
                                </span>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-1 md:gap-2 text-center">
                                <span className="text-3xl md:text-4xl font-bold text-primary">10+</span>
                                <span className="text-xs md:text-sm font-medium text-gray-500 dark:text-gray-400">
                                    Projects Completed
                                </span>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-1 md:gap-2 text-center">
                                <span className="text-3xl md:text-4xl font-bold text-primary">5+</span>
                                <span className="text-xs md:text-sm font-medium text-gray-500 dark:text-gray-400">
                                    Happy Clients
                                </span>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-1 md:gap-2 text-center">
                                <span className="text-3xl md:text-4xl font-bold text-primary">∞</span>
                                <span className="text-xs md:text-sm font-medium text-gray-500 dark:text-gray-400">
                                    Lines of Code
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
