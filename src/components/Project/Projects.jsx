import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';
import { ArrowRight, ExternalLink, Github, Layers, Zap, Code2, Box, Cpu, Link, Notebook, Languages, Contact, IndianRupee, Phone, ClipboardPenLine, CaseSensitive, SquareArrowDownLeftIcon, SquareArrowOutUpLeft, SquareArrowOutUpRight } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for cleaner tailwind classes
function cn(...inputs) {
    return twMerge(clsx(inputs));
}



// --- Mock Data ---

const PROJECTS = [
    {
        id: 1,
        title: "Task Manager",
        category: "Fintech Dashboard",
        description: "A full‑stack task and transaction manager that tracks credits, debits, and balances per task with secure authentication and a clean, responsive dashboard.",
        image: "/Task-manager.png",
        tags: ["React.js", "seo-optimized", "WebSockets", "Graph.js"],
        link: "https://task-manager-anil.vercel.app/",
        github: "https://github.com/Anil-sai0418/Task-manager",
        icon: <IndianRupee className="w-6 h-6" />,
    },
    {
        id: 2,
        title: "TypeVex",
        category: "Typing Platform",
        description: "A modern typing practice platform focused on speed and accuracy, featuring real‑time statistics, contribution‑style activity tracking, and a smooth, distraction‑free UI.",
        image: "/Typesprint.png",
        tags: ["React.js", "Express", "O-Auth", "Graph.js"],
        link: "http://typevex.vercel.app/",
        github: "https://github.com/Anil-sai0418/TypeSprint",
        icon: <CaseSensitive className="w-6 h-6" />,
    },
    {
        id: 3,
        title: "Scrybyx Notes",
        category: "AI Infrastructure",
        description: "A smart note‑taking application designed for productivity, allowing users to create, organize, and manage notes with a fast, minimal, and intuitive interface.",
        image: "/Scrybyx.png",
        tags: ["React.js", "tailwindcss", "Three.js","localstorage" ],
        link: "https://scribyx-notes.vercel.app/",
        github: "https://github.com/Anil-sai0418/online-notes",
        icon: <ClipboardPenLine className="w-6 h-6" />,
    },
    {
        id: 4,
        title: "Voxvera",
        category: "Notes Application",
        description: "A sleek and lightweight notes application built for everyday use, offering structured note organization, quick access, and a visually clean user experience.",
        image: "/Voxvera.png",
        tags: ["React.js", "GT-api", "Seo-optimized", "multi-language support"],
        link: "https://voxvera.vercel.app/",
        github: "https://github.com/Anil-sai0418/VoxVera",
        icon: <Languages className="w-6 h-6" />,
    },
    {
        id: 5,
        title: "Phone Book",
        category: "Security Suite",
        description: "A secure phone book application to store and manage contacts with essential details like name, phone number, and email, built with simplicity and reliability in mind.",
        image: "/Phone-book.png",
        tags: ["React.js", "Node.js", "MongoDB", "GlassUI"],
        link: "https://anil-s-phone-book.vercel.app/",
        github: "https://github.com/Anil-sai0418/Anil-s-phone-book",
        icon: <Phone className="w-6 h-6" />,
    },
    {
        id: 6,
        title: "Ethereal Flow",
        category: "Creative Tool",
        description: "Browser-based 3D modeling tool for architects and game designers with real-time collaboration.",
        image: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2670&auto=format&fit=crop",
        tags: ["WebAssembly", "C++", "WebGL", "Firebase"],
        link: "#",
        github: "https://github.com/username/ethereal-flow",
        icon: <ExternalLink className="w-6 h-6" />,
    },
];

// --- Components ---

