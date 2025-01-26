import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet'; 
import projectImage from '../assets/images/project2.jpg';
import './ProjectDetails.css';

const Project2 = () => {
  return (
    <div className="project-details">
      <Helmet>
        <title>Traffic Sign Detector | My Projects</title> 
      </Helmet>
      <h1>Traffic Sign Detector</h1>
      <div className='ImgDet'>
        <img src={projectImage} alt="Traffic Sign Detector" className="project-image" />
        <p>
          The Traffic Sign Detector is a system designed to detect and recognize traffic signs using Convolutional Neural Networks (CNN) and Keras in Python. 
          This project demonstrates the application of machine learning techniques to solve real-world problems.
          <br /><br />
          The system is trained on a dataset of various traffic signs and uses a CNN model to classify the signs in real-time. 
          The model is capable of recognizing different types of traffic signs such as stop signs, speed limits, and pedestrian crossings. 
          This project showcases the power of deep learning in image recognition tasks.
        </p>
      </div>
      <div className="desc">
     
      <ul>
      <h3>Project Objectives</h3>
        <li>Develop a system to detect and recognize traffic signs.</li>
        <li>Implement a CNN model using Keras in Python.</li>
        <li>Train the model on a dataset of traffic signs.</li>
      </ul>
     
      <ul>
      <h3>Technologies Used</h3>
        <li>Python for programming.</li>
        <li>Keras for building the CNN model.</li>
        <li>OpenCV for image processing.</li>
        <li>Jupyter Notebook for development and testing.</li>
      </ul>
      </div>
      <div className="report">
      
      <p>
      <h3>Project Report</h3>
        For a detailed explanation of the project, including the model architecture, code, and results, 
        please refer to the project report linked below.
      </p>
      </div>
      <a href="https://drive.google.com/file/d/1kO-BGZYkvf3_IoSGMifWzBo0U6SzwiZz/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn btn2">
        View Project Report
      </a>
      <br />
      <Link to="/" className="btn btn2">Back to Home</Link>
    </div>
  );
};

export default Project2;
