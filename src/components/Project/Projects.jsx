import { cn } from "@/lib/utils";
import { ExternalLink, Github } from "lucide-react";
import { useEffect, useRef } from "react";

const styles = `
  @keyframes moveBackground {
    0% { background-position: 0 0; }
    100% { background-position: 40px 40px; }
  }
  @keyframes pageEnter {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .animate-pageEnter {
    animation: pageEnter 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
  }
  @keyframes projectCardEnter {
    0% {
      opacity: 0;
      transform: translateY(30px) scale(0.95);
    }
    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
  .project-card-enter {
    animation: projectCardEnter 0.6s ease-out both;
    transform-origin: center;
  }
`;

// ✅ Reusable ProjectCard Component
function ProjectCard({ project, cardRef }) {
  const isTypeSprint = project.title === "TypeSprint";
  const isPythonCompiler = project.title === "Online Python Compiler";

  return (
    <div
      ref={cardRef}
      className="rounded-lg bg-white dark:bg-neutral-900 text-black dark:text-white overflow-hidden shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105 opacity-0 translate-y-8"
      style={{ height: "auto", minHeight: "380px", width: "100%" }}
    >
      {isTypeSprint ? (
        <div className="relative w-full h-[200px] sm:h-[220px] overflow-hidden rounded-t-lg">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-contain rounded-t-lg transition-transform duration-300 hover:scale-105"
          />
        </div>
      ) : (
        <img
          src={project.image}
          alt={project.title}
          className={`${
            isPythonCompiler
              ? "h-[200px] sm:h-[220px] w-[90%] mx-auto object-cover"
              : "h-[200px] sm:h-[220px] w-full object-cover"
          } rounded-t-lg transition-transform duration-300 hover:scale-105`}
        />
      )}

      <div
        className="rounded-b-lg backdrop-blur-md bg-white/20 dark:bg-white/10 border-t border-white/30 dark:border-white/10 hover:bg-white/30 dark:hover:bg-white/20 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
        style={{ WebkitBackdropFilter: "blur(10px)", backdropFilter: "blur(10px)" }}
      >
        <div
          className="px-4 sm:px-6 py-4 flex flex-col justify-between min-h-[180px]"
          style={{
            WebkitBackdropFilter: "blur(10px)",
            backdropFilter: "blur(10px)",
          }}
        >
          <h3 className="text-base sm:text-lg font-bold text-white drop-shadow-[0_1px_1px_rgba(255,255,255,0.3)]">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm mt-2 text-white drop-shadow-[0_1px_1px_rgba(255,255,255,0.2)] line-clamp-3">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1 sm:gap-2 mt-3">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 text-[10px] sm:text-xs bg-gray-200 dark:bg-neutral-700 hover:bg-gray-400 rounded"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-2 sm:gap-4 mt-4">
            <a
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 h-[32px] sm:h-[36px] rounded-lg text-[10px] sm:text-xs text-black dark:text-white bg-black/10 dark:bg-white/10 border border-black/10 dark:border-white/20 shadow-md hover:scale-105 hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Github className="w-3 h-3 sm:w-4 sm:h-4" /> Code
            </a>
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 h-[32px] sm:h-[36px] rounded-lg text-[10px] sm:text-xs text-black dark:text-white bg-black/10 dark:bg-white/10 border border-black/10 dark:border-white/20 shadow-md hover:scale-105 hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" /> Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const projects = [
    {
      image: "/Task-manager.png",
      title: "Task Manager",
      description:
        "A full-stack task manager with built-in credit/debit tracking, authentication, and dynamic balance updates using Node.js and MongoDB.",
      technologies: ["React.js", "TailwindCSS", "MongoDB", "Node.js"],
      codeLink: "https://github.com/Anil-sai0418/Task-manager",
      liveLink: "https://task-manager-anil.vercel.app/",
    },
    {
      image: "/Typesprint.png",
      title: "TypeSprint",
      description:
        "A typing speed test app with real-time feedback, leaderboards, and customizable themes built using Next.js and MongoDB.",
      technologies: ["Next.js", "TailwindCSS", "MongoDB", "React"],
      codeLink: "https://github.com/Anil-sai0418/Monkey-Type",
      liveLink: "https://monkey-type-anil.vercel.app/",
    },
    {
      image: "/NUtrify.png",
      title: "Notes App",
      description:
        "A lightweight notes app that allows users to create, edit, and delete notes easily with a clean and responsive interface.",
      technologies: ["React", "TailwindCSS","LocalStorage"],
      codeLink: "https://github.com/Anil-sai0418/online-notes",
      liveLink: "https://online-notes-five.vercel.app/",
    },
    {
      image: "/Pyhononlinecomplier.png",
      title: "Online Python Compiler",
      description:
        "An online Python compiler with a real-time editor and support for multiple Python versions using Next.js.",
      technologies: ["Next.js", "TailwindCSS", "MongoDB", "React"],
      codeLink: "https://github.com/Anil-sai0418/Online-Python-Compiler",
      liveLink: "https://python-compiler-anil.vercel.app/",
    },
    {
      image: "/Resume.webp",
      title: "ATS Checker",
      description:
        "A resume optimization tool that analyzes resumes for ATS compatibility and provides keyword improvement tips.",
      technologies: ["Next.js", "TailwindCSS", "MongoDB", "React"],
      codeLink: "https://github.com/Anil-sai0418/ATS-Checker",
      liveLink: "https://ats-checker-anil.vercel.app/",
    },
    {
      image: "/Phone-book.png",
      title: "Phone Book",
      description:
        "A contact management app with search, add, and delete features, designed with Apple's glass UI aesthetics.",
      technologies: ["React", "Node.js", "MongoDB", "TailwindCSS"],
      codeLink: "https://github.com/Anil-sai0418/Anil-s-phone-book",
      liveLink: "https://anil-s-phone-book.vercel.app/",
    },
  ];

  const cardRefs = projects.map(() => useRef(null));
  const delays = [0, 0.15, 0.3, 0.45, 0.6, 0.75];

  useEffect(() => {
    if (typeof window === "undefined") return;
    const observers = [];

    cardRefs.forEach((ref, idx) => {
      if (!ref.current) return;
      const observer = new window.IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("project-card-enter");
              entry.target.classList.remove("opacity-0", "translate-y-8");
              entry.target.style.animationDelay = `${delays[idx]}s`;
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );
      observer.observe(ref.current);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  return (
    <div className="animate-pageEnter">
      <div id="projects" className="relative flex flex-col items-center py-8 sm:py-12 bg-white dark:bg-black">
        <style>{styles}</style>

        {/* Header */}
        <div className="relative flex flex-col items-center text-center z-10 px-4 pt-12 sm:pt-20">
          <p className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold hover:scale-105 transition">
            Projects
          </p>
          <p className="text-gray-300 text-xs sm:text-sm mt-2 font-bold hover:scale-105 transition max-w-md">
            Showcasing my passion for innovation through creative and impactful projects
          </p>
        </div>

        {/* Background Grid */}
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:20px_20px] sm:[background-size:30px_30px] lg:[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
          )}
          style={{ animation: "moveBackground 10s linear infinite" }}
        />
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-[400px] sm:h-[500px] lg:h-[600px] bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black z-0" />

        {/* Project Cards */}
        <div className="mt-8 sm:mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-[90%] sm:w-[85%] lg:w-[80%] max-w-6xl px-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} cardRef={cardRefs[index]} />
          ))}
        </div>
      </div>
    </div>
  );
}