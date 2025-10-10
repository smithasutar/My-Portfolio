import './aboutMe.css'
import { Footer } from './Footer'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className="about-page">
        {/* Navigation */}
      <nav className="hero-nav">
        <Link to="/"><div className="logo">S</div></Link>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">Projects</Link></li>
          <li><Link to="/about">About Me</Link></li>
          <li><Link to="/">Contact</Link></li>
        </ul>
      </nav>


      {/* Main Content */}
      <main className="about-main">
        <div className="about-content">
          <div className="about-image">
            <img src="./public/Image0.jpg" alt="Profile" className="placeholder-circle" />
          </div>
          <div className="about-text">
            <p>
              I’m a passionate and detail-oriented software developer pursuing a Bachelor of Computer Science at the University of Waterloo and a Bachelor of Business Administration at Wilfrid Laurier University. My background combines strong technical foundations with business insight, allowing me to approach problems with both analytical precision and strategic thinking. I’ve completed three tech internships, gaining hands-on experience in software development, system optimization, and product design across diverse environments.
              My work spans from building responsive web applications using Preact, FastAPI, and modern JavaScript frameworks, to solving complex algorithmic problems in C++ and extending kernel-level file systems to support advanced functionality. I’m driven by curiosity and creativity, whether optimizing performance, designing intuitive interfaces, or developing AI-driven features. With interests in fashion technology, AI applications, and digital wellness, I aim to create software that’s both innovative and impactful. I bring a balance of technical skill, business understanding, and a collaborative mindset to every project I take on.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default About
