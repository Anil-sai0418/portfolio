import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';
import { Github, IndianRupee, CaseSensitive, ClipboardPenLine, Languages, Phone, ExternalLink, SquareArrowOutUpRight } from 'lucide-react';

// ─── Data ────────────────────────────────────────────────────────────────────

const PROJECTS = [
    {
        id: 1, title: "Task Manager", category: "Fintech Dashboard",
        description: "A full‑stack task and transaction manager that tracks credits, debits, and balances per task with secure authentication and a clean, responsive dashboard.",
        image: "/Task-manager.png",
        tags: ["React.js", "seo-optimized", "WebSockets", "Graph.js"],
        link: "https://task-manager-anil.vercel.app/",
        github: "https://github.com/Anil-sai0418/Task-manager",
        icon: <IndianRupee className="w-5 h-5" />,
    },
    {
        id: 2, title: "TypeVex", category: "Typing Platform",
        description: "A modern typing practice platform focused on speed and accuracy, featuring real‑time statistics, contribution‑style activity tracking, and a smooth, distraction‑free UI.",
        image: "/Typesprint.png",
        tags: ["React.js", "Express", "O-Auth", "Graph.js"],
        link: "https://typevex.vercel.app/",
        github: "https://github.com/Anil-sai0418/TypeSprint",
        icon: <CaseSensitive className="w-5 h-5" />,
    },
    {
        id: 3, title: "Scrybyx Notes", category: "Notes Application",
        description: "A smart note‑taking application designed for productivity, allowing users to create, organize, and manage notes with a fast, minimal, and intuitive interface.",
        image: "/Scrybyx.png",
        tags: ["React.js", "tailwindcss", "Three.js", "localstorage"],
        link: "https://scribyx-notes.vercel.app/",
        github: "https://github.com/Anil-sai0418/online-notes",
        icon: <ClipboardPenLine className="w-5 h-5" />,
    },
    {
        id: 4, title: "Voxvera", category: "Language Translator",
        description: "A sleek and lightweight language translator with structured note organization, quick access, and a visually clean user experience.",
        image: "/Voxvera.png",
        tags: ["React.js", "GT-api", "Seo-optimized", "multi-language support"],
        link: "https://voxvera.vercel.app/",
        github: "https://github.com/Anil-sai0418/VoxVera",
        icon: <Languages className="w-5 h-5" />,
    },
    {
        id: 5, title: "Phone Book", category: "Contact App",
        description: "A secure phone book application to store and manage contacts with essential details like name, phone number, and email, built with simplicity and reliability in mind.",
        image: "/Phone-book.png",
        tags: ["React.js", "Node.js", "MongoDB", "GlassUI"],
        link: "https://anil-s-phone-book.vercel.app/",
        github: "https://github.com/Anil-sai0418/Anil-s-phone-book",
        icon: <Phone className="w-5 h-5" />,
    },
    {
        id: 6, title: "Vextron", category: "Chatbot",
        description: "Browser-based 3D modeling tool for architects and game designers with real-time collaboration.",
        image: "/Vex.png",
        tags: ["WebAssembly", "C++", "WebGL", "Firebase"],
        link: "https://vextronai.vercel.app/",
        github: "https://github.com/sandeep9349/chat-bot",
        icon: <ExternalLink className="w-5 h-5" />,
    },
];

// ─── Parallax Title ───────────────────────────────────────────────────────────

const LINE_1 = ["P", "R", "O", "J", "E", "C", "T", "S"];

function getParallaxFactor(index, total) {
    const center = (total - 1) / 2;
    const dist = Math.abs(index - center);
    return 0.3 + (dist / center) * 1.4;
}

