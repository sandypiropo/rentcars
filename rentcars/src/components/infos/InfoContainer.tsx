import textImage from '../../assets/text.png'; // Importe a imagem
import BookButton from '../button/BookButton';

const InfoContainer = () => {
  return (
    <div>
      <div>
        <img src={textImage} alt="Text" />
      </div>
      <BookButton></BookButton>
    </div>
  );
}

export default InfoContainer;
