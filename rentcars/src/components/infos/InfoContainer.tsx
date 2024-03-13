import textImage from '../../assets/text.png'; // Importe a imagem
import BookButton from '../button/BookButton';

const InfoContainer = () => {
  return (
    <div>
      <div className='info'>
        <img src={textImage} alt="Text" className="info-image" />
        <BookButton className="info-button"></BookButton>
      </div>
    </div>
  );
}

export default InfoContainer;
