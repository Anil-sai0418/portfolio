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

export default function Projects() {
  // Refs for project cards
  const cardRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
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
              // Add animation class and remove initial hidden classes
              entry.target.classList.add("project-card-enter");
              entry.target.classList.remove("opacity-0", "translate-y-8");
              // Set animationDelay for stagger effect
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
    // Cleanup
    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className="animate-pageEnter">
      <div id="projects" className="relative flex w-full flex-col items-center justify-start py-8 sm:py-12 bg-white dark:bg-black">
        <style>{styles}</style>
        <div className="relative flex flex-col items-center justify-center text-center z-10 px-4 pt-12 sm:pt-20">
          <p className="text-white text-2xl sm:text-3xl lg:text-4xl transition duration-300 hover:text-white hover:scale-105 cursor-default font-bold">
            Projects
          </p>
          <p className="text-gray-300 text-xs sm:text-sm mt-2 transition duration-300 hover:text-white hover:scale-105 cursor-default font-bold max-w-md mx-auto">
            Showcasing my passion for innovation through creative and impactful projects
          </p>
        </div>
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:20px_20px] sm:[background-size:30px_30px] lg:[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
          )}
          style={{
            animation: "moveBackground 10s linear infinite",
          }}
        />
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-[400px] sm:h-[500px] lg:h-[600px] bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black z-0" />
        <div className="mt-8 sm:mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 w-[90%] sm:w-[85%] lg:w-[80%] h-auto max-w-6xl z-0 px-2 sm:px-0">
          {/* Card 0 */}
          <div
            ref={cardRefs[0]}
            className="rounded-lg bg-white dark:bg-neutral-900 text-black dark:text-white overflow-hidden shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105 opacity-0 translate-y-8"
            style={{ height: "auto", minHeight: "380px", width: "100%" }}
          >
          <img
            src="/Task-manager.png"
            alt="Task Manager"
            className="h-[200px] sm:h-[220px] w-full object-cover rounded-t-lg transition-transform duration-300 hover:scale-105"
          />
          <div className="rounded-b-lg backdrop-blur-md bg-white/20 dark:bg-white/10 border-t border-white/30 dark:border-white/10 hover:bg-white/30 dark:hover:bg-white/20 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]" style={{ WebkitBackdropFilter: "blur(10px)", backdropFilter: "blur(10px)" }}>
            <div
              className="px-4 sm:px-6 py-4 flex flex-col justify-between min-h-[180px] rounded-b-lg backdrop-blur-md bg-white/20 dark:bg-white/10 border-t border-white/30 dark:border-white/10"
              style={{
                WebkitBackdropFilter: "blur(10px)",
                backdropFilter: "blur(10px)",
              }}
            >
              <h3 className="text-base sm:text-lg font-bold text-white dark:text-white drop-shadow-[0_1px_1px_rgba(255,255,255,0.3)]">
                Task Manager
              </h3>
              <p className="text-xs sm:text-sm mt-2 text-white dark:text-white drop-shadow-[0_1px_1px_rgba(255,255,255,0.2)] line-clamp-3">
                A full-stack task manager with built-in credit/debit tracking, authentication, and dynamic balance updates using Node.js and MongoDB.
              </p>
              <div className="flex flex-wrap gap-1 sm:gap-2 mt-3">
                <span className="px-2 py-1 text-[10px] sm:text-xs bg-gray-200 dark:bg-neutral-700 hover:bg-gray-400 rounded">React.js</span>
                <span className="px-2 py-1 text-[10px] sm:text-xs bg-gray-200 dark:bg-neutral-700 hover:bg-gray-400 rounded">TailwindCSS</span>
                <span className="px-2 py-1 text-[10px] sm:text-xs bg-gray-200 dark:bg-neutral-700 hover:bg-gray-400 rounded">MongoDB</span>
                <span className="px-2 py-1 text-[10px] sm:text-xs bg-gray-200 dark:bg-neutral-700 hover:bg-gray-400 rounded">Node.js</span>
              </div>
              <div className="flex gap-2 sm:gap-4 mt-4">
                <a
                  href="https://github.com/Anil-sai0418/Task-manager"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 h-[32px] sm:h-[36px] rounded-lg text-[10px] sm:text-xs text-black dark:text-white backdrop-blur-md bg-black/10 dark:bg-white/10 border border-black/10 dark:border-white/20 shadow-md hover:scale-105 hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-1 sm:gap-2"
                  style={{
                    WebkitBackdropFilter: "blur(10px)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                  Code
                </a>
                <a
                  href="https://task-manager-anil.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 h-[32px] sm:h-[36px] rounded-lg text-[10px] sm:text-xs text-black dark:text-white backdrop-blur-md bg-black/10 dark:bg-white/10 border border-black/10 dark:border-white/20 shadow-md hover:scale-105 hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-1 sm:gap-2"
                  style={{
                    WebkitBackdropFilter: "blur(10px)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
          {/* Card 1 */}
          <div
            ref={cardRefs[1]}
            className="rounded-lg bg-white dark:bg-neutral-900 text-black dark:text-white overflow-hidden shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105 opacity-0 translate-y-8"
            style={{ height: "auto", minHeight: "380px", width: "100%" }}
          >
          <img
            src="/Monkey-type.png"
            alt="Monkey Type"
            className="h-[200px] sm:h-[220px] w-full object-cover rounded-t-lg transition-transform duration-300 hover:scale-105"
          />
          <div className="rounded-b-lg backdrop-blur-md bg-white/20 dark:bg-white/10 border-t border-white/30 dark:border-white/10 hover:bg-white/30 dark:hover:bg-white/20 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            style={{ WebkitBackdropFilter: "blur(10px)", backdropFilter: "blur(10px)" }}>
            <div
              className="px-4 sm:px-6 py-4 flex flex-col justify-between min-h-[180px] rounded-b-lg backdrop-blur-md bg-white/20 dark:bg-white/10 border-t border-white/30 dark:border-white/10"
              style={{
                WebkitBackdropFilter: "blur(10px)",
                backdropFilter: "blur(10px)",
              }}
            >
              <h3 className="text-base sm:text-lg font-bold text-white dark:text-white drop-shadow-[0_1px_1px_rgba(255,255,255,0.3)]">Monkey Type</h3>
              <p className="text-xs sm:text-sm mt-2 text-white dark:text-white drop-shadow-[0_1px_1px_rgba(255,255,255,0.2)] line-clamp-3">
                A typing speed test application with real-time feedback, leaderboards, and customizable themes built with Next.js and MongoDB.
              </p>
              <div className="flex flex-wrap gap-1 sm:gap-2 mt-3">
                <span className="px-2 py-1 text-[10px] sm:text-xs bg-gray-200 dark:bg-neutral-700 hover:bg-gray-400 rounded">Next.js</span>
                <span className="px-2 py-1 text-[10px] sm:text-xs bg-gray-200 dark:bg-neutral-700 hover:bg-gray-400 rounded">TailwindCSS</span>
                <span className="px-2 py-1 text-[10px] sm:text-xs bg-gray-200 dark:bg-neutral-700 hover:bg-gray-400 rounded">MongoDB</span>
                <span className="px-2 py-1 text-[10px] sm:text-xs bg-gray-200 dark:bg-neutral-700 hover:bg-gray-400 rounded">React</span>
              </div>
              <div className="flex gap-2 sm:gap-4 mt-4">
                <a
                  href="https://github.com/Anil-sai0418/Monkey-Type"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 h-[32px] sm:h-[36px] rounded-lg text-[10px] sm:text-xs text-black dark:text-white backdrop-blur-md bg-black/10 dark:bg-white/10 border border-black/10 dark:border-white/20 shadow-md hover:scale-105 hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-1 sm:gap-2"
                  style={{
                    WebkitBackdropFilter: "blur(10px)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                  Code
                </a>
                <a
                  href="https://monkey-type-anil.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 h-[32px] sm:h-[36px] rounded-lg text-[10px] sm:text-xs text-black dark:text-white backdrop-blur-md bg-black/10 dark:bg-white/10 border border-black/10 dark:border-white/20 shadow-md hover:scale-105 hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-1 sm:gap-2"
                  style={{
                    WebkitBackdropFilter: "blur(10px)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
          {/* Card 2 */}
          <div
            ref={cardRefs[2]}
            className="rounded-lg bg-white dark:bg-neutral-900 text-black dark:text-white overflow-hidden shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105 opacity-0 translate-y-8"
            style={{ height: "auto", minHeight: "380px", width: "100%" }}
          >
          <img
            src="/Nutrify-app.png"
            alt="Nutrify App"
            className="h-[200px] sm:h-[220px] w-full object-cover rounded-t-lg transition-transform duration-300 hover:scale-105"
          />
          <div className="rounded-b-lg backdrop-blur-md bg-white/20 dark:bg-white/10 border-t border-white/30 dark:border-white/10 hover:bg-white/30 dark:hover:bg-white/20 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            style={{ WebkitBackdropFilter: "blur(10px)", backdropFilter: "blur(10px)" }}>
            <div
              className="px-4 sm:px-6 py-4 flex flex-col justify-between min-h-[180px] rounded-b-lg backdrop-blur-md bg-white/20 dark:bg-white/10 border-t border-white/30 dark:border-white/10"
              style={{
                WebkitBackdropFilter: "blur(10px)",
                backdropFilter: "blur(10px)",
              }}
            >
              <h3 className="text-base sm:text-lg font-bold text-white dark:text-white drop-shadow-[0_1px_1px_rgba(255,255,255,0.3)]">Nutrify App</h3>
              <p className="text-xs sm:text-sm mt-2 text-white dark:text-white drop-shadow-[0_1px_1px_rgba(255,255,255,0.2)] line-clamp-3">
                A nutrition tracking app that helps users log meals, track calories, and receive dietary recommendations using Next.js and MongoDB.
              </p>
              <div className="flex flex-wrap gap-1 sm:gap-2 mt-3">
                <span className="px-2 py-1 text-[10px] sm:text-xs bg-gray-200 dark:bg-neutral-700 hover:bg-gray-400 rounded">Next.js</span>
                <span className="px-2 py-1 text-[10px] sm:text-xs bg-gray-200 dark:bg-neutral-700 hover:bg-gray-400 rounded">TailwindCSS</span>
                <span className="px-2 py-1 text-[10px] sm:text-xs bg-gray-200 dark:bg-neutral-700 hover:bg-gray-400 rounded">MongoDB</span>
                <span className="px-2 py-1 text-[10px] sm:text-xs bg-gray-200 dark:bg-neutral-700 hover:bg-gray-400 rounded">React</span>
              </div>
              <div className="flex gap-2 sm:gap-4 mt-4">
                <a
                  href="https://github.com/Anil-sai0418/Nutrify-App"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 h-[32px] sm:h-[36px] rounded-lg text-[10px] sm:text-xs text-black dark:text-white backdrop-blur-md bg-black/10 dark:bg-white/10 border border-black/10 dark:border-white/20 shadow-md hover:scale-105 hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-1 sm:gap-2"
                  style={{
                    WebkitBackdropFilter: "blur(10px)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                  Code
                </a>
                <a
                  href="https://nutrify-app-anil.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 h-[32px] sm:h-[36px] rounded-lg text-[10px] sm:text-xs text-black dark:text-white backdrop-blur-md bg-black/10 dark:bg-white/10 border border-black/10 dark:border-white/20 shadow-md hover:scale-105 hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-1 sm:gap-2"
                  style={{
                    WebkitBackdropFilter: "blur(10px)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
          {/* Card 3 */}
          <div
            ref={cardRefs[3]}
            className="rounded-lg bg-white dark:bg-neutral-900 text-black dark:text-white overflow-hidden shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105 opacity-0 translate-y-8"
            style={{ height: "auto", minHeight: "380px", width: "100%" }}
          >
          <img
            src="/Compiler.webp"
            alt="Online Python Compiler"
            className="h-[200px] sm:h-[220px] w-[90%] object-cover rounded-t-lg transition-transform duration-300 hover:scale-105 mx-auto"
          />
          <div className="rounded-b-lg backdrop-blur-md bg-white/20 dark:bg-white/10 border-t border-white/30 dark:border-white/10 hover:bg-white/30 dark:hover:bg-white/20 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            style={{ WebkitBackdropFilter: "blur(10px)", backdropFilter: "blur(10px)" }}>
            <div
              className="px-4 sm:px-6 py-4 flex flex-col justify-between min-h-[180px] rounded-b-lg backdrop-blur-md bg-white/20 dark:bg-white/10 border-t border-white/30 dark:border-white/10"
              style={{
                WebkitBackdropFilter: "blur(10px)",
                backdropFilter: "blur(10px)",
              }}
            >
              <h3 className="text-base sm:text-lg font-bold text-white dark:text-white drop-shadow-[0_1px_1px_rgba(255,255,255,0.3)]">Online Python Compiler</h3>
              <p className="text-xs sm:text-sm mt-2 text-white dark:text-white drop-shadow-[0_1px_1px_rgba(255,255,255,0.2)] line-clamp-3">
                An online Python compiler with a code editor, real-time execution, and support for multiple Python versions using Next.js.
              </p>
              <div className="flex flex-wrap gap-1 sm:gap-2 mt-3">
                <span className="px-2 py-1 text-[10px] sm:text-xs bg-gray-200 dark:bg-neutral-700 hover:bg-gray-400 rounded">Next.js</span>
                <span className="px-2 py-1 text-[10px] sm:text-xs bg-gray-200 dark:bg-neutral-700 hover:bg-gray-400 rounded">TailwindCSS</span>
                <span className="px-2 py-1 text-[10px] sm:text-xs bg-gray-200 dark:bg-neutral-700 hover:bg-gray-400 rounded">MongoDB</span>
                <span className="px-2 py-1 text-[10px] sm:text-xs bg-gray-200 dark:bg-neutral-700 hover:bg-gray-400 rounded">React</span>
              </div>
              <div className="flex gap-2 sm:gap-4 mt-4">
                <a
                  href="https://github.com/Anil-sai0418/Online-Python-Compiler"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 h-[32px] sm:h-[36px] rounded-lg text-[10px] sm:text-xs text-black dark:text-white backdrop-blur-md bg-black/10 dark:bg-white/10 border border-black/10 dark:border-white/20 shadow-md hover:scale-105 hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-1 sm:gap-2"
                  style={{
                    WebkitBackdropFilter: "blur(10px)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                  Code
                </a>
                <a
                  href="https://python-compiler-anil.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 h-[32px] sm:h-[36px] rounded-lg text-[10px] sm:text-xs text-black dark:text-white backdrop-blur-md bg-black/10 dark:bg-white/10 border border-black/10 dark:border-white/20 shadow-md hover:scale-105 hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-1 sm:gap-2"
                  style={{
                    WebkitBackdropFilter: "blur(10px)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
          {/* Card 4 */}
          <div
            ref={cardRefs[4]}
            className="rounded-lg bg-white dark:bg-neutral-900 text-black dark:text-white overflow-hidden shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105 opacity-0 translate-y-8"
            style={{ height: "auto", minHeight: "380px", width: "100%" }}
          >
          <img
            src="/Resume.webp"
            alt="ATS Checker"
            className="h-[200px] sm:h-[220px] w-full object-cover rounded-t-lg transition-transform duration-300 hover:scale-105"
          />
          <div className="rounded-b-lg backdrop-blur-md bg-white/20 dark:bg-white/10 border-t border-white/30 dark:border-white/10 hover:bg-white/30 dark:hover:bg-white/20 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            style={{ WebkitBackdropFilter: "blur(10px)", backdropFilter: "blur(10px)" }}>
            <div
              className="px-4 sm:px-6 py-4 flex flex-col justify-between min-h-[180px] rounded-b-lg backdrop-blur-md bg-white/20 dark:bg-white/10 border-t border-white/30 dark:border-white/10"
              style={{
                WebkitBackdropFilter: "blur(10px)",
                backdropFilter: "blur(10px)",
              }}
            >
              <h3 className="text-base sm:text-lg font-bold text-white dark:text-white drop-shadow-[0_1px_1px_rgba(255,255,255,0.3)]">ATS Checker</h3>
              <p className="text-xs sm:text-sm mt-2 text-white dark:text-white drop-shadow-[0_1px_1px_rgba(255,255,255,0.2)] line-clamp-3">
                A resume optimization tool that analyzes resumes for ATS compatibility, providing keyword suggestions and formatting tips.
              </p>
              <div className="flex flex-wrap gap-1 sm:gap-2 mt-3">
                <span className="px-2 py-1 text-[10px] sm:text-xs bg-gray-200 dark:bg-neutral-700 hover:bg-gray-400 rounded">Next.js</span>
                <span className="px-2 py-1 text-[10px] sm:text-xs bg-gray-200 dark:bg-neutral-700 hover:bg-gray-400 rounded">TailwindCSS</span>
                <span className="px-2 py-1 text-[10px] sm:text-xs bg-gray-200 dark:bg-neutral-700 hover:bg-gray-400 rounded">MongoDB</span>
                <span className="px-2 py-1 text-[10px] sm:text-xs bg-gray-200 dark:bg-neutral-700 hover:bg-gray-400 rounded">React</span>
              </div>
              <div className="flex gap-2 sm:gap-4 mt-4">
                <a
                  href="https://github.com/Anil-sai0418/ATS-Checker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 h-[32px] sm:h-[36px] rounded-lg text-[10px] sm:text-xs text-black dark:text-white backdrop-blur-md bg-black/10 dark:bg-white/10 border border-black/10 dark:border-white/20 shadow-md hover:scale-105 hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-1 sm:gap-2"
                  style={{
                    WebkitBackdropFilter: "blur(10px)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                  Code
                </a>
                <a
                  href="https://ats-checker-anil.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 h-[32px] sm:h-[36px] rounded-lg text-[10px] sm:text-xs text-black dark:text-white backdrop-blur-md bg-black/10 dark:bg-white/10 border border-black/10 dark:border-white/20 shadow-md hover:scale-105 hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-1 sm:gap-2"
                  style={{
                    WebkitBackdropFilter: "blur(10px)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
          {/* Card 5 */}
          <div
            ref={cardRefs[5]}
            className="rounded-lg bg-white dark:bg-neutral-900 text-black dark:text-white overflow-hidden shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105 opacity-0 translate-y-8"
            style={{ height: "auto", minHeight: "380px", width: "100%" }}
          >
          <img
            src="/Phone-book.png"
            alt="Phone Book"
            className="h-[200px] sm:h-[220px] w-full object-cover rounded-t-lg transition-transform duration-300 hover:scale-105"
          />
          <div className="rounded-b-lg backdrop-blur-md bg-white/20 dark:bg-white/10 border-t border-white/30 dark:border-white/10 hover:bg-white/30 dark:hover:bg-white/20 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            style={{ WebkitBackdropFilter: "blur(10px)", backdropFilter: "blur(10px)" }}>
            <div
              className="px-4 sm:px-6 py-4 flex flex-col justify-between min-h-[180px] rounded-b-lg backdrop-blur-md bg-white/20 dark:bg-white/10 border-t border-white/30 dark:border-white/10"
              style={{
                WebkitBackdropFilter: "blur(10px)",
                backdropFilter: "blur(10px)",
              }}
            >
              <h3 className="text-base sm:text-lg font-bold text-white dark:text-white drop-shadow-[0_1px_1px_rgba(255,255,255,0.3)]">Phone Book</h3>
              <p className="text-xs sm:text-sm mt-2 text-white dark:text-white drop-shadow-[0_1px_1px_rgba(255,255,255,0.2)] line-clamp-3">
                A contact management app with search, add, and delete functionalities, featuring a responsive UI and MongoDB backend.
              </p>
              <div className="flex flex-wrap gap-1 sm:gap-2 mt-3">
                <span className="px-2 py-1 text-[10px] sm:text-xs bg-gray-200 dark:bg-neutral-700 hover:bg-gray-400 rounded">Next.js</span>
                <span className="px-2 py-1 text-[10px] sm:text-xs bg-gray-200 dark:bg-neutral-700 hover:bg-gray-400 rounded">TailwindCSS</span>
                <span className="px-2 py-1 text-[10px] sm:text-xs bg-gray-200 dark:bg-neutral-700 hover:bg-gray-400 rounded">MongoDB</span>
                <span className="px-2 py-1 text-[10px] sm:text-xs bg-gray-200 dark:bg-neutral-700 hover:bg-gray-400 rounded">React</span>
              </div>
              <div className="flex gap-2 sm:gap-4 mt-4">
                <a
                  href="https://github.com/Anil-sai0418/Phone-Book"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 h-[32px] sm:h-[36px] rounded-lg text-[10px] sm:text-xs text-black dark:text-white backdrop-blur-md bg-black/10 dark:bg-white/10 border border-black/10 dark:border-white/20 shadow-md hover:scale-105 hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-1 sm:gap-2"
                  style={{
                    WebkitBackdropFilter: "blur(10px)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                  Code
                </a>
                <a
                  href="https://phone-book-anil.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 h-[32px] sm:h-[36px] rounded-lg text-[10px] sm:text-xs text-black dark:text-white backdrop-blur-md bg-black/10 dark:bg-white/10 border border-black/10 dark:border-white/20 shadow-md hover:scale-105 hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-1 sm:gap-2"
                  style={{
                    WebkitBackdropFilter: "blur(10px)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}