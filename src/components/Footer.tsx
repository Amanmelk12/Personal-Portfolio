import { portfolioData } from "@/data/portfolio";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-gray-50 dark:bg-gray-950 py-8 border-t border-gray-200 dark:border-gray-800">
            <div className="container mx-auto px-4 flex justify-center items-center text-center">
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                    © 2026 Amanuel Melkamu. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
