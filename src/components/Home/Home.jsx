import { useEffect, useRef } from "react";
import * as THREE from 'three';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function CrystalSphereBackground() {
  const canvasRef = useRef(null);



  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Create circular texture
    const getTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 32;
      canvas.height = 32;
      const ctx = canvas.getContext('2d');
      ctx.beginPath();
      ctx.arc(16, 16, 16, 0, 2 * Math.PI);
      ctx.fillStyle = '#ffffff';
      ctx.fill();
      const texture = new THREE.CanvasTexture(canvas);
      return texture;
    };

    // Create particles in a sphere formation
    const particleCount = 3000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const originalPositions = new Float32Array(particleCount * 3);

    const radius = 25;

    for (let i = 0; i < particleCount; i++) {
      // Fibonacci sphere distribution for even particle spread
      const phi = Math.acos(-1 + (2 * i) / particleCount);
      const theta = Math.sqrt(particleCount * Math.PI) * phi;

      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      originalPositions[i * 3] = x;
      originalPositions[i * 3 + 1] = y;
      originalPositions[i * 3 + 2] = z;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Create particle material with circular shape
    const material = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.2, // Slightly larger to compensate for circular shape
      transparent: true,
      opacity: 0.6,
      sizeAttenuation: true,
      map: getTexture(),
      alphaTest: 0.5
    });

    const particles = new THREE.Points(geometry, material);
    particles.scale.set(0, 0, 0); // Start unseen
    scene.add(particles);

    camera.position.z = 50;

    // Animation loop
    let animationId;
    const clock = new THREE.Clock();

    // Entry animation state
    let currentScale = 0;
    const targetScale = 1;

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Entry animation: Smoothly scale up
      currentScale += (targetScale - currentScale) * 0.02;
      particles.scale.set(currentScale, currentScale, currentScale);

      // Gentle constant rotation
      particles.rotation.y = elapsedTime * 0.05;
      particles.rotation.x = Math.sin(elapsedTime * 0.2) * 0.1;

      // Subtle breathing animation
      const posArray = geometry.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const originalX = originalPositions[i3];
        const originalY = originalPositions[i3 + 1];
        const originalZ = originalPositions[i3 + 2];

        const noise = Math.sin(elapsedTime * 0.5 + i * 0.1) * 0.3;

        posArray[i3] = originalX + (originalX / radius) * noise;
        posArray[i3 + 1] = originalY + (originalY / radius) * noise;
        posArray[i3 + 2] = originalZ + (originalZ / radius) * noise;
      }
      geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [window.innerHeight * 1.8, window.innerHeight * 2.8], [1, 0]);
  const y = useTransform(scrollY, [window.innerHeight * 1.8, window.innerHeight * 2.8], [0, -100]);
  const filter = useTransform(scrollY, [window.innerHeight * 1.8, window.innerHeight * 2.8], ["blur(0px)", "blur(10px)"]);

  return (
    <div id="home" className="relative w-full h-screen overflow-hidden">
      {/* Three.js Canvas Background - Fixed & Scroll Driven */}
      <motion.div
        className="fixed inset-0 w-full h-full z-0"
        style={{ opacity, y, filter, background: 'radial-gradient(circle at center, #1a1a1a 0%, #000000 100%)' }}
      >
        <canvas
          ref={canvasRef}
          className="w-full h-full"
        />
        {/* Vignette overlay attached to background */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(circle at center, transparent 0%, transparent 50%, rgba(0,0,0,0.4) 100%)'
        }} />
      </motion.div>

      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <div className="max-w-4xl w-full px-8 mb-24 pointer-events-auto">
          <div className="flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-16 h-[2px] bg-white/30" />
              <span className="text-sm font-mono text-white/60 uppercase tracking-[0.3em]">My Expertise</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7, ease: [0.25, 0.1, 0.25, 1.0] }}
              className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter mb-6 md:mb-8 text-white mix-blend-overlay opacity-90"
            >
              FULL STACK<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">DEVELOPER.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9, ease: [0.25, 0.1, 0.25, 1.0] }}
              className="text-lg sm:text-xl md:text-2xl text-white/70 leading-relaxed font-light max-w-2xl bg-black/20 backdrop-blur-sm p-4 md:p-6 rounded-2xl border border-white/5 inline-block"
            >
              Solving complex problems with a modern tech stack. I focus on <span className="text-white font-medium">performance</span>, <span className="text-white font-medium">scalability</span>, and <span className="text-white font-medium">premium user experience</span>.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}