function ParallaxLine({ letters, progress }) {
    const total = letters.length;
    return (
        <div className="flex items-end justify-center w-full select-none">
            {letters.map((letter, i) => {
                const factor = getParallaxFactor(i, total);
                const slowProgress = Math.pow(progress, 1.5);
                const maxOffset = factor * 700;
                const translateY = maxOffset * (1 - slowProgress);
                const minOpacity = 0.15 + (1 - factor / 1.7) * 0.35;
                const opacity = minOpacity + (1 - minOpacity) * slowProgress;

                return (
                    <span
                        key={i}
                        className="inline-block font-black leading-none tracking-tight text-[clamp(40px,8vw,120px)] bg-[linear-gradient(to_bottom,#f5f5f5_0%,#d1d5db_30%,#374151_100%)] bg-clip-text text-transparent"
                        style={{
                            opacity,
                            transform: `translateY(${translateY}px)`,
                            transition: "transform 0.35s cubic-bezier(0.22,1,0.36,1), opacity 0.35s ease-out",
                            willChange: "transform, opacity",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        {letter}
                    </span>
                );
            })}
        </div>
    );
}

function ParallaxTitle() {
    const sectionRef = useRef(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const el = sectionRef.current;
            if (!el) return;
            const rect = el.getBoundingClientRect();
            const windowH = window.innerHeight;
            const start = windowH;
            const end = windowH * 0.5;
            const p = Math.min(1, Math.max(0, (start - rect.top) / (start - end)));
            setProgress(p);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            ref={sectionRef}
            className="h-[40vh] pt-16 bg-[#050505]  flex flex-col items-center justify-center overflow-hidden relative gap-2"
        >
            <ParallaxLine letters={LINE_1} progress={progress} />

            <div className="mt-6 text-white/30 text-sm sm:text-base tracking-[0.25em] uppercase font-light text-center px-4">
                Real-world apps built with clean design &amp; strong performance
            </div>
        </div>
    );
}

// ─── Cursor Gradient ──────────────────────────────────────────────────────────

function CursorGradient() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    useEffect(() => {
        const fn = (e) => { mouseX.set(e.clientX); mouseY.set(e.clientY); };
        window.addEventListener("mousemove", fn);
        return () => window.removeEventListener("mousemove", fn);
    }, [mouseX, mouseY]);

    const background = useMotionTemplate`radial-gradient(600px circle at ${smoothX}px ${smoothY}px, rgba(255,255,255,0.06), transparent 40%)`;
    return <motion.div className="pointer-events-none fixed inset-0 z-0" style={{ background }} />;
}

// ─── Project Card ─────────────────────────────────────────────────────────────

function ProjectCard({ project, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1.0] }}
            className={`flex-shrink-0 w-[90vw] sm:w-[85vw] md:w-[600px] lg:w-[700px] h-[60vh] sm:h-[70vh] md:h-[600px] relative group rounded-2xl sm:rounded-3xl overflow-hidden border-2 shadow-2xl transition-transform duration-300 sm:hover:-translate-y-2 ${project.id === 3 ? 'bg-white border-white' : 'bg-[#111] border-white/10'}`}
        >
            {/* Background Image */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="w-full h-full transform transition-transform duration-500 lg:group-hover:scale-105">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent pointer-events-none opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Hover Content */}
            <div className="absolute inset-0 p-4 sm:p-6 md:p-12 flex flex-col justify-end pointer-events-auto lg:pointer-events-none lg:group-hover:pointer-events-auto opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs font-medium text-white/80 mb-3 w-fit">
                    {project.icon} {project.category}
                </span>

                <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-2 md:mb-4 tracking-tight leading-tight">
                    {project.title}
                </h3>

                <p className="text-white/60 text-sm md:text-base mb-4 sm:mb-6 max-w-md leading-relaxed hidden sm:block">
                    {project.description}
                </p>
                <p className="text-white/60 text-xs mb-4 max-w-md leading-relaxed sm:hidden">
                    {project.description.substring(0, 80)}...
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                        <span key={tag} className="px-2 sm:px-3 py-1 rounded-full border border-white/10 bg-black/20 text-xs text-white/70 backdrop-blur-sm">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex gap-2 sm:gap-4">
                    {[
                        { href: project.link, label: "Live Project", icon: <SquareArrowOutUpRight className="w-3 sm:w-4 h-3 sm:h-4 shrink-0" /> },
                        { href: project.github, label: "GitHub Repo", icon: <Github className="w-3 sm:w-4 h-3 sm:h-4 shrink-0" /> },
                    ].map(({ href, label, icon }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/link flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-white/20 bg-transparent text-white text-xs sm:text-sm font-medium transition-all duration-300 hover:border-white/60 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] pointer-events-auto"
                        >
                            <span>{label}</span>
                            <span className="flex items-center overflow-hidden transition-all duration-300 w-3 sm:w-4 ml-2 lg:w-0 lg:ml-0 lg:group-hover/link:w-4 lg:group-hover/link:ml-2 lg:opacity-0 lg:group-hover/link:opacity-100">
                                {icon}
                            </span>
                        </a>
                    ))}
                </div>
            </div>

            {/* Index watermark */}
            <div className="absolute top-8 right-8 text-8xl font-bold text-white/5 select-none pointer-events-none">
                0{index + 1}
            </div>
        </motion.div>
    );
}

// ─── Magnetic Button ──────────────────────────────────────────────────────────

function MagneticButton({ children, className }) {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        x.set((e.clientX - left - width / 2) * 0.3);
        y.set((e.clientY - top - height / 2) * 0.3);
    };

    return (
        <motion.button
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => { x.set(0); y.set(0); }}
            style={{ x, y }}
            className={`relative overflow-hidden group rounded-full px-8 py-4 font-medium transition-colors ${className}`}
        >
            <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-colors duration-300" />
            <div className="relative flex items-center gap-2">{children}</div>
        </motion.button>
    );
}

// ─── Horizontal Scroll ────────────────────────────────────────────────────────

function ProjectScroll() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    if (isMobile) {
        return (
            <div className="flex flex-col gap-8 px-4 py-8 bg-[#050505] items-center">
                {PROJECTS.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </div>
        );
    }

    return (
        <div ref={containerRef} className="relative h-[300vh] bg-[#050505]">
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-4 mt-15 sm:gap-8 px-4 sm:px-16 lg:px-24">
                    {PROJECTS.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                    {/* End card */}
                    <div className="flex-shrink-0 w-[90vw] sm:w-[85vw] md:w-[400px] h-[60vh] sm:h-[70vh] md:h-[600px] flex items-center justify-center">
                        <div className="text-center px-4">
                            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Want to see more?</h3>
                            <a href="https://github.com/Anil-sai0418?tab=repositories" target="_blank" rel="noopener noreferrer">
                                <MagneticButton className="bg-white text-black text-xs sm:text-base">
                                    View All Projects
                                </MagneticButton>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

// ─── Root Export ──────────────────────────────────────────────────────────────

export default function ProjectShowcase() {
    return (
        <div id="projects" className="bg-[#050505] text-white font-sans selection:bg-white/20">
            <CursorGradient />

            {/* Parallax title section — scrolling into it assembles the letters */}
            <ParallaxTitle />

            {/* Horizontal scroll cards */}
            <ProjectScroll />
        </div>
    );
}