import './Footer.css';
import RoadPic from '../../assets/pic.jpg';

const Footer = () => {
  return (
    <div className="footer-container">
      <form className="newsletter-form">
        <h4>Newsletter</h4>
        <h1>Subscribe to our Newsletter for new updates</h1>
        <div className="subscribe">
            <input type="email" placeholder="Write your email" />
            <button type="submit">SUBSCRIBE NOW</button>
        </div>
      </form>
      <div className="image-newsletter">
        <img src={RoadPic} alt="Road" />
      </div>
    </div>
  );
}

export default Footer;
