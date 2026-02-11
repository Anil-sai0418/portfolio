import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../ui/ScrollReveal';

const AboutMe = () => {
  return (
    <div id="about" className="min-h-screen  bg-[#050505]  text-white selection:bg-white/10 flex items-center">
      {/* Background Noise/Texture */}
      <div className="fixed inset-0 opacity-[0.03]   pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <main className="max-w-7xl mx-auto px-6 py-24  relative z-10 w-full">
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
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent italic">
                ANIL SAI <br />NUNNA.
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <p className="text-xl text-white/60 leading-relaxed font-light">
                I’m a passionate full‑stack developer who loves turning ideas into clean,
                scalable, and user‑focused digital products. I enjoy working across the
                stack — from crafting polished interfaces to building reliable backend
                systems — with a strong focus on{" "}
                <span className="text-white">quality</span>,{" "}
                <span className="text-white">performance</span>, and{" "}
                <span className="text-white">real‑world impact</span>.
              </p>
            </ScrollReveal>

            {/* Quote */}
            <ScrollReveal delay={0.6} yOffset={30}>
              <div className="mt-10 relative max-w-md">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/40 to-transparent opacity-30 blur-sm rounded-xl" />

                <div className="relative bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-xl p-6 overflow-hidden">
                  <p className="text-lg text-white/90 leading-relaxed font-light font-['Dancing_Script']">
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

          <div className="flex justify-center relative">
            <ScrollReveal direction="left" delay={0.4}>
              <div className="relative w-full max-w-[500px] aspect-video rounded-3xl overflow-hidden bg-white/5 border border-white/10 shadow-2xl group">
                <motion.img
                  src="/Gemini_Generated_Image_r9f98hr9f98hr9f9 (1).png"
                  alt="Profile placeholder"
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

      </main>


    </div>
  );
};

export default AboutMe;