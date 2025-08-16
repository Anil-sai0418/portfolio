import './App.css'
import Home from './components/Home/Home.jsx';
import Aboutme from './components/About/Aboutme.jsx';
import Skills from './components/Skills/Skills.jsx';
import Projects from './components/Project/Projects.jsx';
import Contactme from './components/Contact/Contactme.jsx';
import { NavbarDemo } from './components/ui/navbar';
import SplashCursor from './components/ui/SplahCurosr';
import React, { useEffect, useState } from 'react';

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

  return (
    <div className="dark bg-black text-white">
      <>
        {showPopup ? (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: 'rgba(0,0,0,0.7)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 9999,
              transition: 'opacity 0.3s ease'
            }}
          >
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.15)',
                padding: '1.5rem',
                borderRadius: '12px',
                boxShadow: '0 4px 32px rgba(0,0,0,0.3)',
                position: 'relative',
                minWidth: '260px',
                maxWidth: '95vw',
                width: '100%',
                maxHeight: '80vh',
                overflowY: 'auto',
                color: '#fff',
                textAlign: 'center',
                backdropFilter: 'blur(20px) saturate(180%)',
                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                border: '1px solid rgba(255,255,255,0.3)',
                transition: 'transform 0.3s ease, opacity 0.3s ease',
                transform: 'scale(0.9)',
                opacity: 0,
                animation: 'popupScale 0.3s ease forwards'
              }}
            >
              <div>
                <h2>Welcome!</h2>
                <p>For the best experience, please use a larger screen.</p>
              </div>
              <button
                style={{
                  padding: '0.6rem 1.5rem',
                  background: 'rgba(255,255,255,0.2)',
                  color: '#fff',
                  border: '1px solid rgba(255,255,255,0.3)',
                  borderRadius: '12px',
                  marginTop: '1.5rem',
                  fontSize: '1.1rem',
                  cursor: 'pointer',
                  fontWeight: 500,
                  boxShadow: '0 1px 4px rgba(0,0,0,0.10)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  transition: 'background 0.3s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.3)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
                onClick={() => setShowPopup(false)}
              >
                OK
              </button>
            </div>
          </div>
        ) : (
          <>
            <SplashCursor />
            <NavbarDemo>
              <Home />
              <Aboutme />
              <Skills />
              <Projects />
              <Contactme />
            </NavbarDemo>
          </>
        )}
      </>
    </div>
  );
}

export default App;
