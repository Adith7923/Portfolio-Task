import React from 'react';
import './Portfolio.css';
import logo from './assets/images/1708409271184.png';
import aboutImage from './assets/images/IMG_20230906_132227 (1).png';

const App = () => {
  return (
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
            <p>B.Tech Student</p>
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
                <p className="tab-links active-link" onClick={() => opentab('skills')}>Skills</p>
                <p className="tab-links" onClick={() => opentab('experience')}>Experience</p>
                <p className="tab-links" onClick={() => opentab('education')}>Education</p>
              </div>
              <div className="tab-contents active-tab" id="skills">
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
              <div className="tab-contents" id="experience">
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
              <div className="tab-contents" id="education">
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
              <img src="./assets/images/IMG_20240220_115448.jpg" alt="Light Follower Robot" />
              <div className="layer">
                <h3>Light Follower Robot</h3>
                <p>This robot follows the direction of light</p>
                <a href="New folder/LIC Project Report - Light Follower Robot-1.pdf">
                  <i className="fa-solid fa-up-right-from-square" />
                </a>
              </div>
            </div>
            <div className="work">
              <img src="./assets/images/photo_2024-02-20_13-47-23.jpg" alt="Traffic Sign Detector" />
              <div className="layer">
                <h3>Traffic Sign Detector</h3>
                <p>A traffic sign detection system using CNN and Keras in Python</p>
                <a href="New folder/traffic_adith.pdf">
                  <i className="fa-solid fa-up-right-from-square" />
                </a>
              </div>
            </div>
            <div className="work">
              <img src="./assets/images/photo_2024-02-20_11-55-31.jpg" alt="Vehicular Pollution Monitoring System" />
              <div className="layer">
                <h3>Vehicular Pollution Monitoring System</h3>
                <p>This device helps in continuous monitoring of pollution in vehicles</p>
                <a href="New folder/VEHICULAR_POLLUTION_MONITORING_SYSTEM__1_ (2).pdf">
                  <i className="fa-solid fa-up-right-from-square" />
                </a>
              </div>
            </div>
          </div>
          <a
            href="https://drive.google.com/drive/u/2/folders/1WDNnB4EkQ_xZGUBaVyfYpHF1dkFZ2t2X"
            className="btn"
          >
            See more
          </a>
        </div>
      </div>

      <div id="contact">
        <div className="container">
          <div className="row">
            <div className="contact-left">
              <h1 className="sub-title">Contact Me</h1>
              <p><i className="fas fa-envelope" /> adith7923@gmail.com</p>
              <p><i className="fas fa-phone" /> 9947397099</p>
              <div className="social-icons">
                <a href="https://www.facebook.com/profile.php?id=100011024111263"><i className="fab fa-facebook" /></a>
                <a href="https://twitter.com/AdithTM1"><i className="fab fa-twitter-square" /></a>
                <a href="https://www.instagram.com/adith.t.m/"><i className="fab fa-instagram-square" /></a>
                <a href="https://www.linkedin.com/in/adith-t-m/"><i className="fab fa-linkedin" /></a>
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
  );
};

export default App;
