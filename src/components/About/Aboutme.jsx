import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../ui/ScrollReveal';

const AboutMe = () => {
  return (
    <div id="about" className="min-h-screen bg-transparent text-white selection:bg-white/10 flex items-center relative z-10">
      {/* Background Noise/Texture */}
      <div className="fixed inset-0 opacity-[0.03]   pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <main className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 py-16 md:py-24 relative z-10 w-full">
        {/* Header Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-5 items-center mb-10">
          <div>
            <ScrollReveal direction="right" delay={0.2}>
              <div className="flex items-center gap-2 mb-6">
                <span className="w-12 h-[1px] bg-white/20"></span>
                <span className="text-xs font-mono text-white/40 uppercase tracking-[4px]">
                  Hi, I'm
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent italic pr-4 pb-2">
                ANIL SAI <br />NUNNA
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <p className="text-xl text-white/60 leading-relaxed font-light">
                I’m currently working as a <span className="text-white">Frontend Intern at Transetu</span> with
                <span className="text-white"> 3 months of hands-on experience</span> building responsive,
                user-friendly, and high-performance web applications. As a passionate developer
                and B.Tech student, I enjoy transforming ideas into clean and scalable
                digital experiences, with strong attention to <span className="text-white">design</span>,{" "}
                <span className="text-white">usability</span>, and{" "}
                <span className="text-white">real-world impact</span>.
              </p>
            </ScrollReveal>

          </div>

          <div className="flex justify-center relative mt-12 md:mt-0">
            <ScrollReveal direction="left" delay={0.4}>
              <div className="relative w-full max-w-[500px] aspect-[3/2] rounded-3xl overflow-hidden bg-white/5 border border-white/10 shadow-2xl group">
                <motion.img
                  src="/Anil_sai.png"
                  alt="Anil Sai"
                  className="w-full h-full object-cover object-top"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] }}
                />

                {/* decorative corner accents */}
                <span className="absolute -top-3 -left-3 w-10 h-10 border-l border-t border-white/30 rounded-tl-2xl" />
                <span className="absolute -bottom-3 -right-3 w-10 h-10 border-r border-b border-white/30 rounded-br-2xl" />

                {/* focus rectangle frame */}
                <div className="absolute inset-4 rounded-xl border border-white/40 pointer-events-none" />

                {/* corner cut accents */}
                <span className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-white/60" />
                <span className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-white/60" />
                <span className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-white/60" />
                <span className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-white/60" />
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Quote Section - Now comes after the image on smaller screens */}
        <div className="w-full flex md:justify-start justify-center mt-10 md:mt-2">
          <ScrollReveal delay={0.6} yOffset={30}>
            <div className="relative max-w-xl w-full">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/40 to-transparent opacity-30 blur-sm rounded-xl" />

              <div className="relative bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-xl p-6 overflow-hidden">
                <p className="text-2xl md:text-3xl text-white/90 leading-relaxed font-saint">
                  “Success begins with a single belief — that you are capable.
                  Trust yourself, take action, and watch possibilities turn into reality.”
                </p>

                <div className="mt-4 text-sm font-medium tracking-widest text-blue-400 uppercase opacity-80">
                  ~ Anil Sai
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

      </main>
    </div>
  );
};

export default AboutMe;