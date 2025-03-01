// components/Logo.jsx
import React from 'react';

const Logo = ({ size = 40 }) => {
  return (
    <div className='pr-10'
      // from logo.png
      style={{
        width: size,
        height: size,
        backgroundImage: 'url(/logo.png)',
        backgroundSize: 'cover',
      }}
    >
    </div>
  );
};

export default Logo;