import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet'; // Import Helmet
import projectImage from '../assets/images/project4.jpg';
import './ProjectDetails.css';

const Project4 = () => {
  return (
    <div className="project-details">
      <Helmet>
        <title>FPGA Based GMSK Modulator and Demodulator | My Projects</title> {/* Update the title */}
      </Helmet>
      <h1>FPGA Based GMSK Modulator and Demodulator</h1>
      <div className='ImgDet'>
        <img src={projectImage} alt="FPGA Based GMSK Modulator and Demodulator" className="project-image" />
        <p>
          The FPGA Based GMSK Modulator and Demodulator project involves designing and implementing a Gaussian Minimum Shift Keying (GMSK) modulator and demodulator using FPGA technology. 
          This project demonstrates the application of digital signal processing techniques and FPGA programming to create a functional communication system.
          <br /><br />
          The system uses an FPGA to perform the modulation and demodulation of GMSK signals. 
          The FPGA processes the input data, applies the GMSK modulation scheme, and outputs the modulated signal. 
          On the receiver side, the FPGA demodulates the received GMSK signal to recover the original data. 
          This project highlights the importance of FPGAs in implementing high-speed and efficient communication systems.
        </p>
      </div>
      <h3>Project Objectives</h3>
      <ul>
        <li>Design and implement a GMSK modulator and demodulator using FPGA.</li>
        <li>Apply digital signal processing techniques for modulation and demodulation.</li>
        <li>Demonstrate the functionality of the communication system.</li>
      </ul>
      <h3>Technologies Used</h3>
      <ul>
        <li>FPGA for implementing the modulator and demodulator.</li>
        <li>VHDL/Verilog for FPGA programming.</li>
        <li>Digital signal processing techniques.</li>
      </ul>
      <h3>Project Report</h3>
      <p>
        For a detailed explanation of the project, including the design, implementation, and results, 
        please refer to the project report linked below.
      </p>
      <a href="https://drive.google.com/file/d/1Sno25iUlKvftawCK7F6MwExVJUqP9sBd/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="btn btn2">
        View Project Report
      </a>
      <br />
      <Link to="/" className="btn btn2">Back to Home</Link>
    </div>
  );
};

export default Project4;
