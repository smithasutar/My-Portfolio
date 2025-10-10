import { JSX } from 'react';
import './Skills.css';
import { 
  SiReact,
  SiJavascript,
  SiMysql, 
  SiPython, 
  SiC, 
  SiPreact, 
  SiGithub, 
  SiGit 
} from "react-icons/si";

interface Skill {
  id: number;
  name: string;
  icon: JSX.Element | string;
  color: string;
}

const skills: Skill[] = [
  {
    id: 1,
    name: "C#",
    icon: "C#",
    color: "#68217A"
  },
  {
    id: 2,
    name: "React JS",
    icon: <SiReact color="#61DAFB" />,
    color: "#20232A"
  },
  {
    id: 3,
    name: "C++",
    icon: "C++",
    color: "#00599C"
  },
  {
    id: 4,
    name: "JavaScript",
    icon: <SiJavascript color="#F7DF1E" />,
    color: "#323330"
  },
  {
    id: 5,
    name: "TypeScript",
    icon: "TS",
    color: "#007acc"
  },
  {
    id: 6,
    name: "SQL",
    icon: <SiMysql color="#f29111" />,
    color: "#00758F"
  },
  {
    id: 8,
    name: "Python",
    icon: <SiPython color="#3776AB" />,
    color: "#FFD43B"
  },
  {
    id: 9,
    name: "C",
    icon: <SiC color="#A8B9CC" />,
    color: "#00599C"
  },
  {
    id: 10,
    name: "Preact",
    icon: <SiPreact color="#673AB8" />,
    color: "#1F2937"
  },
  {
    id: 11,
    name: "GitHub",
    icon: <SiGithub color="#181717" />,
    color: "#EDEDED"
  },
  {
    id: 12,
    name: "Git",
    icon: <SiGit color="#F1502F" />,
    color: "#EDEDED"
  }
];

export function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <div className="skills-grid">
          {[...skills, ...skills].map((skill, index) => (
            <div key={index} className="skill-item">
              <div 
                className="skill-icon" 
                style={{ backgroundColor: skill.color }}
              >
                {skill.icon}
              </div>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

