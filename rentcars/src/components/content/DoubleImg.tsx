import React from 'react';

const BackgroundStyle: React.FC = () => (
  <style>
    {`
      body {
        background-image: 
          url('../src/assets/car.png'),
          url('../src/assets/background1.png'); 
        background-size: 
          1112px 695px,
          cover; 
        background-position: 
          right,
          top; 
        background-repeat: 
          no-repeat,
          no-repeat; 
      }
    `}
  </style>
);

export default BackgroundStyle;
