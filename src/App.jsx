import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitterSquare, faInstagramSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Project1 from './pages/Project1';
import Project2 from './pages/Project2';
import Project3 from './pages/Project3';
import './Portfolio.css';
import logo from './assets/images/1708409271184.png';
import aboutImage from './assets/images/IMG_20230906_132227 (1).png';
import project1 from './assets/images/project1.jpg';
import project2 from './assets/images/project2.jpg';
import project3 from './assets/images/project3.jpg';

const App = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const opentab = (tabname) => {
    setActiveTab(tabname);
  };

  return (
    <Router>
      <Routes>
        <Route path="/project1" element={<Project1 />} />
        <Route path="/project2" element={<Project2 />} />
        <Route path="/project3" element={<Project3 />} />
        <Route
          path="/"
          element={
            <div>
              <div id="header">
                <div className="container">
                  <nav>
                    <img src={logo} className="logo" alt="Logo" />
                    <ul>
                      <li><a href="#header">Home</a></li>
                      <li><a href="#about">About</a></li>
                      <li><a href="#services">Projects</a></li>
                      <li><a href="#contact">Contact me</a></li>
                    </ul>
                  </nav>
                  <div className="header-text">
                    <p>Software Developer</p>
                    <h1>
                      Hi, I'm <span>Adith T M </span> <br />
                      from Kerala, India
                    </h1>
                  </div>
                </div>
              </div>

              
              <div id="about">
                <div className="container">
                  <div className="row">
                    <div className="about-col-1">
                      <img src={aboutImage} alt="About" />
                    </div>
                    <div className="about-col-2">
                      <h1 className="sub-title">About me</h1>
                      <p>
                        Enthusiastic Electronics and Communication Engineering student
                        pursuing challenging opportunities, driven by an unyielding passion
                        for pioneering technologies. Aspiring to infuse innovation into
                        dynamic work environments and make a lasting impact with a solid
                        theoretical foundation.
                      </p>
                      <div className="tab-titles">
                        <p className={`tab-links ${activeTab === 'skills' ? 'active-link' : ''}`} onClick={() => opentab('skills')}>Skills</p>
                        <p className={`tab-links ${activeTab === 'experience' ? 'active-link' : ''}`} onClick={() => opentab('experience')}>Experience</p>
                        <p className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`} onClick={() => opentab('education')}>Education</p>
                      </div>
                      <div className={`tab-contents ${activeTab === 'skills' ? 'active-tab' : ''}`} id="skills">
                        <ul>
                          <li>
                            <span>Programming Languages</span>
                            <br />
                            Proficient in Python
                          </li>
                          <li>
                            <span>Video editing</span>
                            <br />
                            Proficient in Adobe Premier Pro, After Effects, Wondershare Filmora
                          </li>
                          <li>
                            <span>Electronics</span>
                            <br /> Basic knowledge of Raspberry Pi, Verilog
                          </li>
                        </ul>
                      </div>
                      <div className={`tab-contents ${activeTab === 'experience' ? 'active-tab' : ''}`} id="experience">
                        <ul>
                          <li>
                            <span>Project Intern (November 2023 - February 2024)</span>
                            <br />
                            Vikram Sarabhai Space Centre
                          </li>
                          <li>
                            <span>Intern (June 2023 - July 2023)</span>
                            <br />
                            Vikram Sarabhai Space Centre
                          </li>
                          <li>
                            <span>Video Editor (2022-23)</span>
                            <br />
                            IEEE ComSoc Kerala Chapter
                          </li>
                        </ul>
                      </div>
                      <div className={`tab-contents ${activeTab === 'education' ? 'active-tab' : ''}`} id="education">
                        <ul>
                          <li>
                            <span>NSS College of Engineering Palakkad (2020-2024)</span>
                            <br />
                            B.Tech. in Electronics and Communication Engineering
                            <br />
                            Minor degree in Python and Machine Learning (CSE Dept.)
                          </li>
                          <li>
                            <span>MNKMHSS PULAPATTA (2018-2020)</span>
                            <br />
                            Higher Secondary - Biology Science
                          </li>
                          <li>
                            <span>H S KATAMPAZHIPURAM (2018)</span>
                            <br />
                            Matriculation
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            
              <div id="services">
                <div className="container">
                  <h1 className="sub-title">My Projects</h1>
                  <div className="projects-list">
                    <div className="work">
                      <img src={project1} alt="Light Follower Robot" />
                      <div className="layer">
                        <h3>Light Follower Robot</h3>
                        <p>This robot follows the direction of light</p>
                        <Link to="/project1">
                          <FontAwesomeIcon icon={faUpRightFromSquare} />
                        </Link>
                      </div>
                    </div>
                    <div className="work">
                      <img src={project2} alt="Traffic Sign Detector" />
                      <div className="layer">
                        <h3>Traffic Sign Detector</h3>
                        <p>A traffic sign detection system using CNN and Keras in Python</p>
                        <Link to="/project2">
                          <FontAwesomeIcon icon={faUpRightFromSquare} />
                        </Link>
                      </div>
                    </div>
                    <div className="work">
                      <img src={project3} alt="Vehicular Pollution Monitoring System" />
                      <div className="layer">
                        <h3>Vehicular Pollution Monitoring System</h3>
                        <p>This device helps in continuous monitoring of pollution in vehicles</p>
                        <Link to="/project3">
                          <FontAwesomeIcon icon={faUpRightFromSquare} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

             
              <div id="contact">
                <div className="container">
                  <div className="row">
                    <div className="contact-left">
                      <h1 className="sub-title">Contact Me</h1>
                      <p><FontAwesomeIcon icon={faEnvelope} /> adith7923@gmail.com</p>
                      <p><FontAwesomeIcon icon={faPhone} /> 9947397099</p>
                      <div className="social-icons">
                        <a href="https://www.facebook.com/profile.php?id=100011024111263"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a href="https://twitter.com/AdithTM1"><FontAwesomeIcon icon={faTwitterSquare} /></a>
                        <a href="https://www.instagram.com/adith.t.m/"><FontAwesomeIcon icon={faInstagramSquare} /></a>
                        <a href="https://www.linkedin.com/in/adith-t-m/"><FontAwesomeIcon icon={faLinkedin} /></a>
                      </div>
                      <a href="assets/images/Adith_Resume (2).pdf" download="" className="btn btn2">Download CV</a>
                    </div>
                    <div className="contact-right">
                      <form name="submit-to-google-sheet">
                        <input type="text" name="Name" placeholder="Your Name" required />
                        <input type="email" name="Email" placeholder="Your Email" required />
                        <textarea name="Message" rows={6} placeholder="Your Message"></textarea>
                        <button type="submit" className="btn btn2">Submit</button>
                      </form>
                      <span id="msg" />
                    </div>
                  </div>
                </div>
                <div className="copyright">
                  <p>Copyright © Adith.</p>
                </div>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
