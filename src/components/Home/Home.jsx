import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { cn } from "../../utlis/utlis";

export default function Home() {
  const sceneRef = useRef();
  const animationRef = useRef();

  const words = [
    { text: "Hi,", className: "text-gray-900 dark:text-white" },
    { text: "I'm", className: "text-gray-900 dark:text-white" },
    { text: "Anil", className: "text-gray-900 dark:text-white" },
    { text: "—", className: "text-gray-900 dark:text-white" },
    { text: "I", className: "text-green-700 dark:text-green-600" },
    { text: "don't", className: "text-green-700 dark:text-green-600" },
    { text: "just", className: "text-green-700 dark:text-green-600" },
    { text: "write", className: "text-green-700 dark:text-green-600" },
    { text: "code", className: "text-green-700 dark:text-green-600" },
    { text: "I", className: "text-green-700 dark:text-green-600" },
    { text: "craft", className: "text-green-700 dark:text-green-600" },
    { text: "digital", className: "text-green-700 dark:text-green-600" },
    { text: "experiences.", className: "text-green-700 dark:text-green-600" },
  ];

  const marqueeItems = ["Let's connect", "Open to work", "Bring Vision To Execution", "Hire Me"];

  useEffect(() => {
    // Existing Three.js logic (unchanged)
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    const container = document.getElementById("wave-background");
    
    if (container) {
      container.appendChild(renderer.domElement);
    }

    camera.position.z = 50;

    const rows = 40;
    const cols = 80;
    const separation = 2;

    const dotMaterial = new THREE.PointsMaterial({ 
      color: 0x888888, 
      size: 0.3,
      transparent: true,
      opacity: 0.8
    });
    const geometry = new THREE.BufferGeometry();
    const positions = [];

    for (let x = 0; x < cols; x++) {
      for (let y = 0; y < rows; y++) {
        const z = 0;
        positions.push(x * separation, y * separation, z);
      }
    }

    const positionAttribute = new THREE.Float32BufferAttribute(positions, 3);
    geometry.setAttribute("position", positionAttribute);

    const pointCloud = new THREE.Points(geometry, dotMaterial);
    pointCloud.position.x = -cols * separation / 2;
    pointCloud.position.y = -rows * separation / 2;

    scene.add(pointCloud);

    sceneRef.current = { scene, camera, renderer, geometry };

    function animate() {
      animationRef.current = requestAnimationFrame(animate);
      
      const time = Date.now() * 0.001;
      const pos = geometry.attributes.position;
      
      for (let i = 0; i < pos.count; i++) {
        const x = pos.getX(i) + cols * separation / 2;
        const y = pos.getY(i) + rows * separation / 2;
        
        const distance = (x + (rows * separation - y)) * 0.015;
        const waveHeight = Math.sin(distance - time * 2) * 2;
        
        pos.setZ(i, Math.max(0, waveHeight));
      }
      
      pos.needsUpdate = true;
      renderer.render(scene, camera);
    }
    
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="animate-pageEnter">
      <div
        className="relative flex min-h-screen w-full items-center justify-center bg-white/5 dark:bg-black/10 backdrop-blur-xl text-gray-900 dark:text-white overflow-hidden"
        id="home"
      >
        <div id="wave-background" className="absolute inset-0 z-0" />
        <div
          className={cn(
            "absolute inset-0 z-0",
            "bg-[radial-gradient(circle,_rgba(0,0,0,0.1)_1px,_transparent_1px)]",
            "dark:bg-[radial-gradient(circle,_rgba(255,255,255,0.15)_1px,_transparent_1px)]",
            "[background-size:16px_16px sm:20px_20px]"
          )}
        />
        <div
          className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-gray-100/10 dark:bg-white/5"
          style={{
            maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,0.5) 40%, transparent 90%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,0.5) 40%, transparent 90%)'
          }}
        />

        <section className="relative z-20 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-transparent animate-fadeIn w-full">
          <div className="relative flex items-center justify-center">
            <div className="absolute z-0 w-[90vw] sm:w-[600px] md:w-[700px] lg:w-[850px] h-[60vh] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-full opacity-0 pointer-events-none" />
            <div className="relative flex flex-col items-center z-10 px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8 md:py-10 max-w-[95%] sm:max-w-3xl md:max-w-4xl mx-auto">
              <h1
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-center mb-4 sm:mb-6 animate-slideInUp animation-delay-200 cursor-default text-white sm:text-transparent sm:bg-clip-text sm:bg-gray-200/70 sm:dark:bg-white/40 sm:backdrop-blur-md"
                style={{
                  WebkitTextStroke: "1px rgba(0, 0, 0, 0.2)",
                  WebkitTextStrokeColor: "var(--tw-prose-body)",
                }}
              >
                {words.map((word, index) => (
                  <span
                    key={index}
                    className="inline-block mx-0.5 sm:mx-1 transition duration-300 hover:text-gray-600 dark:hover:text-gray-200 hover:scale-105"
                  >
                    {word.text}
                  </span>
                ))}
              </h1>
              
              <h2 className="text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-700 dark:text-gray-300 mt-2 sm:mt-3 mb-4 sm:mb-6 font-normal animate-slideInUp animation-delay-400">
                <span className="font-bold text-gray-900 dark:text-gray-200">Full-stack developer</span>
                {" focused on "}
                <span className="font-bold text-gray-900 dark:text-gray-200">MERN</span> Stack,{" "}
                <span className="font-bold text-gray-900 dark:text-gray-200">Next.js</span>, TypeScript, and scalable systems &amp;{" "}
                <span className="font-bold text-gray-900 dark:text-gray-200">Problem Solver.</span>
              </h2>

              {/* Updated Marquee */}
              <footer className="w-full max-w-4xl overflow-hidden relative h-16 sm:h-20 flex items-center bg-gradient-to-r from-white/10 via-white/5 to-white/10 dark:from-gray-900/10 dark:via-gray-900/5 dark:to-gray-900/10 backdrop-blur-xl shadow-glass rounded-xl border border-white/20 hover:pause-marquee">
                <div className="flex animate-marquee whitespace-nowrap">
                  {[...marqueeItems, ...marqueeItems].map((item, index) => (
                    <span
                      key={index}
                      className="flex-shrink-0 mx-4 sm:mx-6 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-white/20 via-white/30 to-white/20 dark:from-gray-800/30 dark:via-gray-800/40 dark:to-gray-800/30 rounded-full backdrop-blur-md shadow-md text-gray-900 dark:text-gray-100 font-semibold text-sm sm:text-base tracking-wide transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-white/30 dark:hover:bg-gray-700/30"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </footer>
            </div>
          </div>
        </section>

        {/* Updated Inline CSS */}
        <style jsx>{`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slideInUp {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
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
          .animate-fadeIn {
            animation: fadeIn 1s ease-out;
          }
          .animate-slideInUp {
            animation: slideInUp 0.8s ease-out;
          }
          .animate-marquee {
            display: flex;
            animation: marquee 12s linear infinite;
            will-change: transform;
          }
          .hover:pause-marquee:hover .animate-marquee {
            animation-play-state: paused;
          }
          .animation-delay-200 {
            animation-delay: 0.2s;
            animation-fill-mode: both;
          }
          .animation-delay-400 {
            animation-delay: 0.4s;
            animation-fill-mode: both;
          }
          .shadow-glass {
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1), 0 4px 16px rgba(0, 0, 0, 0.05);
          }
          #wave-background canvas {
            display: block;
            width: 100% !important;
            height: 100% !important;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 0;
          }
          .animate-pageEnter {
            animation: pageEnter 0.8s ease-out both;
          }
        `}</style>
      </div>
    </div>
  );
}