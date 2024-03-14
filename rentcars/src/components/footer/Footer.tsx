import React from 'react';
import './Footer.css';
import RoadPic from '../../assets/pic.jpg';

const Footer = () => {
  return (
    <div className="footer-container">
      <form className="newsletter-form">
        <h2>Inscreva-se na nossa Newsletter</h2>
        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. In labore recusandae ipsa! Tenetur aliquam mollitia veantium!</h4>
        <div className="subscribe">
            <input type="email" placeholder="Seu email" />
            <button type="submit">Inscrever</button>
        </div>
      </form>
      <div className="image-container">
        <img src={RoadPic} alt="Road" />
      </div>
    </div>
  );
}

export default Footer;
