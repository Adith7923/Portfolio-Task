import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './ProjectDetails.css';

const ProjectDetails = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the backend
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/projects');
        const data = await response.json();
        setProjects(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="project-details">
      <Helmet>
        <title>My Projects</title>
      </Helmet>
      {projects.map((project) => (
        <div className="project-item" key={project.id}>
          <h1>{project.title}</h1>
          <div className="ImgDet">
            <img
              src={`data:image/jpeg;base64,${project.image}`} // Decode base64 image
              alt={project.title}
              className="project-image"
            />
            <p>{project.description}</p>
          </div>
          <div className="desc">
            <ul>
              <h3>Project Objectives</h3>
              {project.objectives.map((objective, index) => (
                <li key={index}>{objective}</li>
              ))}
            </ul>
            <ul>
              <h3>Technologies Used</h3>
              {project.technologiesUsed.map((technology, index) => (
                <li key={index}>{technology}</li>
              ))}
            </ul>
          </div>
          <div className="report">
            <h3>Project Report</h3>
            <p>
              For a detailed explanation of the project, including the circuit diagram, code, and results, 
              please refer to the project report linked below.
            </p>
          </div>
          <a
            href={project.reportLink.replace(/"/g, '')} // Remove extra quotes
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn2"
          >
            View Project Report
          </a>
        </div>
      ))}
      <Link to="/" className="btn btn2">Back to Home</Link>
    </div>
  );
};

export default ProjectDetails;
