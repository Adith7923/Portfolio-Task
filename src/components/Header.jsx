import React from "react";
import SplitText from "../blocks/TextAnimations/SplitText/SplitText";
import "../styles/Portfolio.css";

const Header = () => {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <div id="header">
      <div className="container">
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
  );
};

export default Header;
