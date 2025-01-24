import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitterSquare,
  faInstagramSquare,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import Project1 from "./pages/Project1";
import Project2 from "./pages/Project2";
import Project3 from "./pages/Project3";
import Project4 from "./pages/Project4";
import "./styles/Portfolio.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import logo from "./assets/images/1708409271184.png";
import aboutImage from "./assets/images/IMG_20230906_132227 (1).png";
import project1 from "./assets/images/LFR.png";
import project2 from "./assets/images/TSR.png";
import project3 from "./assets/images/VPMS.webp";
import project4 from "./assets/images/FPGA.png";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import { Helmet } from "react-helmet";
import {
  faPython,
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faJava,
} from "@fortawesome/free-brands-svg-icons";
import { faMicrochip, faVideo } from "@fortawesome/free-solid-svg-icons";
import SplitText from "./blocks/TextAnimations/SplitText/SplitText";
import axios from "axios";
import { Player } from '@lottiefiles/react-lottie-player';
const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

const App = () => {
  const [activeTab, setActiveTab] = useState("skills");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [formSuccess, setFormSuccess] = useState("");

  const opentab = (tabname) => {
    setActiveTab(tabname);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // For name field, allow only alphabets and spaces
    if (name === "name") {
      const regex = /^[A-Za-z\s]*$/; // Allows only letters and spaces
      if (regex.test(value) || value === "") {
        setFormData({ ...formData, [name]: value });
      } else {
        setFormErrors({
          ...formErrors,
          name: "Name can only contain letters and spaces.",
        });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateForm = () => {
    const errors = {};

    // Validate name field
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    } else if (!/^[A-Za-z\s]*$/.test(formData.name)) {
      errors.name = "Name can only contain letters and spaces.";
    }

    // Validate email field
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      errors.email = "Enter a valid email address";
    }

    // Validate message field
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
        const ContactMessageData = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      };

      axios
    .post('http://localhost:8080/api/contact', ContactMessageData )
    .then((response) => {
      setName("");
      setEmail("");
      setMessage("");
    })
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      console.log("Form Data Submitted:", formData);
      setFormSuccess(
        <SplitText
        text="Adith T M"
        className="text-2xl font-semibold text-center"
        delay={150}
        animationFrom={{
          opacity: 0,
          transform: "translate3d(0,50px,0)",
        }}
        animationTo={{
          opacity: 1,
          transform: "translate3d(0,0,0)",
        }}
        easing="easeOutCubic"
        threshold={0.2}
        rootMargin="-50px"
        onLetterAnimationComplete={handleAnimationComplete}
      />
      );
      setFormData({ name: "", email: "", message: "" });
      setFormErrors({});
    } else {
      setFormErrors(errors);
      setFormSuccess("");
    }
    
  };

  return (
    <Router>
      <Helmet>
        <title>Adith T M</title>
      </Helmet>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/project1" element={<Project1 />} />
        <Route path="/project2" element={<Project2 />} />
        <Route path="/project3" element={<Project3 />} />
        <Route path="/project4" element={<Project4 />} />
        <Route
          path="/"
          element={
            <div>
              {/* Header Section */}
              <div id="header">
                <div className="container">
                  <nav>
                    <img src={logo} className="logo" alt="Logo" />
                    <ul>
                      <li>
                        <a href="#header">Home</a>
                      </li>
                      <li>
                        <a href="#about">About</a>
                      </li>
                      <li>
                        <a href="#services">Projects</a>
                      </li>
                      <li>
                        <a href="#contact">Contact me</a>
                      </li>
                    </ul>
                  </nav>
                  <div className="header-text">
                    <p>Software Developer</p>
                    <h1>
                      Hi, I'm{" "}
                      <span>
                        <SplitText
                          text="Adith T M"
                          className="text-2xl font-semibold text-center"
                          delay={150}
                          animationFrom={{
                            opacity: 0,
                            transform: "translate3d(0,50px,0)",
                          }}
                          animationTo={{
                            opacity: 1,
                            transform: "translate3d(0,0,0)",
                          }}
                          easing="easeOutCubic"
                          threshold={0.2}
                          rootMargin="-50px"
                          onLetterAnimationComplete={handleAnimationComplete}
                        />
                      </span>
                      <br /> from Kerala, India
                    </h1>
                  </div>
                </div>
              </div>

              {/* About Section */}
              <div id="about">
                <div className="container">
                  <div className="row">
                    <div className="about-col-1">
                      <img src={aboutImage} alt="About" />
                    </div>
                    <div className="about-col-2">
                      <h1 className="sub-title">About me</h1>
                      <p>
                        Passionate Software Developer with a strong foundation
                        in coding and problem-solving. Focused on creating
                        innovative solutions and pushing the boundaries of
                        technology. Eager to contribute to dynamic environments,
                        constantly learning, and applying new skills to solve
                        complex challenges.
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
                              <FontAwesomeIcon
                                icon={faPython}
                                className="skill-icon"
                              />{" "}
                              Programming Languages
                            </span>
                            <br />
                            <br />
                            <FontAwesomeIcon
                              icon={faPython}
                              className="skill-icon"
                            />{" "}
                            Python ,{" "}
                            <FontAwesomeIcon
                              icon={faHtml5}
                              className="skill-icon"
                            />{" "}
                            HTML ,{" "}
                            <FontAwesomeIcon
                              icon={faCss3Alt}
                              className="skill-icon"
                            />{" "}
                            CSS ,{" "}
                            <FontAwesomeIcon
                              icon={faJsSquare}
                              className="skill-icon"
                            />{" "}
                            JavaScript , C ,{" "}
                            <FontAwesomeIcon
                              icon={faJava}
                              className="skill-icon"
                            />{" "}
                            Java
                          </li>
                          <li>
                            <FontAwesomeIcon
                              icon={faVideo}
                              className="skill-icon"
                            />
                            <span>Video Editing</span>
                            <br />
                            <br />
                            Proficient in Adobe Premiere Pro, After Effects,
                            Wondershare Filmora
                          </li>
                          <li>
                            <FontAwesomeIcon
                              icon={faMicrochip}
                              className="skill-icon"
                            />
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
                              Project Intern (November 2023 - February 2024)
                            </span>
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
                      <div
                        className={`tab-contents ${
                          activeTab === "education" ? "active-tab" : ""
                        }`}
                        id="education"
                      >
                        <ul>
                          <li>
                            <span>
                              NSS College of Engineering Palakkad (2020-2024)
                            </span>
                            <br />
                            B.Tech. in Electronics and Communication Engineering
                            <br />
                            Minor degree in Python and Machine Learning (CSE
                            Dept.)
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

              {/* Projects Section */}
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
                        <p>
                          A traffic sign detection system using CNN and Keras in
                          Python
                        </p>
                        <Link to="/project2">
                          <FontAwesomeIcon icon={faUpRightFromSquare} />
                        </Link>
                      </div>
                    </div>
                    <div className="work">
                      <img
                        src={project3}
                        alt="Vehicular Pollution Monitoring System"
                      />
                      <div className="layer">
                        <h3>Vehicular Pollution Monitoring System</h3>
                        <p>
                          This device helps in continuous monitoring of
                          pollution in vehicles
                        </p>
                        <Link to="/project3">
                          <FontAwesomeIcon icon={faUpRightFromSquare} />
                        </Link>
                      </div>
                    </div>
                    <div className="work">
                      <img src={project4} alt="FPGA" />
                      <div className="layer">
                        <h3>FPGA Based GMSK Modulator and Demodulator</h3>
                        <p>
                          Implements Gaussian Minimum Shift Keying modulation
                          and demodulation using FPGA
                        </p>
                        <Link to="/project4">
                          <FontAwesomeIcon icon={faUpRightFromSquare} />
                        </Link>
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

              {/* Contact Section */}
              <div id="contact">
                <div className="container">
                  <div className="row">
                    <div className="contact-left">
                      <h1 className="sub-title">Contact Me</h1>
                      <p>
                        <FontAwesomeIcon icon={faEnvelope} />{" "}
                        adith7923@gmail.com
                      </p>
                      <p>
                        <FontAwesomeIcon icon={faPhone} /> 9947397099
                      </p>
                      <div className="social-icons">
                        <a href="https://www.facebook.com/profile.php?id=100011024111263">
                          <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="https://twitter.com/AdithTM1">
                          <FontAwesomeIcon icon={faTwitterSquare} />
                        </a>
                        <a href="https://www.instagram.com/adith.t.m/">
                          <FontAwesomeIcon icon={faInstagramSquare} />
                        </a>
                        <a href="https://www.linkedin.com/in/adith-t-m/">
                          <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="https://github.com/Adith7923">
                          <FontAwesomeIcon icon={faGithub} />
                        </a>
                      </div>
                      <a
                        href="https://drive.google.com/file/d/1Soo6SMpwTqdFnX8SChV9ZqmLXnCwB6q8/view?usp=sharing"
                        download
                        className="btn btn2"
                      >
                        Download CV
                      </a>
                    </div>
                    <div className="contact-right">
                      <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formName" className="mb-3">
                          <Form.Label>Your Name</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Your Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={
                              formErrors.name
                                ? "form-control error"
                                : formData.name
                                ? "form-control success"
                                : "form-control"
                            }
                          />
                          {formErrors.name && (
                            <div className="error">{formErrors.name}</div>
                          )}
                        </Form.Group>

                        <Form.Group controlId="formEmail" className="mb-3">
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter your email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={
                              formErrors.email
                                ? "form-control error"
                                : formData.email
                                ? "form-control success"
                                : "form-control"
                            }
                          />
                          {formErrors.email && (
                            <div className="error">{formErrors.email}</div>
                          )}
                        </Form.Group>

                        <Form.Group controlId="formMessage" className="mb-3">
                          <Form.Label>Your Message</Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={3}
                            name="message"
                            placeholder="Hey! I would like to connect with you."
                            value={formData.message}
                            onChange={handleChange}
                            className={
                              formErrors.message
                                ? "form-control error"
                                : formData.message
                                ? "form-control success"
                                : "form-control"
                            }
                          />
                          {formErrors.message && (
                            <div className="error">{formErrors.message}</div>
                          )}
                        </Form.Group>

                        <Button variant="primary" type="submit" className="send-button">
  <Player
    autoplay
    loop
    src="/animations/Animation.json"
    style={{ height: '50px', width: '80px' }} // Increased size
  />
</Button>

                      </Form>
                      {formSuccess && (
                        <div className="success-message">{formSuccess}</div>
                      )}
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
