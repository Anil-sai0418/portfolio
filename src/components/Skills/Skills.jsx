import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';

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

export default function Skills() {
  const [filter, setFilter] = useState("all");
  const filteredSkills = filter === "all" ? skills : skills.filter(skill => skill.category === filter);

  return (
    <div id="skills" className="min-h-screen bg-[#050505] text-white overflow-hidden relative py-20">
      <CursorGradient />
      {/* Background Noise/Texture */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Subtle Gradient Spots */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />


      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
            My Tech Stack
          </h2>
          <p className="text-xl md:text-2xl text-white/60 font-light max-w-2xl mx-auto leading-relaxed">
            Tools, Technologies, and Languages I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex gap-4 mb-12 flex-wrap justify-center"
        >
          {["all", "frontend", "backend"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`
                  relative px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border
                  ${filter === cat
                  ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                  : "bg-white/5 text-white/70 border-white/10 hover:bg-white/10 hover:border-white/30 hover:text-white"
                }
                `}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </motion.div>


        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 w-full max-w-6xl">
          <AnimatePresence mode='popLayout'>
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="group relative flex flex-col items-center justify-center p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-colors duration-300 aspect-square"
              >
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />

                <div className="relative z-10 p-3 bg-[#0a0a0a] rounded-xl border border-white/10 shadow-lg mb-3 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-shadow duration-300">
                  <img src={skill.src} alt={skill.name} className="w-10 h-10 object-contain" />
                </div>

                <h3 className="text-white/80 font-medium tracking-wide text-sm group-hover:text-white transition-colors duration-300">
                  {skill.name}
                </h3>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}