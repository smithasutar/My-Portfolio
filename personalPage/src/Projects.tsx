import './Projects.css';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  skills: string[];
  githubUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "onTrack",
    description: "onTrack is a simple and motivating Android app designed to help you start good habits and stay consistent with your personal goals. Track your daily routines, visualize progress, and stay accountable all in one minimal and beautiful app.",
    image: "/Image1.png",
    skills: ["Android Studio", "Kotlin", "Java"],
    githubUrl: "https://github.com/smithasutar/onTrack"
  },
  {
    id: 2,
    title: "ZenZone",
    description: "ZenZone is a simple web-based chat application that provides supportive, AI-powered conversations for mental wellness. It is not a replacement for professional care, but a space for calm, mindful interaction and emotional reflection.",
    image: "/Image2.png",
    skills: ["Python", "HTML", "CSS3", "JavaScript", "FastAPI"],
    githubUrl: "https://github.com/smithasutar/ZenZone"
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website showcasing projects and skills. An online resume to display my experience and skill set. Built with React and styled with CSS modules for optimal performance.",
    image: "/Image.png",
    skills: ["TypeScript", "React", "CSS3", "Vite"],
    githubUrl: "https://github.com/smithasutar/My-Portfolio"
  },
  {
    id: 4,
    title: "Colourodinate",
    description: "Colourodinate is a C++ application that detects faces in an image and identifies the skin undertone (cool, warm, or neutral) using OpenCV. It demonstrates computer vision techniques including face detection and color analysis.",
    image: "/Image3.png",
    skills: ["OpenCV", "C++"],
    githubUrl: "https://github.com/smithasutar/Colourodinate"
  },
  {
    id: 5,
    title: "Kinder - Good Deeds Wall",
    description: "Good Deeds Wall is a playful, uplifting web app where anyone can anonymously share a kind act they did or witnessed. It’s a small step toward making the internet a more positive and encouraging place 💖.",
    image: "/Image4.png",
    skills: ["TypeScript", "CSS3", "React", "Netlify", "MongoDB", "ExpressJS", "NodeJS"],
    githubUrl: "https://github.com/smithasutar/Kind-er"
  },
  {
    id: 6,
    title: "Pinterest Trend Predictor",
    description: "This project predicts the next week's popularity score of Pinterest trends using an LSTM (Long Short-Term Memory) model. It reads historical trend data from a CSV file exported from Pinterest and provides predictions through a Flask API.",
    image: "/Image5.png",
    skills: ["Python", "CSS3", "HTML", "JavaScript", "FlaskAPI", "Pytorch", "scikit-learn", "Pandas", " "],
    githubUrl: "https://github.com/smithasutar/Pinterest-Trend-Predictor"
  }
];

export function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-skills">
                  <span className="skills-label">Skills Used</span>
                  <div className="skills-tags">
                    {project.skills.map((skill, index) => (
                      <span key={index} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
                
                <a 
                  href={project.githubUrl} 
                  className="github-link"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

