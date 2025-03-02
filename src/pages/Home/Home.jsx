// pages/Home/Home.jsx
import React, { useState, useEffect, useRef } from 'react';

const Home = () => {
  const [activePhase, setActivePhase] = useState(1);
  const doeContainerRef = useRef(null);
  
  // Define theme colours as variables
  const themeColours = {
    primary: "#666666",
    accent: "#4a86e8",
    light: "#f5f5f5",
  };
  
  // Animation for process flow visualization
  const handlePhaseClick = (phase) => {
    setActivePhase(phase);
  };

  useEffect(() => {
    // Create the DOE animation
    const createDOEPoints = () => {
      if (!doeContainerRef.current) return;
      
      // Clear any existing points
      doeContainerRef.current.innerHTML = '';
      
      // Grid dimensions - how many points in each direction
      const gridSize = 30;
      const totalPoints = gridSize * gridSize;
      
      // Create the grid of points
      for (let i = 0; i < totalPoints; i++) {
        const point = document.createElement('div');
        point.className = 'doe-point';
        
        // Calculate position
        const row = Math.floor(i / gridSize);
        const col = i % gridSize;
        
        // Position each point with slight randomness for natural look
        const jitter = 0.0; // Small random offset
        const xPos = (col / (gridSize - 1)) * 100;
        const yPos = (row / (gridSize - 1)) * 100;
        point.style.left = `calc(${xPos}% + ${(Math.random() * 2 - 1) * jitter}vw)`;
        point.style.top = `calc(${yPos}% + ${(Math.random() * 2 - 1) * jitter}vh)`;
        
        // Add data attributes to help with strategic cross placement
        point.dataset.row = row;
        point.dataset.col = col;
        
        doeContainerRef.current.appendChild(point);
      }
      
      // Randomly select points to highlight (simulate DOE sampling)
      // Get all points
      const points = doeContainerRef.current.querySelectorAll('.doe-point');
      
      // Number of points to highlight (30% of total)
      const numPointsToHighlight = Math.floor(totalPoints * 0.2);
      
      // Create array of indices and shuffle it
      const indices = Array.from({ length: totalPoints }, (_, i) => i);
      
      // Fisher-Yates shuffle algorithm
      for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
      }
      
      // Select the first numPointsToHighlight indices
      const selectedIndices = indices.slice(0, numPointsToHighlight);
      
      // Gradually reveal selected points
      selectedIndices.forEach((index, i) => {
        setTimeout(() => {
          // Add the 'selected' class to highlight the point
          if (points[index]) {
            points[index].classList.add('selected');
          }
        }, 100 + i * 20); // Stagger the reveal
      });

    };
    
    // Call the function after a short delay to ensure DOM is ready
    const timer = setTimeout(createDOEPoints, 500);
    
    // Clean up function
    return () => {
      clearTimeout(timer);
    };
  }, []);
  
  return (
    <div className="relative min-h-screen w-full">
      {/* Insert global CSS */}
      <style dangerouslySetInnerHTML={{ __html: `
        body {
          background: #FFFFFF;
          margin: 0;
          padding: 0;
        }
        
        .doe-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          pointer-events: none;
          overflow: hidden;
        }
        
        .doe-point {
          position: absolute;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: rgba(128, 128, 128, 0.11);
          transform: translate(-50%, -50%);
          transition: all 0.05s ease-out;
        }
        
        .doe-point.selected {
          background: rgba(235, 235, 235, 0.45);
          width: 10px;
          height: 10px;
          border: 1px solid rgba(0, 0, 0, 0.23);
        }
        
        /* Skeuomorphic styles */
        
        /* Skeuomorphic box styles */
        .skeuomorphic-dark-box {
          background: linear-gradient(145deg, #222222, #333333);
          border-radius: 12px 12px 0 0;
          box-shadow: 
            inset 0 1px 1px rgba(255, 255, 255, 0.1),
            inset 1px 0 0 rgba(255, 255, 255, 0.05);
          position: relative;
          overflow: hidden;
        }
        
        @media (min-width: 768px) {
          .skeuomorphic-dark-box {
            border-radius: 12px 0 0 12px;
          }
        }
        
        .skeuomorphic-dark-box:before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 80px;
          background: linear-gradient(to bottom, rgba(255, 255, 255, 0.1), transparent);
          border-radius: 12px 0 0 0;
        }
        
        .skeuomorphic-light-box {
          background: linear-gradient(145deg, #f8f8f8, #e6e6e6);
          border-radius: 0 0 12px 12px;
          box-shadow: 
            inset 0 1px 0 white,
            inset -1px 0 0 rgba(255, 255, 255, 0.7);
          position: relative;
          overflow: hidden;
        }
        
        @media (min-width: 768px) {
          .skeuomorphic-light-box {
            border-radius: 0 12px 12px 0;
          }
        }
        
        .skeuomorphic-light-box:before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 80px;
          background: linear-gradient(to bottom, rgba(255, 255, 255, 0.8), transparent);
          border-radius: 0 12px 0 0;
        }
        
        /* Skeuomorphic button styles */
        .btn-skeuomorphic-dark {
          background: linear-gradient(to bottom, #444444, #222222);
          color: white;
          border: none;
          border-radius: 6px;
          padding: 12px 24px;
          font-weight: 600;
          text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.5);
          box-shadow: 
            0 4px 6px rgba(0, 0, 0, 0.3),
            0 1px 3px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.2),
            inset 0 -1px 0 rgba(0, 0, 0, 0.4);
          transition: all 0.1s ease-out;
          position: relative;
          overflow: hidden;
        }
        
        .btn-skeuomorphic-dark:before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 50%;
          background: linear-gradient(to bottom, rgba(255, 255, 255, 0.15), transparent);
          border-radius: 6px 6px 0 0;
        }
        
        .btn-skeuomorphic-dark:hover {
          background: linear-gradient(to bottom, #555555, #333333);
          transform: translateY(-1px);
          box-shadow: 
            0 5px 8px rgba(0, 0, 0, 0.35),
            0 2px 4px rgba(0, 0, 0, 0.35),
            inset 0 1px 0 rgba(255, 255, 255, 0.25),
            inset 0 -1px 0 rgba(0, 0, 0, 0.5);
        }
        
        .btn-skeuomorphic-dark:active {
          transform: translateY(1px);
          background: linear-gradient(to bottom, #222222, #333333);
          box-shadow: 
            0 2px 3px rgba(0, 0, 0, 0.3),
            0 1px 2px rgba(0, 0, 0, 0.3),
            inset 0 2px 5px rgba(0, 0, 0, 0.2);
        }
        
        .btn-skeuomorphic-light {
          background: linear-gradient(to bottom, #ffffff, #e6e6e6);
          color: #444;
          border: none;
          border-radius: 6px;
          padding: 12px 24px;
          font-weight: 600;
          box-shadow: 
            0 4px 6px rgba(0, 0, 0, 0.15),
            0 1px 3px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 white,
            inset 0 -1px 0 rgba(0, 0, 0, 0.1);
          transition: all 0.1s ease-out;
          position: relative;
          overflow: hidden;
        }
        
        .btn-skeuomorphic-light:before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 50%;
          background: linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.2));
          border-radius: 6px 6px 0 0;
        }
        
        .btn-skeuomorphic-light:hover {
          background: linear-gradient(to bottom, #ffffff, #f0f0f0);
          transform: translateY(-1px);
          box-shadow: 
            0 5px 8px rgba(0, 0, 0, 0.1),
            0 2px 4px rgba(0, 0, 0, 0.05),
            inset 0 1px 0 white,
            inset 0 -1px 0 rgba(0, 0, 0, 0.05);
        }
        
        .btn-skeuomorphic-light:active {
          transform: translateY(1px);
          background: linear-gradient(to bottom, #e6e6e6, #f0f0f0);
          box-shadow: 
            0 2px 3px rgba(0, 0, 0, 0.05),
            inset 0 2px 5px rgba(0, 0, 0, 0.05);
        }
      `}} />
      
      {/* DOE Container */}
      <div ref={doeContainerRef} className="doe-container"></div>
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section with Problem Statement */}
        {/* blur background */}
        <div className="max-w-4xl mx-auto mb-16 backdrop-filter backdrop-blur-sm p-2">
          <h1 className="text-5xl font-bold mb-6 text-center text-gray-800">
            Reactors designed in the real world, <i>for the real world</i>
          </h1>
          <p className="text-xl text-center text-gray-700 mb-12">
            Simulations are expensive to run and validate, and fail to accurately model complex flow reactions. 
            We're changing that with our physical-first fully-automated approach.
          </p>
          
          {/* Call to Action with Skeuomorphic Buttons */}
          <div className="flex justify-center gap-6">
            <button className="btn-skeuomorphic-dark">
              Book a Demo (Coming Soon)
            </button>
            <button className="btn-skeuomorphic-light">
              Learn More (Coming Soon)
            </button>
          </div>
        </div>
        
        {/* Key Benefits in Split Layout */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="flex flex-col md:flex-row" style={{ boxShadow: '0 8px 20px rgba(0,0,0,0.12)', borderRadius: '12px' }}>
            <div className="w-full md:w-1/3 p-8 skeuomorphic-dark-box text-white relative z-10">
              <h2 className="text-3xl font-bold mb-6 relative z-10">Why Our Approach Works</h2>
              <p className="mb-6 relative z-10">
                We bypass the limitations of computational simulations by directly testing in the physical world.
              </p>
              <p className="text-sm opacity-70 relative z-10">
                "The best way to predict the future is to implement it." - Alan Kay
              </p>
            </div>
            
            <div className="w-full md:w-2/3 p-8 skeuomorphic-light-box relative z-10">
              <div className="grid md:grid-cols-2 gap-8 relative z-10">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Improved Efficiency</h3>
                  <p>Our reactors consistently outperform conventional designs. In lab settings our reactors can enable more accurate data collection.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">5x Faster Development</h3>
                  <p>Rapid prototyping and testing accelerates the journey from concept to production-ready design.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Multiphase Systems</h3>
                  <p>We excel where others struggle, handling solid, liquid, and gas phase reactions with ease.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Future-Proof Designs</h3>
                  <p>Our methodologies adapt to new chemistries and processes as your needs evolve.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Home;