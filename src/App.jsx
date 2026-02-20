import Navigation from './components/Navigation';
import ThemeToggle from './components/ThemeToggle';
import Hero from './sections/Hero';
import About from './sections/About';
import TechStack from './sections/TechStack';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Education from './sections/EngineeringPhilosophy';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navigation />
      <ThemeToggle />
      <main className="main-content">
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <Education />
      </main>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
