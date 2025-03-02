// pages/About/About.jsx
import React from 'react';

const About = () => {
  const themeColors = {
    primary: "#000000",
  };

  return (
    <div>
      <h2 className="text-4xl font-bold mb-6" style={{color: themeColors.primary}}>
        About Us
      </h2>
    
      <div className="mb-8">
        <p className="mb-4">
          Tom Savage. Imperial College London, University of Cambridge.
        </p>
      </div>
      
    </div>
  );
};

export default About;