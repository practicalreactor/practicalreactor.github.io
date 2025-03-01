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
        <h3 className="text-2xl font-semibold mb-4" style={{color: themeColors.primary}}>Our Team</h3>
        <p className="mb-4">
          Our team consists of researchers, engineers, and industry experts who bring diverse 
          perspectives and expertise to every project.
        </p>
        <p>
          Led by experienced professionals with backgrounds in physics, engineering, and 
          business development, we work collaboratively to push the boundaries of what's possible.
        </p>
      </div>
      
      <div>
        <h3 className="text-2xl font-semibold mb-4" style={{color: themeColors.primary}}>Our Approach</h3>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Identify complex challenges with significant impact potential</li>
          <li>Research and develop innovative technological solutions</li>
          <li>Focus on practicality and real-world applications</li>
          <li>Rigorously test and validate our technologies</li>
          <li>Collaborate with industry partners to implement solutions</li>
        </ol>
      </div>
    </div>
  );
};

export default About;