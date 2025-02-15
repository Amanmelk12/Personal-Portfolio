export const portfolioData = {
    about: `I’m a Software Engineering student and full-stack developer with hands-on experience building and maintaining production-ready web and mobile applications. I focus on creating scalable, user-centric systems using modern technologies like Next.js, TypeScript, Firebase, Django, and Flutter. I’ve worked on SaaS platforms, logistics systems, and real-time inventory solutions, delivering reliable software with real users and business impact.`,
    experience: [
        {
            id: 1,
            role: "Software Developer",
            period: "May 2023 – Present",
            description: [
                "Developed and maintained live production applications with active users.",
                "Built a production pharmacy inventory management system delivering real-time business analytics.",
                "Developed SaaS digital menu platforms for multiple clients.",
                "Ensured system reliability, performance optimization, and continuous support."
            ]
        }
    ],
    education: [
        {
            id: 1,
            degree: "B.Sc. in Software Engineering",
            institution: "Addis Ababa Science and Technology University",
            period: "Sep 2022 – Aug 2027",
            coursework: "Relevant coursework includes Internet Programming, Database Systems, Object-Oriented Programming (Java), Operating Systems, and Computer Architecture."
        }
    ],
    skills: {
        languages: ["JavaScript", "TypeScript", "Python", "Dart", "Go", "SQL", "C++", "Java", "PHP", "HTML", "CSS"],
        frameworks: ["Next.js", "React", "Node.js", "Flutter", "Tailwind CSS", "FastAPI", "Django"],
        tools: ["Docker", "Git & GitHub", "Postman", "VS Code", "IntelliJ", "Firebase", "PostgreSQL"]
    },
    projects: [
        {
            id: 1,
            title: "Gebeta Shipping Platform",
            description: "A shipping and logistics web platform for the Ethiopian market. Features online booking with automated tracking and algorithmic pricing.",
            techStack: ["Next.js", "Django", "PostgreSQL", "Tailwind CSS"],
            liveLink: "https://gebeta-shipping.vercel.app/",
            features: [
                "Online booking with automated tracking and algorithmic pricing.",
                "Django REST backend with JWT authentication.",
                "Responsive Next.js frontend with admin dashboard and PostgreSQL integration."
            ]
        },
        {
            id: 2,
            title: "Pharmacy Inventory Management System",
            description: "A multi-tenant SaaS pharmacy platform with offline support. Includes real-time sales tracking and batch expiry management.",
            techStack: ["Next.js", "TypeScript", "Firebase", "Firestore"],
            liveLink: "https://pharmacy-ims-v1.vercel.app/",
            features: [
                "Offline-first PWA with automatic data sync.",
                "Role-based access, real-time sales tracking, and batch expiry management.",
                "Predictive alerts, push notifications, and automated Excel reports."
            ]
        },
        {
            id: 3,
            title: "HouseView Mobile Application",
            description: "A real estate mobile app with real-time listings and booking management. Features a cross-platform Flutter app with Firebase backend.",
            techStack: ["Flutter", "Dart", "Firebase"],
            features: [
                "Cross-platform Flutter app with Firebase backend.",
                "Role-based access for seekers and sellers.",
                "Real-time property feed with image galleries and scheduling."
            ]
        }
    ],
    contact: {
        email: "bekelehanna109@gmail.com",
        phone: "+251913086343",
        github: "https://github.com/Amanmelk12",
        linkedin: "https://www.linkedin.com/in/amanuel-melkamu-5a0109355",
        location: "Addis Ababa, Ethiopia"
    }
};
