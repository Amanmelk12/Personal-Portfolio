"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "../SectionHeading";
import { portfolioData } from "@/data/portfolio";

export function Experience() {
    return (
        <section id="experience" className="py-20">
            <div className="container mx-auto px-4 md:px-6">
                <SectionHeading
                    title="Professional Experience"
                    subtitle="A look at my professional journey and the impact I've made."
                />

                <div className="max-w-3xl mx-auto mt-12">
                    {portfolioData.experience.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-8 md:pl-0"
                        >
                            <div className="md:flex gap-8 mb-12 relative">
                                {/* Timeline line */}
                                <div className="hidden md:block w-[2px] bg-gray-200 dark:bg-gray-800 absolute top-0 bottom-0 left-1/3 -ml-[1px]" />

                                {/* Timeline dot */}
                                <div className="absolute left-[-36px] md:left-1/3 md:-ml-[6px] top-2 w-3 h-3 rounded-full bg-primary border-4 border-white dark:border-gray-950 z-10 box-content" />

                                <div className="md:w-1/3 mb-4 md:mb-0 md:text-right md:pr-12 pt-1">
                                    <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs md:text-sm font-medium rounded-full">
                                        {exp.period}
                                    </span>
                                </div>

                                <div className="md:w-2/3 md:pl-12 bg-white dark:bg-gray-900/50 p-5 md:p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
                                    <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4">
                                        {exp.role}
                                    </h3>
                                    <ul className="space-y-2 md:space-y-3">
                                        {exp.description.map((item, i) => (
                                            <li key={i} className="flex items-start text-gray-600 dark:text-gray-400">
                                                <span className="text-primary mr-2 mt-1.5">•</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
