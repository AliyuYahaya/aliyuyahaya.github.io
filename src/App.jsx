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
        <p>Cape Town-based Software Developer</p>
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
        <section className="about">
          <h2>About</h2>
          <div className='about-item'>
            <h4 className='about-item-header'>Location</h4>
            <p>Cape Town, South Africa</p>
          </div>
          <div className='about-item'>
            <h4 className='about-item-header'>Bio</h4>
            <p>
            I'm a Cape Town-based software engineer studying towards my BSc in Computer Science. My primary area of interest is Data Science and Artificial Intelligence with a curiosity to learn about different technologies
            <br />
            <br />
            Over the last two years I have had experience working on full stack applications. I've also founded a startup helping matric students figure out their career path.

            <br />
            <br />
            I'm on the lookout for an entry level role where I can grow my skills, learn new ones and contribute to the industry
            </p>
          </div>
          <div className='about-item'>
            <h4 className='about-item-header'>Resume</h4>
            <a href="https://docs.google.com/document/d/17dMb9Yp4QdZLIZA_Lw7LLKBbnJMQdGVROfT6hoDtiCg/edit?usp=sharing" className="resume-link" target='_blank'>Resume</a>
          </div>
        </section>
        <div className="sub-cluster">
          <section className="experience">
            <h2>Experience</h2>
            <div className="experience-items">
              <div className="experience-item">
                <h3>Jr. Web Developer</h3>
                <p className='company'>Cascade Software Solutions</p>
                <p>2022 - 2023</p>
              </div>
              <div className="experience-item">
                <h3>Founder</h3>
                <p className='company'>Uni-Leap</p>
                <p>2024 - Present</p>
              </div>
              <div className="experience-item">
                <h3>Web Developer</h3>
                <p className='company'>KRA Aviation</p>
                <p>2024 - Present</p>
              </div>
            </div>
          </section>

          <section className="skills">
            <h2>Skills</h2>
            <div className="skills-list">
              <div className="span">
                <img className='logo' src={html} alt='HTML' />
                <p>HTML</p>
              </div>
              <div className="span">
                <img className='logo' src={css} alt='CSS' />
                <p>CSS</p>
              </div>
              <div className="span">
                <img className='logo' src={js} alt='JavaScript' />
                <p>JavaScript</p>
              </div>
              <div className="span">
                <img className='logo' src={react} alt='React' />
                <p>React</p>
              </div>
              <div className="span">
                <img className='logo' src={vite} alt='Vite' />
                <p>Vite</p>
              </div>
              <div className="span">
                <img className='logo' src={node} alt='Node.js' />
                <p>Node.js</p>
              </div>
              <div className="span">
                <img className='logo' src={python} alt='Python' />
                <p>Python</p>
              </div>
              <div className="span">
                <img className='logo' src={react} alt='React Native' />
                <p>React Native</p>
              </div>
              <div className="span">
                <img className='logo' src={mongo} alt='MongoDB' />
                <p>MongoDB</p>
              </div>
              <div className="span">
                <img className='logo' src={firebase} alt='Firebase' />
                <p>Firebase</p>
              </div>
              <div className="span">
                <img className='logo' src={java} alt='Java' />
                <p>Java</p>
              </div>
            </div>
          </section>
        </div>
      </div>
      
      <section className="projects">
        <h2>Flagship Projects</h2>
        <div className="project-grid">
          <div className="project-item">
            <img className="project-logo" src={u_l} alt="uni-leap" />
            <h3>Uni-Leap Platform</h3>
            {getStatusBar("MVP working")}
            <p>Status: MVP working.</p>
            <a href="https://uni-leap.com/" target="_blank" rel="noopener noreferrer">Website 🡪</a>
          </div>
          <div className="project-item">
            <img className="project-logo" src={kra} alt="kra" />
            <h3>KRA Aviation Website</h3>
            {getStatusBar("60% Complete")}
            <p>Status: 60% Complete.</p>
            <a href="https://kraaviation.com/" target="_blank" rel="noopener noreferrer">Website 🡪</a>
          </div>
          <div className="project-item">
            <img className="project-logo" src={resume} alt="resume" />
            <h3>ResumeEvalu8 Frontend Redesign</h3>
            {getStatusBar("Complete")}
            <p>Status: Complete.</p>
            <a href="https://resume.digestii.com/" target="_blank" rel="noopener noreferrer">Website 🡪</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
