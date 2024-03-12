const BookButton = () => {
  return (
    <button 
      style={{
        width: '300px',
        height: '50px',
        backgroundColor: '#113259',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        fontSize: '18px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
      }}
    >
      Book Your Trip
    </button>
  );
}

export default BookButton;