const MagneticButton = ({ children, className }) => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        x.set((clientX - centerX) * 0.3);
        y.set((clientY - centerY) * 0.3);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.button
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x, y }}
            className={cn(
                "relative overflow-hidden group rounded-full px-8 py-4 font-medium transition-colors",
                className
            )}
        >
            <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-colors duration-300" />
            <div className="relative flex items-center gap-2">
                {children}
            </div>
        </motion.button>
    );
};

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1.0] }}
            whileHover={{ y: -10, transition: { duration: 0.4, ease: "easeOut" } }}
            className="flex-shrink-0 w-[85vw] md:w-[600px] lg:w-[700px] h-[70vh] md:h-[600px] relative group rounded-3xl overflow-hidden bg-[#111] border border-white/5 shadow-2xl"
        >
            {/* Background Image with Zoom Effect */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full h-full"
                >
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                    />
                </motion.div>
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="absolute inset-0 p-6 md:p-12 flex flex-col justify-end">
                <div className="mb-4">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs font-medium text-white/80 mb-4">
                        {project.icon}
                        {project.category}
                    </span>
                </div>

                <h3 className="text-3xl md:text-5xl font-bold text-white mb-2 md:mb-4 tracking-tight leading-tight">
                    {project.title}
                </h3>

                <p className="text-white/60 text-base md:text-lg mb-6 md:mb-8 max-w-md leading-relaxed hidden sm:block">
                    {project.description}
                </p>
                <p className="text-white/60 text-sm mb-6 max-w-md leading-relaxed block sm:hidden">
                    {project.description.substring(0, 100)}...
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 rounded-full border border-white/10 bg-black/20 text-xs text-white/70 backdrop-blur-sm"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center justify-center px-6 py-3 pr-10 rounded-full border border-white/20 bg-transparent text-white text-sm font-medium overflow-hidden transition-all duration-300 hover:border-white/60 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]"
                    >
                        <span className="transition-all duration-300 group-hover:-translate-x-1">
                            Live Project
                        </span>
                        <SquareArrowOutUpRight className="absolute right-4 w-4 h-4 opacity-0 scale-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100" />
                    </a>

                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center justify-center px-6 py-3 pr-10 rounded-full border border-white/20 bg-transparent text-white text-sm font-medium overflow-hidden transition-all duration-300 hover:border-white/60 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]"
                    >
                        <span className="transition-all duration-300 group-hover:-translate-x-1">
                            GitHub Repo
                        </span>
                        <Github className="absolute right-4 w-4 h-4 opacity-0 scale-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100" />
                    </a>
                </div>
            </div>

            {/* Index Number */}
            <div className="absolute top-8 right-8 text-8xl font-bold text-white/5 select-none pointer-events-none">
                0{index + 1}
            </div>
        </motion.div>
    );
};

const CursorGradient = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth out the movement
    const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    const background = useMotionTemplate`radial-gradient(600px circle at ${smoothX}px ${smoothY}px, rgba(255,255,255,0.06), transparent 40%)`;

    return (
        <motion.div
            className="pointer-events-none fixed inset-0 z-0"
            style={{ background }}
        />
    );
};

export default function ProjectShowcase() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Map scroll progress to horizontal translation
    // We have 6 cards. Each card is roughly 700px + gap.
    // Total width needed: 6 * 700 + 5 * 32 (gap) = 4200 + 160 = 4360px
    // Viewport width: 100vw
    // Total scroll distance needed: 4360px - 100vw

    // Using a simpler approach for responsiveness: 
    // We calculate the translation based on the total scroll width vs viewport width.
    // However, for a fixed layout, we can approximate.

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

    return (
        <div id="projects" className="bg-[#050505] min-h-screen text-white selection:bg-white/20 font-sans">
            <CursorGradient />

            {/* Hero Section */}
            <section className="h-screen flex flex-col justify-center items-center relative px-6">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-20" />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-center z-10 max-w-4xl"
                >
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
                        Selected Works
                    </h1>
                    <p className="text-xl md:text-2xl text-white/40 font-light max-w-2xl mx-auto leading-relaxed">
                        Real-world apps built with clean design, strong performance, and practical functionality.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <span className="text-xs uppercase tracking-widest text-white/30">Scroll to Explore</span>
                    <div className="w-[1px] h-16 bg-gradient-to-b from-white/30 to-transparent" />
                </motion.div>
            </section>

            {/* Horizontal Scroll Section */}
            <div ref={containerRef} className="relative h-[300vh]">
                <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                    <motion.div
                        style={{ x }}
                        className="flex gap-4 sm:gap-8 px-4 sm:px-16 lg:px-24"
                    >
                        {PROJECTS.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        ))}

                        {/* End Card */}
                        <div className="flex-shrink-0 w-[50vw] md:w-[400px] h-[70vh] md:h-[600px] flex items-center justify-center">
                            <div className="text-center">
                                <h3 className="text-3xl font-bold mb-4">Want to see more?</h3>
                                <MagneticButton className="bg-white text-black">
                                    View All Projects
                                </MagneticButton>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>


        </div>
    );
}