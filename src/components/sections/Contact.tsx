"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "../SectionHeading";
import { portfolioData } from "@/data/portfolio";
import { Mail, MapPin, Github, Linkedin, Phone } from "lucide-react";
import { useState } from "react";

export function Contact() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("submitting");

        try {
            const response = await fetch("https://formspree.io/f/mykdagaz", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
                setTimeout(() => setStatus("idle"), 3000);
            } else {
                setStatus("error");
                setTimeout(() => setStatus("idle"), 3000);
            }
        } catch (error) {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 3000);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <section id="contact" className="py-20">
            <div className="container mx-auto px-4 md:px-6">
                <SectionHeading
                    title="Get In Touch"
                    subtitle="I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions."
                />

                <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="h-full flex flex-col"
                    >
                        <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                            Let&apos;s talk about everything!
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                            Don&apos;t like forms? Send me an email. 👋
                        </p>

                        <div className="space-y-6">
                            <a
                                href={`mailto:${portfolioData.contact.email}`}
                                className="flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors group"
                            >
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-500 font-medium">Email Me</p>
                                    <p className="font-medium">{portfolioData.contact.email}</p>
                                </div>
                            </a>

                            <a
                                href={`tel:${portfolioData.contact.phone.replace(/\s+/g, '')}`}
                                className="flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors group"
                            >
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-500 font-medium">Call Me</p>
                                    <p className="font-medium">{portfolioData.contact.phone}</p>
                                </div>
                            </a>

                            <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-500 font-medium">Location</p>
                                    <p className="font-medium">{portfolioData.contact.location}</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6 mt-auto border-t border-gray-100 dark:border-gray-800 flex gap-4">
                            <a
                                href={portfolioData.contact.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white transition-colors"
                                aria-label="GitHub Profile"
                            >
                                <Github size={20} />
                            </a>
                            <a
                                href={portfolioData.contact.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white transition-colors"
                                aria-label="LinkedIn Profile"
                            >
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-white dark:bg-gray-950 p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 h-full flex flex-col"
                    >
                        <form className="space-y-4 h-full flex flex-col" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow text-gray-900 dark:text-white"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow text-gray-900 dark:text-white"
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>
                            <div className="flex-grow flex flex-col">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full h-full min-h-[80px] px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow text-gray-900 dark:text-white resize-none"
                                    placeholder="How can I help you?"
                                    required
                                ></textarea>
                            </div>

                            {status === "error" && (
                                <p className="text-red-500 text-sm mt-2 text-center">
                                    Failed to send message. Please try again.
                                </p>
                            )}

                            <button
                                type="submit"
                                disabled={status === "submitting"}
                                className="w-full py-3 px-6 rounded-xl bg-primary text-white font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {status === "submitting" ? "Sending..." : status === "success" ? "Message Sent!" : "Send Message"}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
