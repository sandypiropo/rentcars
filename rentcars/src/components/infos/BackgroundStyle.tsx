import React from 'react';

const BackgroundStyle: React.FC = () => (
  <style>
    {`
      :root {
        font-family: Arial, Helvetica, sans-serif;
        line-height: 1.5;
        font-weight: 400;

        color-scheme: light dark;
        color: rgb(0, 0, 0);
        background-color: rgb(255, 255, 255);

        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      body {
        margin: 0; 
        padding: 0; 
        font-family: Arial, sans-serif; 

        background-image: 
          url('../src/assets/car.png'),
          url('../src/assets/background1.png'); 
        background-size: 
          1112px 695px,/* Largura e altura da segunda imagem */
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
