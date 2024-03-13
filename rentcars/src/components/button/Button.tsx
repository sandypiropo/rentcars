const Button = () => {
  return (
    <button 
      style={{
        width: '300px',
        height: '50px',
        backgroundColor: '#008080',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        fontSize: '18px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
      }}
    >
      SEARCH
    </button>
  );
}

export default Button;
