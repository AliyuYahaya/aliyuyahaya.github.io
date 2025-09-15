import React, { useState } from 'react';
import './App.css';
import linkedin from './assets/icons/linkedin.svg';
import github from './assets/icons/github.svg';
import email from './assets/icons/mail.svg';
import html from './assets/logos/html5-plain.svg';
import css from './assets/logos/css3-plain.svg';
import js from './assets/logos/javascript-plain.svg';
import react from './assets/logos/react-original.svg';
import vite from './assets/logos/Vite.svg';
import node from './assets/logos/nodejs-plain.svg';
import python from './assets/logos/python-plain.svg';
import mongo from './assets/logos/mongodb-plain-wordmark.svg';
import java from './assets/logos/java-plain.svg';
import firebase from './assets/logos/firebase-plain.svg';
import kra from './assets/logos/kra.jpg';
import u_l from './assets/logos/wb-logo.png';
import resume from './assets/logos/resume.png';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  function getStatusBar(status) {
    const statusMap = {
      "MVP working": 70,
      "60% Complete": 60,
      "Complete": 100
    };
    return (
      <div className="status-bar">
        <div className="status-bar-fill" style={{ width: `${statusMap[status]}%` }}></div>
      </div>
    );
  }

  return (
    <div className={`portfolio ${darkMode ? 'dark-mode' : ''}`}>
      <header className="header">
        <h1>Aliyu Yahaya</h1>
        <p>Software Engineer</p>
        <div className="contact-info">
          <span>Email: <a href="mailto:aliyuyahaya1453@gmail.com">aliyuyahaya1453@gmail.com</a></span> |
          <span>South Africa</span> |
          <span><a href="#">Website</a></span>
        </div>
        <button onClick={toggleDarkMode} className="dark-mode-toggle">
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/aliyuyahaya" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a href="https://github.com/AliyuYahaya" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub" />
          </a>
          <a href="mailto:aliyuyahaya1453@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src={email} alt="Email" />
          </a>
        </div>
      </header>
      
      <div className='cluster'>
        <section className="summary">
          <h2>Summary</h2>
          <p>
            Software Engineer with experience in frontend and backend development, cloud deployment, and mentoring. Passionate about building modern web platforms and helping others grow in tech.
          </p>
        </section>
        <section className="education">
          <h2>Education</h2>
          <div className="education-item">
            <h3>Varsity College</h3>
            <p>BSc. Computer Science</p>
            <p>Jan 2024 – Dec 2026</p>
          </div>
        </section>
        <section className="experience">
          <h2>Work Experience</h2>
          <div className="experience-items">
            <div className="experience-item">
              <h3>Web Developer</h3>
              <p className='company'>Cascade Software Solutions</p>
              <p>Nov 2023 – Mar 2024</p>
              <ul>
                <li>Designed, developed, and deployed custom websites for clients.</li>
                <li>Built mobile responsive sites and improved SEO.</li>
                <li>Utilized cloud services for deployment.</li>
              </ul>
            </div>
            <div className="experience-item">
              <h3>Freelancer</h3>
              <p>Jan 2024 – Jun 2025</p>
              <ul>
                <li>Developed frontends and logos for ZATech members.</li>
                <li>Used Figma, Canva, Python (Flask, FastAPI), React Native, and React.</li>
              </ul>
            </div>
            <div className="experience-item">
              <h3>Student Mentor</h3>
              <p>GRIT3sixT, IIE’s Varsity College</p>
              <p>Feb 2025 – Jun 2025</p>
              <ul>
                <li>Mentored first-year students in coding and university life.</li>
                <li>Helped set up Github, LinkedIn, and first projects.</li>
              </ul>
            </div>
            <div className="experience-item">
              <h3>Software Engineering Intern</h3>
              <p>Code Infinity</p>
              <p>Jun 2025 – Present</p>
              <ul>
                <li>Revamped onboarding workflow using Python.</li>
                <li>Integrated multiple APIs in Slack workflow.</li>
                <li>Collaborated with a larger team.</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="skills">
          <h2>Tools & Skills</h2>
          <div className="skills-list">
            <div><strong>Frontend:</strong> HTML, CSS, JavaScript, React.js, Figma, VueJS, NextJS</div>
            <div><strong>Software Dev:</strong> Java, C#(MVC), Figma, Python</div>
            <div><strong>Backend:</strong> MongoDB, PostgreSQL, Supabase, Firebase, Azure, Tina4</div>
            <div><strong>Skills:</strong> Critical thinking, problem solving, communication, fast learner, attention to detail</div>
          </div>
        </section>
      </div>
      
      <section className="projects">
        <h2>Freelance & Personal Projects</h2>
        <div className="project-grid">
          <div className="project-item">
            <h3>ResumeEvalu8</h3>
            <p>An AI Resume Analysis for employers. Figma redesign and full stack development. <strong>Status:</strong> Live in production.</p>
            <a href="#">Website 🡪</a>
          </div>
          <div className="project-item">
            <h3>KRA Aviation Website</h3>
            <p>Corporate website for KRA Aviation. Built with NextJS. <strong>Status:</strong> Complete.</p>
            <a href="#">Website 🡪</a>
          </div>
          <div className="project-item">
            <h3>HouseParties</h3>
            <p>Events Management platform. React + Python + NodeJs + Postgres. <strong>Status:</strong> Complete.</p>
          </div>
          <div className="project-item">
            <h3>Allcare Forms</h3>
            <p>Internal forms tool for Allcare Specialists Hospital. NextJs + Supabase. Enhanced RBAC and Auth. <strong>Status:</strong> Complete.</p>
          </div>
          <div className="project-item">
            <h3>Royal Fees</h3>
            <p>School Management tool for Kano Royal Academy. NextJs + Supabase + Shadcn. Invoicing and fees tracking. <strong>Status:</strong> Complete.</p>
          </div>
          <div className="project-item">
            <h3>Allcare HMS</h3>
            <p>Internal HMS for Allcare Specialists Hospitals. React + Vite + Tailwind + Supabase and Clerk. Highly secure. <strong>Status:</strong> Complete.</p>
          </div>
          <div className="project-item">
            <h3>C# MVC (University Project, Year 2, Sem 1)</h3>
            <p>C# MVC Web App for Cloud Development Module. <strong>Status:</strong> Part 3/3.</p>
          </div>
          <div className="project-item">
            <h3>C# MVC (University Project, Year 2, Sem 2)</h3>
            <p>C# MVC Web App for Cloud Development Module. <strong>Status:</strong> Part 1/3.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
