import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "../ui/ScrollReveal";

// Custom SVG Icons to replace react-icons
const FaInstagram = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const FaEnvelope = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-20.728c-.904 0-1.636-.732-1.636-1.636v-13.909c0-.904.732-1.636 1.636-1.636h20.728c.904 0 1.636.732 1.636 1.636zm-1.636-1.636h-20.728l10.364 6.618 10.364-6.618zm0 2.045l-10.364 6.618-10.364-6.618v11.864h20.728v-11.864z" />
  </svg>
);

const FaLinkedin = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const FaGithub = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const FaTwitter = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
  </svg>
);

// Utility function to combine class names
const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

export default function ContactMe() {
  const containerRef = useRef(null);
  const parallaxRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Utility function to combine class names
  const cn = (...classes) => {
    return classes.filter(Boolean).join(' ');
  };

  const socials = [
    { icon: <FaInstagram />, label: "Instagram", href: "https://www.instagram.com/single__king___anil/", color: "from-pink-500 to-purple-600" },
    { icon: <FaEnvelope />, label: "Email", href: "mailto:anilsainunna@gmail.com", color: "from-blue-500 to-blue-600" },
    { icon: <FaLinkedin />, label: "LinkedIn", href: "https://www.linkedin.com/in/anil-sai", color: "from-blue-600 to-blue-800" },
    { icon: <FaGithub />, label: "GitHub", href: "https://github.com/Anil-sai0418", color: "from-gray-600 to-gray-800" },
    { icon: <FaTwitter />, label: "Twitter", href: "https://x.com/nunna99099", color: "from-blue-400 to-blue-600" },
  ];

  // Enhanced scroll and mouse tracking
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
    };

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      id="contact"
      className="relative flex min-h-screen w-full items-center justify-center bg-black/70 backdrop-blur-[6px] overflow-hidden"
    >
      {/* Enhanced Background with moving particles */}
      <div
        ref={parallaxRef}
        className={cn(
          "absolute inset-0 z-0 transition-all duration-1000",
          "[background-size:32px_32px] [background-image:radial-gradient(#404040_1px,transparent_1px)]",
        )}
        style={{
          transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px) translateZ(0)`,
          backgroundPosition: `${scrollY * 0.2}px ${scrollY * 0.1}px`,
        }}
      />

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 z-5 overflow-hidden">
        <motion.div
          animate={{ x: mousePosition.x * 30, y: mousePosition.y * 30, rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-green-400/20 to-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: mousePosition.x * -20, y: mousePosition.y * -20, rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
        />
      </div>

      {/* Enhanced radial gradient with mouse tracking */}
      <div
        className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-black/60 [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black_90%)]"
        style={{
          maskImage: `radial-gradient(ellipse ${600 + mousePosition.x * 100}px ${400 + mousePosition.y * 50}px at ${50 + mousePosition.x * 10}% ${50 + mousePosition.y * 10}%, transparent 50%, black 90%)`,
        }}
      />

      {/* Main content with enhanced animations */}
      <section className="relative z-20 py-8 w-full max-w-4xl">
        <main className="relative z-10 px-4 sm:px-8 md:px-12 py-16 flex flex-col items-center">

          <ScrollReveal>
            <div
              className="group cursor-default mb-2 text-center"
              style={{ transform: `perspective(1000px) rotateX(${mousePosition.y * 5}deg) rotateY(${mousePosition.x * 5}deg)` }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-white tracking-wide transition-all duration-500 group-hover:scale-110">
                Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 animate-gradient">Me</span>
              </h1>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p
              className="text-white/80 font-medium mb-12 text-center text-sm sm:text-base max-w-sm"
              style={{ textShadow: "0 4px 32px rgba(0,0,0,0.5)" }}
            >
              Let's connect and bring your ideas to life!
            </p>
          </ScrollReveal>

          {/* Enhanced Social buttons with premium hover effects */}
          <div className="flex flex-wrap justify-center gap-4 w-full">
            {socials.map((social, i) => (
              <ScrollReveal key={i} delay={0.3 + (i * 0.1)}>
                <a
                  href={social.href}
                  className={cn(
                    "relative flex items-center justify-center space-x-3 bg-white/5 hover:bg-white/10 border border-white/20 backdrop-blur-xl rounded-2xl w-44 px-6 py-4 text-white text-base transition-all duration-500 shadow-xl hover:shadow-2xl overflow-hidden group",
                    "before:absolute before:inset-0 before:bg-gradient-to-r before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100 before:blur-xl",
                    `before:${social.color}`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.span
                    className="relative z-10 text-lg"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                  >
                    {social.icon}
                  </motion.span>
                  <span className="relative z-10 font-semibold text-sm group-hover:text-white transition-colors duration-300">
                    {social.label}
                  </span>

                  {/* Hover glow effect */}
                  <div className={cn(
                    "absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r blur-md",
                    social.color
                  )} />
                </a>
              </ScrollReveal>
            ))}
          </div>
        </main>

        {/* Enhanced Footer */}
        <ScrollReveal delay={0.8} fullWidth>
          <footer className="w-full text-center py-6 text-gray-300 bg-transparent relative z-10">
            <div className="flex flex-col items-center gap-4">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-200 hover:text-white transition-colors duration-300">
                Anil Sai Nunna | Full Stack Developer
              </h2>
              <a
                href="https://drive.google.com/file/d/14dlEcs0cFSRz4Whe894sln9ectveLXgf/view?usp=sharing"
                className="group inline-block bg-gradient-to-r from-green-400/20 to-blue-500/20 hover:from-green-400/30 hover:to-blue-500/30 border border-white/30 backdrop-blur-xl rounded-xl px-6 py-3 text-white text-sm font-semibold transition-all duration-500 shadow-lg hover:shadow-xl hover:scale-105 relative overflow-hidden"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="relative z-10">Get my Resume</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              </a>
              <p className="text-sm text-gray-400 font-medium text-center">
                <span className="block sm:inline">Designed by Anil</span>{' '}
                <span className="block sm:inline">© 2025 All rights reserved.</span>
              </p>
            </div>
          </footer>
        </ScrollReveal>

        {/* Smooth Scrolling ANIL SAI background text */}
        <div className="absolute bottom-0 left-0 w-full flex justify-center pointer-events-none z-0 overflow-hidden mb-4 opacity-10">
          <div className="scrolling-text-container">
            <motion.div
              className="font-black text-[clamp(3rem,12vw,12rem)] text-white select-none uppercase tracking-[-0.05em] whitespace-nowrap"
              animate={{ x: "-50%" }}
              transition={{ duration: 20, ease: "linear", repeat: Infinity }}
            >
              ANIL SAI &nbsp;&nbsp;&nbsp;&nbsp; ANIL SAI &nbsp;&nbsp;&nbsp;&nbsp; ANIL SAI &nbsp;&nbsp;&nbsp;&nbsp; ANIL SAI &nbsp;&nbsp;&nbsp;&nbsp; ANIL SAI &nbsp;&nbsp;&nbsp;&nbsp; ANIL SAI
            </motion.div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .animate-gradient {
            background-size: 200% auto;
            animation: gradient 3s linear infinite;
        }
        @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}