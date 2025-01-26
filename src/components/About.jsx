import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPython,
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faJava,
  faVideo,
  faMicrochip,
  faBriefcase,
  faGraduationCap,
  faSchool,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import aboutImage from "../assets/images/IMG_20230906_132227 (1).png";
import "../styles/Portfolio.css";
const About = () => {
  const [activeTab, setActiveTab] = useState("skills");

  const opentab = (tabname) => {
    setActiveTab(tabname);
  };

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="about-col-1">
            <img src={aboutImage} alt="About" />
          </div>
          <div className="about-col-2">
            <h1 className="sub-title">About me</h1>
            <p className="about-text">
              Passionate Software Developer with a strong foundation in coding
              and problem-solving. Focused on creating innovative solutions and
              pushing the boundaries of technology. Eager to contribute to
              dynamic environments, constantly learning, and applying new skills
              to solve complex challenges.
            </p>
            <div className="tab-titles">
              <p
                className={`tab-links ${
                  activeTab === "skills" ? "active-link" : ""
                }`}
                onClick={() => opentab("skills")}
              >
                Skills
              </p>
              <p
                className={`tab-links ${
                  activeTab === "experience" ? "active-link" : ""
                }`}
                onClick={() => opentab("experience")}
              >
                Experience
              </p>
              <p
                className={`tab-links ${
                  activeTab === "education" ? "active-link" : ""
                }`}
                onClick={() => opentab("education")}
              >
                Education
              </p>
            </div>
            <div
              className={`tab-contents ${
                activeTab === "skills" ? "active-tab" : ""
              }`}
              id="skills"
            >
              <ul>
                <li>
                  <span>
                    <FontAwesomeIcon icon={faPython} className="skill-icon" />{" "}
                    Programming Languages
                  </span>
                  <br />
                  <br />
                  <FontAwesomeIcon icon={faPython} className="skill-icon" />{" "}
                  Python ,{" "}
                  <FontAwesomeIcon icon={faHtml5} className="skill-icon" /> HTML
                  ,{" "}
                  <FontAwesomeIcon icon={faCss3Alt} className="skill-icon" />{" "}
                  CSS ,{" "}
                  <FontAwesomeIcon icon={faJsSquare} className="skill-icon" />{" "}
                  JavaScript , C ,{" "}
                  <FontAwesomeIcon icon={faJava} className="skill-icon" /> Java
                </li>
                <li>
                  <FontAwesomeIcon icon={faVideo} className="skill-icon" />
                  <span>Video Editing</span>
                  <br />
                  <br />
                  Proficient in Adobe Premiere Pro, After Effects, Wondershare
                  Filmora
                </li>
                <li>
                  <FontAwesomeIcon icon={faMicrochip} className="skill-icon" />
                  <span>Electronics</span>
                  <br />
                  <br />
                  Basic knowledge of Raspberry Pi, Verilog
                </li>
              </ul>
            </div>

            <div
              className={`tab-contents ${
                activeTab === "experience" ? "active-tab" : ""
              }`}
              id="experience"
            >
              <ul>
                <li>
                  <span>
                    <FontAwesomeIcon icon={faBriefcase} className="exp-icon" />
                    Project Intern (November 2023 - February 2024)
                  </span>
                  <br />
                  <br />
                  Vikram Sarabhai Space Centre
                </li>
                <li>
                  <FontAwesomeIcon icon={faBriefcase} className="exp-icon" />
                  <span>Intern (June 2023 - July 2023)</span>
                  <br />
                  <br />
                  Vikram Sarabhai Space Centre
                </li>
                <li>
                  <FontAwesomeIcon icon={faVideo} className="skill-icon" />
                  <span>Video Editor (2022-23)</span>
                  <br />
                  <br />
                  IEEE ComSoc Kerala Chapter
                </li>
              </ul>
            </div>
            <div
              className={`tab-contents ${
                activeTab === "education" ? "active-tab" : ""
              }`}
              id="education"
            >
              <ul>
                <li>
                  <FontAwesomeIcon
                    icon={faGraduationCap}
                    className="exp-icon"
                  />
                  <span>
                    NSS College of Engineering Palakkad (2020-2024)
                  </span>
                  <br />
                  <br />
                  B.Tech. in Electronics and Communication Engineering
                  <br />
                  Minor degree in Python and Machine Learning (CSE Dept.)
                </li>
                <li>
                  <FontAwesomeIcon icon={faSchool} className="exp-icon" />
                  <span>MNKMHSS PULAPATTA (2018-2020)</span>
                  <br />
                  <br />
                  Higher Secondary - Biology Science
                </li>
                <li>
                  <FontAwesomeIcon icon={faBook} className="exp-icon" />
                  <span>H S KATAMPAZHIPURAM (2018)</span>
                  <br />
                  <br />
                  Matriculation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
