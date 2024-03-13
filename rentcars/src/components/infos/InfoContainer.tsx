import textImage from '../../assets/text.png';
import BookButton from '../button/BookButton';

const InfoContainer = () => {
  const styles = `
    .info {
      display: flex;
      flex-direction: column;
      align-items: flex-start; 
      justify-content: flex-start; 
    }

    .info-image {
      max-width: 700px; /* Define a largura máxima da imagem */
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className='info'>
        <img src={textImage} alt="Text" className="info-image" />
        <BookButton/>
      </div>
    </>
  );
}

export default InfoContainer;
