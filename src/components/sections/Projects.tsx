"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "../SectionHeading";
import { portfolioData } from "@/data/portfolio";
import { ExternalLink } from "lucide-react";

export function Projects() {
    return (
        <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900/50">
            <div className="container mx-auto px-4 md:px-6">
                <SectionHeading
                    title="Featured Projects"
                    subtitle="A selection of my recent work focusing on scalable architecture and user experience."
                />

                <div className="mt-8 md:mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
                    {portfolioData.projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white dark:bg-gray-950 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg transition-all group flex flex-col h-full"
                        >
                            <div className="p-5 md:p-6 flex-grow flex flex-col">
                                <div className="flex justify-between items-start mb-3 md:mb-4">
                                    <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors pr-4">
                                        {project.title}
                                    </h3>
                                    {project.liveLink && (
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-primary transition-colors p-1 shrink-0"
                                            aria-label="View Live Project"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                    )}
                                </div>

                                <p className="text-gray-600 dark:text-gray-400 mb-5 md:mb-6 text-xs md:text-sm leading-relaxed flex-grow">
                                    {project.description}
                                </p>

                                <div className="space-y-3 md:space-y-4 mb-5 md:mb-6">
                                    {project.features.map((feature, i) => (
                                        <div key={i} className="flex items-start text-xs md:text-sm text-gray-700 dark:text-gray-300">
                                            <span className="text-primary mr-2 mt-0.5 md:mt-1">•</span>
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-2 mt-auto pt-5 md:pt-6 border-t border-gray-100 dark:border-gray-800">
                                    {project.techStack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2 md:px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-[10px] md:text-xs font-medium rounded text-center"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
