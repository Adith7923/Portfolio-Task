import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './ProjectDetails.css';
import { motion } from 'framer-motion'; // Import framer-motion
import ScrollToTop from '../components/ScrollToTop';

const ProjectDetails = () => {
  const { id } = useParams(); // Retrieve the project ID from the route
  const [project, setProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAnimated, setIsAnimated] = useState(false); // For animation
  
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/projects/id/${parseInt(id) + 1}`);
        if (!response.ok) {
          throw new Error(`Project not found (status: ${response.status})`);
        }
        const data = await response.json();
        setProject(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  useEffect(() => {
    if (!isLoading) {
      setIsAnimated(true); // Trigger the animation after the data is loaded
    }
    console.log(id)
  }, [isLoading]);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return (
      <div className="error">
        <h1>Error</h1>
        <p>{error}</p>
        <Link to="/" className="btn btn2">Back to Home</Link>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="error">
        <h1>Project Not Found</h1>
        <Link to="/" className="btn btn2">Back to Home</Link>
      </div>
    );
  }

  return (
    <motion.div
      className={`project-details-wrapper ${isAnimated ? 'slide-up' : ''}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="project-details">
        <Helmet>
          <title>{project.title} - Project Details</title>
        </Helmet>
        <ScrollToTop />
        <div className="project-item">
          <h1>{project.title}</h1>
          <div className="ImgDet">
            <img
              src={`data:image/jpeg;base64,${project.image}`}
              alt={`Image of ${project.title}`}
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
            <p>
              <h3>Project Report</h3>
              For a detailed explanation of the project, including the circuit diagram, code, and results,
              please refer to the project report linked below.
            </p>
          </div>
        </div>
        <a
          href={project.reportLink.replace(/"/g, '')}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn2"
        >
          View Project Report
        </a>

        <Link to="/" className="btn btn2">Back to Home</Link>
      </div>
    </motion.div>
  );
};

export default ProjectDetails;
