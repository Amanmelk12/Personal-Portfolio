"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "../SectionHeading";
import { portfolioData } from "@/data/portfolio";

export function Skills() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section id="skills" className="py-20">
            <div className="container mx-auto px-4 md:px-6">
                <SectionHeading
                    title="Skills & Technologies"
                    subtitle="A comprehensive list of the tools and technologies I use to build robust applications."
                />

                <div className="max-w-4xl mx-auto mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {/* Languages */}
                    <div className="bg-white dark:bg-gray-900/50 p-5 md:p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
                        <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-gray-900 dark:text-white flex items-center border-b border-gray-100 dark:border-gray-800 pb-2 md:pb-3">
                            Languages
                        </h3>
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="flex flex-wrap gap-2"
                        >
                            {portfolioData.skills.languages.map((skill) => (
                                <motion.span
                                    key={skill}
                                    variants={itemVariants}
                                    className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs md:text-sm font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-default"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </motion.div>
                    </div>

                    {/* Frameworks */}
                    <div className="bg-white dark:bg-gray-900/50 p-5 md:p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
                        <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-gray-900 dark:text-white flex items-center border-b border-gray-100 dark:border-gray-800 pb-2 md:pb-3">
                            Frameworks
                        </h3>
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="flex flex-wrap gap-2"
                        >
                            {portfolioData.skills.frameworks.map((skill) => (
                                <motion.span
                                    key={skill}
                                    variants={itemVariants}
                                    className="px-3 py-1.5 bg-primary/10 text-primary text-xs md:text-sm font-medium rounded-lg hover:bg-primary/20 transition-colors cursor-default"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </motion.div>
                    </div>

                    {/* Tools */}
                    <div className="bg-white dark:bg-gray-900/50 p-5 md:p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
                        <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-gray-900 dark:text-white flex items-center border-b border-gray-100 dark:border-gray-800 pb-2 md:pb-3">
                            Tools & Platforms
                        </h3>
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="flex flex-wrap gap-2"
                        >
                            {portfolioData.skills.tools.map((skill) => (
                                <motion.span
                                    key={skill}
                                    variants={itemVariants}
                                    className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs md:text-sm font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-default"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
