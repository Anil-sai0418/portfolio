import { useState, useEffect, useRef } from "react";



export default function Skills() {
  const skills = [
    { name: "HTML", src: "/html.webp", category: "frontend" },
    { name: "CSS", src: "/css.webp", category: "frontend" },
    { name: "Tailwind", src: "/tailwind.webp", category: "frontend" },
    { name: "JavaScript", src: "/js.webp", category: "frontend" },
    { name: "TypeScript", src: "/TS.webp", category: "frontend" },
    { name: "React", src: "/react.webp", category: "frontend" },
    { name: "Next.js", src: "/next.png", category: "frontend" },
    { name: "Node.js", src: "/node.webp", category: "backend" },
    { name: "Express.js", src: "/express.webp", category: "backend" },
    { name: "MongoDB", src: "/mongodb.webp", category: "backend" },
    { name: "Python", src: "/python.webp", category: "backend" },
    { name: "MySQL", src: "/mysql.png", category: "backend" },
  ];


  const [filter, setFilter] = useState("all");
  const filteredSkills = filter === "all" ? skills : skills.filter(skill => skill.category === filter);




  useEffect(() => {
    const elements = document.querySelectorAll(".skill-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("skill-card-enter");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [filteredSkills]);


  // Ref for the container for intersection observer
  const containerRef = useRef(null);

  // Intersection Observer for the main container animation
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const observer = new window.IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            container.classList.remove("opacity-0", "translate-y-8");
            container.classList.add("animate-pageEnter");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  // Wrap content in React.StrictMode equivalent (for reactivity, in Next.js this is not needed, but for the instruction, we can use a fragment)
  return (
    <>
      <div
        id="skills"
        ref={containerRef}
        aria-label="Skills section"
        role="region"
        className="relative w-full min-h-screen flex flex-col items-center justify-start bg-white dark:bg-black transition-all duration-700 ease-in-out py-10 overflow-hidden opacity-0 translate-y-8"
      >
      {/* Dynamic Background Gradient and Grid */}
      <div
        className="absolute inset-0 [background-size:20px_20px] [background-image:radial-gradient(circle,rgba(0,0,0,0.6)_1px,transparent_1px)] dark:[background-image:radial-gradient(circle,rgba(255,255,255,0.8)_1px,transparent_1px)] animate-[moveDotsCircular_30s_linear_infinite] before:content-[''] before:absolute before:inset-0 before:[background-size:20px_20px] before:[background-image:radial-gradient(circle,rgba(255,255,255,0.8)_1px,transparent_1px)] before:opacity-30 before:blur-[2px] dark:before:[background-image:radial-gradient(circle,rgba(255,255,255,1)_1px,transparent_1px)]"
      />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(200,200,200,0.05)_0%,rgba(255,255,255,0)_100%)] dark:bg-[radial-gradient(50%_50%_at_50%_50%,rgba(50,50,50,0.2)_0%,rgba(0,0,0,0)_100%)] animate-pulse" />


      {/* Overlay for central focus */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <div className="relative z-20 w-full flex flex-col items-center pt-20">
     
        {/* Title */}
        <p className="text-black dark:text-white text-2xl sm:text-3xl lg:text-4xl font-bold transition duration-300 hover:scale-105 cursor-default">
          Skills
        </p>
        {/* Subtitle */}
        <p className="text-gray-800 dark:text-gray-300 text-xs sm:text-sm mt-2 transition duration-300 hover:text-black dark:hover:text-white hover:scale-105 cursor-default font-semibold px-4 text-center">
          Tools, Technologies and Languages I'm experienced with.
        </p>
        <div className="flex gap-3 mt-6 relative overflow-x-auto justify-start sm:justify-center no-scrollbar px-4 py-2 bg-white/90 dark:bg-white/10 rounded-xl backdrop-blur-lg shadow-md">
          <button
            onClick={() => setFilter("all")}
            aria-pressed={filter === "all"}
            aria-label="Show all skills"
            className={`relative z-10 px-4 py-2 sm:px-6 sm:py-2 text-xs sm:text-sm rounded-full font-medium tracking-wide transition-all duration-300
              ${
                filter === "all"
                  ? "bg-white text-black dark:bg-white dark:text-black shadow border border-gray-300 dark:border-white/10 dark:shadow-[0_0_10px_#ffffff55] animate-pulse"
                  : "bg-black/10 dark:bg-white/10 text-black dark:text-white hover:bg-white/20 dark:hover:bg-white/20 border border-white/20"
              }
            `}
          >
            <span className="hidden sm:inline">🌐</span> All
          </button>
          <button
            onClick={() => setFilter("frontend")}
            aria-pressed={filter === "frontend"}
            aria-label="Show only frontend skills"
            className={`relative z-10 px-4 py-2 sm:px-6 sm:py-2 text-xs sm:text-sm rounded-full font-medium tracking-wide transition-all duration-300
              ${
                filter === "frontend"
                  ? "bg-white text-black dark:bg-white dark:text-black shadow border border-gray-300 dark:border-white/10 dark:shadow-[0_0_10px_#ffffff55] animate-pulse"
                  : "bg-black/10 dark:bg-white/10 text-black dark:text-white hover:bg-white/20 dark:hover:bg-white/20 border border-white/20"
              }
            `}
          >
            <span className="hidden sm:inline">🎨</span> Frontend
          </button>
          <button
            onClick={() => setFilter("backend")}
            aria-pressed={filter === "backend"}
            aria-label="Show only backend skills"
            className={`relative z-10 px-4 py-2 sm:px-6 sm:py-2 text-xs sm:text-sm rounded-full font-medium tracking-wide transition-all duration-300
              ${
                filter === "backend"
                  ? "bg-white text-black dark:bg-white dark:text-black shadow border border-gray-300 dark:border-white/10 dark:shadow-[0_0_10px_#ffffff55] animate-pulse"
                  : "bg-black/10 dark:bg-white/10 text-black dark:text-white hover:bg-white/20 dark:hover:bg-white/20 border border-white/20"
              }
            `}
          >
            <span className="hidden sm:inline">🔧</span> Backend
          </button>
        </div>
        {/* Skills Grid */}
        <div role="list" className={`w-[90%] sm:w-[80%] lg:w-[70%] h-auto min-h-[300px] sm:min-h-[400px] lg:h-[55%] backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/20 dark:border-white/10 rounded-xl shadow-2xl flex flex-wrap justify-center items-center gap-x-2 sm:gap-x-4 ${["frontend", "backend"].includes(filter) ? "gap-y-4 sm:gap-y-6" : "gap-y-3 sm:gap-y-5"} mt-6 sm:mt-10 transition-all duration-500 p-4 sm:p-6`}>
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              aria-label={`${skill.name} skill`}
              role="listitem"
              className="skill-card w-full sm:w-[30%] lg:w-[22%] h-16 sm:h-20 rounded-lg flex flex-row justify-center items-center gap-2 sm:gap-5 text-black dark:text-white bg-white/80 dark:bg-white/10 border border-gray-200 dark:border-white/10 backdrop-blur-lg shadow-md dark:shadow-[0_0_10px_#ffffff33] transition-all duration-500 ease-out transform will-change-transform perspective-1000 group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <img src={skill.src} alt={`${skill.name} Icon`} className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 group-hover:rotate-6 transition-transform duration-300" />
              <p className="font-bold text-sm sm:text-base lg:text-lg tracking-wide text-center" title={`Experienced with ${skill.name}`}>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
      <style jsx global>{`
        .skill-card {
          opacity: 1;
          transform: translateY(40px) scale(0.9);
          pointer-events: auto;
        }
        @keyframes moveDotsCircular {
          0% { background-position: 0% 0%; }
          25% { background-position: 10% 20%; }
          50% { background-position: 0% 40%; }
          75% { background-position: -10% 20%; }
          100% { background-position: 0% 0%; }
        }
        @keyframes pageEnter {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes skillCardEnter {
          0% {
            opacity: 0;
            transform: translateY(40px) scale(0.9);
          }
          60% {
            opacity: 1;
            transform: translateY(-6px) scale(1.03);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes softGlow {
          0% {
            box-shadow: 0 0 0 rgba(255,255,255,0.0);
          }
          100% {
            box-shadow: 0 0 18px rgba(255,255,255,0.6);
          }
        }
        .animate-pageEnter {
          animation: pageEnter 0.8s ease-out both;
        }
        .skill-card-enter {
          animation: skillCardEnter 0.6s ease-out forwards;
          animation-fill-mode: both;
          transform-origin: center;
        }
        .skill-card.skill-card-enter {
          opacity: 1;
        }
      `}</style>
    </>
  );
}