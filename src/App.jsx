import './App.css'
import Home from './components/Home/Home.jsx';
import Aboutme from './components/About/Aboutme.jsx';
import Skills from './components/Skills/Skills.jsx';
import Projects from './components/Project/Projects.jsx';
import Contactme from './components/Contact/Contactme.jsx';
import { NavbarDemo } from './components/ui/navbar';
import React, { useEffect, useState, lazy, Suspense } from 'react';

import CustomCursor from './components/ui/CustomCursor.jsx';
const SplashCursor = lazy(() => import('./components/ui/SplahCurosr'));

function App() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Inject popupScale keyframes only once
    const styleId = 'popup-scale-animation-keyframes';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.innerHTML = `
        @keyframes popupScale {
          0% {
            transform: scale(0.9);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `;
      document.head.appendChild(style);
    }
    if (window.innerWidth < 1024 && !sessionStorage.getItem("popupShownSession")) {
      setShowPopup(true);
      sessionStorage.setItem("popupShownSession", "true");
    }
  }, []);

  // Track window width for conditional rendering - REMOVED for performance

  return (
    <div className="dark bg-black text-white relative">
      <>
        {showPopup && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 transition-opacity duration-300">
            <div className="relative w-full max-w-[95vw] min-w-[260px] max-h-[80vh] overflow-y-auto rounded-xl border border-white/30 bg-white/15 p-6 text-center text-white shadow-[0_4px_32px_rgba(0,0,0,0.3)] backdrop-blur-[20px] backdrop-saturate-[180%] animate-[popupScale_0.3s_ease_forwards]">
              <div>
                <h2>Welcome!</h2>
                <p>For the best experience, please use a larger screen.</p>
              </div>
              <button
                className="mt-6 px-6 py-2.5 rounded-xl border border-white/30 bg-white/20 text-lg font-medium text-white shadow-sm backdrop-blur-[10px] transition-colors duration-300 hover:bg-white/30 cursor-pointer"
                onClick={() => setShowPopup(false)}
              >
                OK
              </button>
            </div>
          </div>
        )}

        <div className={showPopup ? "blur-sm pointer-events-none" : ""}>
          <div className="hidden lg:block">
            <Suspense fallback={null}>
              <SplashCursor />
            </Suspense>
            <CustomCursor />
          </div>
          <NavbarDemo>
            <Home />
            <Aboutme />
            <Skills />
            <Projects />
            <Contactme />
          </NavbarDemo>
        </div>
      </>
    </div>
  );
}
const designer = "DESIGNED BY";
const name = "ANIL SAI";

console.log(
  `%c${designer}\n%c${name}`,
  // Subtitle: Muted Silver/Gray
  "color: #a1a1a6; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 11px; font-weight: 600; letter-spacing: 0.2em; line-height: 2;",
  // Name: Brilliant White with a subtle "glow" for depth
  "color: #ffffff; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 48px; font-weight: 800; letter-spacing: -0.03em; text-shadow: 0 0 10px rgba(255,255,255,0.2);"
);


export default App;
