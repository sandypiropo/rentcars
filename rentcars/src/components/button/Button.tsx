import React, { useState } from 'react';


const Button: React.FC<{onClick: () => void}> = ({onClick}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    console.log('Clicked Botton');
    onClick();
  };

  return (
    <button 
      onClick={handleClick}
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
};

export default Button;
