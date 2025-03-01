// pages/Home/Home.jsx
import React from 'react';
const Home = () => {
  // Define theme colours as variables
  const themeColours = {
    primary: "#666666",
  };
  return (
    <div className="py-16">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto mb-16">
      {/* <h2 className="text-5xl font-bold mb-8 text-center" style={{color: themeColours.primary}}>
        Practical Reactor Technologies
      </h2> */}
      <p className="text-3xl font-bold text-center mb-16">Reactors designed in the real world, for the real world.</p>
    </div>
    
    {/* Features Section */}
    <div className="mb-16">          
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Feature 1 */}
        <div className="bg-white p-5 border border-black drop-shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Fully Automated Optimisation</h3>
          <p> Our algorithm-driven approach finds solutions other methods can't reach. We rapidly iterate to locate optimal reactor designs using the highest fidelity model there is: <i>the real world</i>.</p>
        </div>
        
        {/* Feature 2 */} 
        <div className="bg-white p-5 border border-black drop-shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Additive Manufacturing-Driven</h3>
          <p>We use 3D printing to create and test real prototypes in a fully automated manner. Our physical-first approach delivers robust designs where traditional modelling consistently fails.</p>
        </div>
        
        {/* Feature 3 */}
        <div className="bg-white p-5 border border-black drop-shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Specialised Solutions</h3>
          <p>We excel with challenging multiphase and photochemical reactions, reducing the time to design bespoke reactors for pharmaceutical processes and fine chemicals that demand precise control and performance.</p>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};
export default Home;