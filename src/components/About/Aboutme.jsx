import { useEffect, useRef } from "react";

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;
    // Start hidden
    node.classList.remove("animate-pageEnter");
    node.classList.add("opacity-0", "translate-y-8");

    if (!window.IntersectionObserver) {
      // Fallback for browsers without IntersectionObserver support
      node.classList.remove("opacity-0", "translate-y-8");
      node.classList.add("animate-pageEnter");
      return;
    }

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.remove("opacity-0", "translate-y-8");
          node.classList.add("animate-pageEnter");
          observer.unobserve(node);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="about"
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center bg-black/70 backdrop-blur-[6px] overflow-hidden opacity-0 translate-y-8"
    >
      {/* Floating Dots Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 bg-white/60 rounded-full animate-floatDot"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Radial gradient overlay */}
      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-black/70 [mask-image:radial-gradient(ellipse_at_center,transparent_65%,black_95%)]"></div>

      {/* Main Glass Card */}
      <div className="relative z-20 w-full max-w-6xl p-6 sm:p-8 md:p-10 text-white rounded-[2rem] backdrop-blur-2xl bg-white/10 border border-white/20 shadow-[0_8px_40px_rgba(255,255,255,0.15)]
                      hover:shadow-[0_0_40px_rgba(255,255,255,0.25)] transition-all duration-500
                      animate-[fadeUp_1s_ease-out]">

        {/* About Me Section */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight mb-3 
                         text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 
                         drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]
                         animate-[fadeIn_1s_ease-out_0.2s_forwards] opacity-0
                         hover:scale-[1.03] transition-transform duration-500 ease-out">
            About Me
          </h1>
          <p className="text-sm sm:text-base md:text-lg font-light tracking-wide text-gray-200 animate-[fadeIn_1s_ease-out_0.4s_forwards] opacity-0
                        hover:scale-[1.03] transition-transform duration-500 ease-out">
            Crafting immersive experiences with code and design
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row h-auto md:h-[400px] w-full gap-6 md:gap-0">

          {/* Profile Image */}
          <div className="flex justify-center items-center md:w-1/2">
            <div className="p-[3px] rounded-2xl border border-white/30 
                            hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] transition-all duration-500">
              <img
                src="Anil.jpg"
                alt="Profile"
                className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-2xl object-cover shadow-lg shadow-black/30 
                           animate-[float_6s_ease-in-out_infinite]"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="flex flex-col justify-center md:w-1/2 px-2 sm:px-4 text-center md:text-left">
            <p className="text-xl sm:text-3xl md:text-5xl font-extrabold mt-4 md:mt-5 tracking-tight 
                          hover:scale-105 transition-transform duration-500
                          animate-[fadeIn_1s_ease-out_0.6s_forwards] opacity-0">
              ANIL SAI NUNNA
            </p>

            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg font-light text-gray-300 leading-relaxed 
                          animate-[fadeIn_1s_ease-out_0.8s_forwards] opacity-0">
              I’m a Full Stack Developer passionate about creating elegant and efficient digital solutions. Skilled in modern web technologies, I love crafting user-friendly interfaces and robust backends that bring ideas to life.
            </p>

            <div className="mt-3 sm:mt-4 text-sm sm:text-lg italic bg-gray-700/60 rounded-2xl p-2 sm:p-3 text-gray-200 shadow-lg shadow-blue-400/50 opacity-0
                            animate-[fadeIn_1s_ease-out_1s_forwards]"> 
              <p
                style={{
                  fontFamily: "'Meeri', cursive",
                  letterSpacing: "0.5px",
                }}
              >
                Success begins with a single belief — that you are capable. Trust yourself, take action, and watch possibilities turn into reality.
              </p>
              <span className="block mt-1 sm:mt-2 text-xs sm:text-sm text-gray-200 italic animate-[fadeIn_1s_ease-out_1.2s_forwards] opacity-0">
                ~ anil sai
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes floatDot {
          0% { transform: translateY(0) translateX(0); opacity: 0.5; }
          50% { transform: translateY(-20px) translateX(10px); opacity: 1; }
          100% { transform: translateY(0) translateX(0); opacity: 0.5; }
        }
        .animate-floatDot {
          animation: floatDot ease-in-out infinite;
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
        .animate-pageEnter {
          animation: pageEnter 0.8s ease-out both;
        }
      `}</style>
    </div>
  );
}
