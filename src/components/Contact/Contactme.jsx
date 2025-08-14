import { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { FaInstagram, FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function ContactMe() {
  const containerRef = useRef(null);

  const socials = [
    { icon: <FaInstagram />, label: "Instagram", href: "https://www.instagram.com/single__king___anil/" },
    { icon: <FaEnvelope />, label: "Email", href: "mailto:anilsainunna@gmail.com" },
    { icon: <FaLinkedin />, label: "LinkedIn", href: "https://www.linkedin.com/in/anil-sai" },
    { icon: <FaGithub />, label: "GitHub", href: "https://github.com/Anil-sai0418" },
    { icon: <FaTwitter />, label: "Twitter", href: "https://x.com/nunna99099" },
  ];

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.remove("opacity-0", "translate-y-8");
          element.classList.add("animate-pageEnter");
          observer.unobserve(element);
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      id="contact"
      ref={containerRef}
      className="relative flex min-h-screen w-full items-center justify-center bg-black/70 backdrop-blur-[6px] overflow-hidden opacity-0 translate-y-8"
    >
      {/* Background with radial dots */}
      <div
        className={cn(
          "absolute inset-0 z-0",
          "[background-size:24px_24px] [background-image:radial-gradient(#d4d4d4_0.8px,transparent_0.8px)]",
          "dark:[background-image:radial-gradient(#404040_0.8px,transparent_0.8px)]",
          "transition-all duration-500"
        )}
      />
      {/* Radial gradient overlay */}
      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-black/70 [mask-image:radial-gradient(ellipse_at_center,transparent_65%,black_95%)]"></div>

      {/* Main content */}
      <section className="relative z-20 py-8">
        <main className="relative z-10 px-4 sm:px-8 md:px-12 py-16 max-w-3xl w-full flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 text-center tracking-wide transition-all duration-300 hover:scale-105 animate-scaleInUp">
            Contact <span className="text-green-400">Me</span>
          </h1>
          <p
            className="text-white/80 font-medium mb-8 text-center text-sm sm:text-base max-w-sm animate-scaleInUp animation-delay-200"
            style={{ textShadow: "0 4px 32px #0004" }}
          >
            Let’s connect and bring your ideas to life!
          </p>

          {/* Social buttons */}
          <div className="flex flex-wrap justify-center gap-3 w-full">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                className="flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 border border-white/10 backdrop-blur-md rounded-xl w-40 px-6 py-3 text-white text-base transition shadow animate-popIn"
                style={{ animationDelay: `${(i + 2) * 150}ms` }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-base">{s.icon}</span>
                <span className="font-medium text-sm">{s.label}</span>
              </a>
            ))}
          </div>
        </main>

        {/* Footer */}
        <footer className="w-full text-center py-6 text-gray-300 bg-transparent relative z-10 animate-bounceIn animation-delay-800">
          <div className="flex flex-col items-center gap-3">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-300">Anil Sai Nunna | Full Stack Developer</h2>
          <a
              href="https://drive.google.com/file/d/1_vkSr8AT5B56rL3zPel53NNv6v5pDUD4/view?usp=sharing"
              className="inline-block bg-white/10 hover:bg-white/20 border border-white/10 backdrop-blur-md rounded-lg px-4 py-2 text-white text-sm font-medium transition shadow hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get my Resume
            </a>
            <p className="text-sm text-gray-400 font-medium animate-bounceIn animation-delay-1000 text-center">
              <span className="block sm:inline">Designed by Anil</span>{' '}
              <span className="block sm:inline">© 2025 All rights reserved.</span>
            </p>
          </div>
        </footer>

        {/* Scrolling background text */}
        <div className="absolute bottom-0 left-0 w-full flex justify-center pointer-events-none z-0 overflow-hidden mb-4">
          <div className="scrolling-text-container">
            <span
              className="font-black text-[clamp(2.5rem,10vw,10rem)] text-white/10 select-none uppercase tracking-[-0.05em] whitespace-nowrap animate-scrollText"
              aria-hidden="true"
            >
              ANIL SAI &nbsp;&nbsp;&nbsp;&nbsp; ANIL SAI &nbsp;&nbsp;&nbsp;&nbsp; ANIL SAI
            </span>
          </div>
        </div>
      </section>

      {/* Inline CSS for animations */}
      <style jsx>{`
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes scaleInUp {
          from { opacity: 0; transform: translateY(15px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes popIn {
          0% { opacity: 0; transform: scale(0.8); }
          70% { opacity: 0.7; transform: scale(1.05); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes bounceIn {
          0% { opacity: 0; transform: translateY(20px); }
          60% { opacity: 0.8; transform: translateY(-5px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes scrollText {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
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
        .animate-scaleIn {
          animation: scaleIn 1s ease-out;
        }
        .animate-scaleInUp {
          animation: scaleInUp 0.8s ease-out;
        }
        .animate-popIn {
          animation: popIn 0.6s ease-out;
        }
        .animate-bounceIn {
          animation: bounceIn 0.8s ease-out;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-800 {
          animation-delay: 0.8s;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .scrolling-text-container {
          width: 100%;
          overflow: hidden;
        }
        .animate-scrollText {
          display: inline-block;
          animation: scrollText 20s linear infinite;
        }
        .animate-pageEnter {
          animation: pageEnter 0.8s ease-out both;
        }
      `}</style>
    </div>
  );
}