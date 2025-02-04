import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPython,
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faJava,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBriefcase,
  faGraduationCap,
  faCogs,
  faCheck,
  faLightbulb
} from "@fortawesome/free-solid-svg-icons";
import aboutImage from "../assets/images/IMG_20230906_132227 (1).png";
import SkillIconCarousel from "./SkillIconCarousel";
/* Slick Carousel styles */



const About = () => {
  const [activeTab, setActiveTab] = useState("skills");
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from the backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const skillsResponse = await fetch("http://localhost:8080/api/skills");
        const experienceResponse = await fetch("http://localhost:8080/api/experience");
        const educationResponse = await fetch("http://localhost:8080/api/education");
        console.log(skillsResponse);

        if (!skillsResponse.ok || !experienceResponse.ok || !educationResponse.ok) {
          throw new Error("Failed to fetch data.");
        }

        const skillsData = await skillsResponse.json();
        const experienceData = await experienceResponse.json();
        const educationData = await educationResponse.json();
        // console.log(skillsData);
        

        setSkills(skillsData);
        console.log("fetch skill:",skills);
        setExperience(experienceData);
        setEducation(educationData);
        
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="about-col-1">
            <img src={aboutImage} alt="About" />
          </div>
          <div className="about-col-2">
            <h1 className="sub-title">About Me</h1>
            <p className="about-text">
              Passionate Software Developer with a strong foundation in coding
              and problem-solving. Focused on creating innovative solutions and
              pushing the boundaries of technology. Eager to contribute to
              dynamic environments, constantly learning, and applying new
              skills to solve complex challenges.
            </p>
            <div className="tab-titles">
              <p
                className={`tab-links ${activeTab === "skills" ? "active-link" : ""}`}
                onClick={() => setActiveTab("skills")}
              >
                Skills
              </p>
              <p
                className={`tab-links ${activeTab === "experience" ? "active-link" : ""}`}
                onClick={() => setActiveTab("experience")}
              >
                Experience
              </p>
              <p
                className={`tab-links ${activeTab === "education" ? "active-link" : ""}`}
                onClick={() => setActiveTab("education")}
              >
                Education
              </p>
            </div>
            <div className="tab-contents">

              {loading ? (
                <p>Loading...</p>
              ) : error ? (
                <p className="error-message">{error}</p>
              ) 
              : (
                <>
                  {activeTab === "skills" && (
                    <ul>
                      {skills.map((skill, index) =>{
                      console.log(skill.category)
                      console.log(skill.name)
                        return (
                        <li key={index}>
                          <span>
                            <FontAwesomeIcon icon={faLightbulb} className="skill-icon" />
                            {skill.category}
                          </span>
                          <br />
                          <br />
                            {skill.name}
                        </li>
                      )})}
                    </ul>
                  )}

                  {activeTab === "experience" && (
                    <ul>
                      {experience.map((exp, index) => (
                        <li key={index}>
                          <FontAwesomeIcon icon={faBriefcase} className="exp-icon" />
                          <span>
                            {exp.title} ({exp.duration})
                          </span>
                          <br />
                          <br />
                          {exp.company}
                        </li>
                      ))}
                    </ul>
                  )}

                  {activeTab === "education" && (
                    <ul>
                      {education.map((edu, index) => (
                        <li key={index}>
                          <FontAwesomeIcon
                            icon={faGraduationCap}
                            className="edu-icon"
                          />
                          <span>
                              {edu.institution} ({edu.duration})
                          </span>
                          <br />
                          <br />
                          {edu.degree}
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
