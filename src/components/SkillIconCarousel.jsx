import React from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPython,
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faJava,
} from '@fortawesome/free-brands-svg-icons';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../styles/SkillCarousel.css"

const SkillIconCarousel = () => {
  // Slick carousel settings
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Loop through items
    speed: 500, // Transition speed
    slidesToShow: 4, // Number of slides shown at once
    slidesToScroll: 1, // Number of slides to scroll at a time
    responsive: [
      {
        breakpoint: 1024, // For tablets
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // For mobile
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="skill-carousel-container">
      <h2>Skills</h2>
      <Slider {...settings}>
        <div className="skill-icon-item">
          <FontAwesomeIcon icon={faPython} size="3x" />
          <p>Python</p>
        </div>
        <div className="skill-icon-item">
          <FontAwesomeIcon icon={faHtml5} size="3x" />
          <p>HTML5</p>
        </div>
        <div className="skill-icon-item">
          <FontAwesomeIcon icon={faCss3Alt} size="3x" />
          <p>CSS3</p>
        </div>
        <div className="skill-icon-item">
          <FontAwesomeIcon icon={faJsSquare} size="3x" />
          <p>JavaScript</p>
        </div>
        <div className="skill-icon-item">
          <FontAwesomeIcon icon={faJava} size="3x" />
          <p>Java</p>
        </div>
      </Slider>
    </div>
  );
};

export default SkillIconCarousel;
