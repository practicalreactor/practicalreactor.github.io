// pages/Contact/Contact.jsx
import React from 'react';

const Contact = () => {
  const themeColors = {
    primary: "#000000",
  };

  // No form handler needed

  return (
    <div>
      <h2 className="text-4xl font-bold mb-6" style={{color: themeColors.primary}}>
        Contact Us
      </h2>
      
      <div className="max-w-3xl mx-auto mb-12">
      <div className="bg-white p-5 mb-10 border border-black drop-shadow-lg">
        {/* <div className="bg-white p-5 border border-black rounded-s"> */}
          <p className="mb-4">
            We're always interested in discussing new projects, opportunities for collaboration, 
            or answering your questions about our technologies.
          </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-3" style={{color: themeColors.primary}}>Our Location</h3>
            <p className="mb-2">
              London<br />
              United Kingdom 🇬🇧<br />
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3" style={{color: themeColors.primary}}>Contact Information</h3>
            <p className="mb-2">
              <strong>Email:</strong> contact@practicalreactor.com
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;