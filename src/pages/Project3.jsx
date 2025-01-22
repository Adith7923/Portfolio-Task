import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet'; // Import Helmet
import projectImage from '../assets/images/project3.jpg';
import './ProjectDetails.css';

const Project3 = () => {
  return (
    <div className="project-details">
      <Helmet>
        <title>Vehicular Pollution Monitoring System | My Projects</title> {/* Update the title */}
      </Helmet>
      <h1>Vehicular Pollution Monitoring System</h1>
      <div className='ImgDet'>
        <img src={projectImage} alt="Vehicular Pollution Monitoring System" className="project-image" />
        <p>
          The Vehicular Pollution Monitoring System is a device designed to continuously monitor the pollution levels emitted by vehicles. 
          This project demonstrates the application of IoT and sensor technology to address environmental issues.
          <br /><br />
          The system uses various sensors to measure pollutants such as CO2 and NOx. 
          The data collected by the sensors is transmitted to a central server using a Wi-Fi module for further analysis. 
          This project highlights the importance of monitoring vehicular emissions to reduce air pollution and improve environmental health.
        </p>
      </div>
      <h3>Project Objectives</h3>
      <ul>
        <li>Develop a system to monitor pollution levels emitted by vehicles.</li>
        <li>Implement sensors to measure various pollutants.</li>
        <li>Transmit the data to a central server for analysis.</li>
      </ul>
      <h3>Technologies Used</h3>
      <ul>
        <li>Arduino for controlling the sensors.</li>
        <li>Various sensors for measuring pollutants (e.g., CO2, NOx).</li>
        <li>Wi-Fi module for data transmission.</li>
        <li>Programming in C/C++ for Arduino.</li>
      </ul>
      <h3>Project Report</h3>
      <p>
        For a detailed explanation of the project, including the circuit diagram, code, and results, 
        please refer to the project report linked below.
      </p>
      <a href="https://drive.google.com/file/d/14L72msoS91RycjFBiwOY53U3T9fgGLgH/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="btn btn2">
        View Project Report
      </a>
      <br />
      <Link to="/" className="btn btn2">Back to Home</Link>
    </div>
  );
};

export default Project3;
