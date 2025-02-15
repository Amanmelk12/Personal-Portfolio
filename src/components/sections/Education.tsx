"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "../SectionHeading";
import { portfolioData } from "@/data/portfolio";
import { GraduationCap } from "lucide-react";

export function Education() {
    return (
        <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900/50">
            <div className="container mx-auto px-4 md:px-6">
                <SectionHeading
                    title="Education"
                    subtitle="My academic background and qualifications."
                />

                <div className="max-w-3xl mx-auto mt-12">
                    {portfolioData.education.map((edu, index) => (
                        <motion.div
                            key={edu.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white dark:bg-gray-950 p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 flex gap-6"
                        >
                            <div className="hidden sm:flex items-start justify-center pt-2 shrink-0">
                                <div className="p-3 md:p-4 bg-primary/10 rounded-full text-primary">
                                    <GraduationCap size={28} className="md:w-8 md:h-8" />
                                </div>
                            </div>

                            <div className="flex-grow">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 md:mb-3 gap-2">
                                    <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                                        {edu.degree}
                                    </h3>
                                    <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs md:text-sm font-medium rounded-full shrink-0 w-fit">
                                        {edu.period}
                                    </span>
                                </div>

                                <p className="text-primary font-medium mb-3 md:mb-4 text-sm md:text-base">{edu.institution}</p>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {edu.coursework}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
