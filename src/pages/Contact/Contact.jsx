// pages/Contact/Contact.jsx
import React from 'react';

const Contact = () => {
  const themeColors = {
    primary: "#000000",
  };

  // No form handler needed

  return (
        <div className="max-w-4xl mx-auto mb-16 pt-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
          
          <div className="bg-white p-8">
            <p className="mb-8 text-center">
              We're always interested in discussing new projects, opportunities for collaboration, 
              or answering your questions about our technologies.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Our Location</h3>
                <p>
                  London<br />
                  United Kingdom 🇬🇧
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Email</h3>
                <p>
                  <a href="mailto:contact@practicalreactor.com" className="text-blue-600 hover:text-blue-800">contact@practicalreactor.com</a> 
                </p>
              </div>
            </div>
          </div>
        </div>
  );
};

export default Contact;