import React, { useState } from 'react';

const Button = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button 
      style={{
        width: '300px',
        height: '50px',
        backgroundColor: isHovered ? '#006666' : '#008080',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        fontSize: '18px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      SEARCH
    </button>
  );
}

export default Button;
