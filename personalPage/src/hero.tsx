import HeroBackground from "./heroBackground.tsx";
import './Hero.css';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Hero() {
  const fullName = "SMITHA SUTAR";
  const [displayedName, setDisplayedName] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  // Typing effect for name
  useEffect(() => {
    const speed = isDeleting ? 50 : 150; // faster when deleting
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedName(fullName.slice(0, index + 1));
        setIndex(prev => prev + 1);
        if (index + 1 === fullName.length) {
          setTimeout(() => setIsDeleting(true), 1000); // wait 1s at full name
        }
      } else {
        setDisplayedName(fullName.slice(0, index - 1));
        setIndex(prev => prev - 1);
        if (index - 1 === 0) {
          setIsDeleting(false);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting]);

  // Rotating job titles
  const roles = ["Software Engineer", "Web Developer", "Problem Solver", "Data Analyst", "Business Analyst"];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex(prev => (prev + 1) % roles.length);
    }, 3000); // change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero" id="hero">
      {/* Animated Background */}
      <HeroBackground />

      {/* Navigation */}
      <nav className="hero-nav">
        <Link to="/"><div className="logo">S</div></Link>
        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><Link to="/about">About Me</Link></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Content */}
      <div className="hero-content">
        <h1 className="typing">{displayedName}<span className="cursor">|</span></h1>
        <p className="rotating-word">{roles[roleIndex]}</p>
      </div>
    </div>
  );
}
