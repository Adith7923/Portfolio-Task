import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet'; 
import projectImage from '../assets/images/project1.jpg';
import './ProjectDetails.css';



const Project1 = () => {
 
  return (
    <div className="project-details">
      <Helmet>
        <title>Light Follower Robot | My Projects</title> 
      </Helmet>
      <h1>Light Follower Robot</h1>
      <div className='ImgDet'>
        <img src={projectImage} alt="Light Follower Robot" className="project-image" />
        <p>
          The Light Follower Robot is an autonomous robot designed to follow the direction of light. 
          It uses light sensors to detect the intensity of light and moves towards the source of the light. 
          This project demonstrates the application of basic electronics and programming skills to create a functional robot.
          <br /><br />
          The robot is equipped with multiple light sensors that help it determine the direction of the light source. 
          When the sensors detect light, the robot's microcontroller processes the data and adjusts the motors to move towards the light. 
          This project is a great example of how sensors and microcontrollers can be used together to create intelligent systems.
        </p>
      </div>
      
      <div className="desc">
      
     
<ul>
   
<h3>Project Objectives</h3>
  <li>Design and build a robot that can follow a light source.</li>
  <li>Implement light sensors to detect the direction of the light.</li>
  <li>Program the robot to move towards the light source.</li>
  <li>Ensure the robot can avoid obstacles while navigating toward the light.</li>
</ul>

      
      <ul>
      <h3>Technologies Used</h3>
        <li>Arduino for controlling the robot.</li>
        <li>Light sensors for detecting light intensity.</li>
        <li>DC motors for robot movement.</li>
        <li>Programming in C/C++ for Arduino.</li>
      </ul>

      </div>
      <div className="report">
     
      <p>
      <h3>Project Report</h3>
        For a detailed explanation of the project, including the circuit diagram, code, and results, 
        please refer to the project report linked below.
      </p>
      </div>
      <a href="https://drive.google.com/file/d/1w-YYWOrlXX7U6cIJQFxKl_8yCM5V5kfb/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn btn2">
        View Project Report
      </a>
      <br />
      <Link to="/" className="btn btn2">Back to Home</Link>
    </div>
  );
};

export default Project1;
