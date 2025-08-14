import './App.css'
import Home from './components/Home/Home.jsx';
import Aboutme from './components/About/Aboutme.jsx';
import Skills from './components/Skills/Skills.jsx';
import Projects from './components/Project/Projects.jsx';
import Contactme from './components/Contact/Contactme.jsx';
import { NavbarDemo } from './components/ui/navbar';
import SplashCursor from './components/ui/SplahCurosr';

function App() {
  return (
    <div className="dark bg-black text-white">
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
    </div>
  );
}

export default App;
