import React from 'react';

const InputContainer = () => {
  return (
    <div style={{ 
      backgroundColor: '#fff', 
      padding: '30px', 
      borderRadius: '10px', 
      marginTop: '350px',
      boxShadow: 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '20px' }}>
        {/* Inputs com largura relativa */}
        <input 
          type="text" 
          placeholder="Local" 
          style={{ 
            flex: '1', // Usando flex para o input crescer horizontalmente
            height: '40px', 
            padding: '10px', 
            fontSize: '16px', 
            borderRadius: '5px', 
            border: 'none', 
            marginRight: '5px', 
          }} 
        />
        <input 
          type="date" 
          style={{ 
            flex: '1', 
            height: '40px', 
            padding: '10px', 
            fontSize: '16px', 
            borderRadius: '5px', 
            border: 'none', 
            marginRight: '5px', 
          }} 
        />
        <input 
          type="date" 
          style={{ 
            flex: '1', 
            height: '40px', 
            padding: '10px', 
            fontSize: '16px', 
            borderRadius: '5px', 
            border: 'none', 
          }} 
        />
      </div>
      {/* Botão abaixo dos inputs */}
      <button 
        style={{
          width: '300px',
          height: '50px',
          backgroundColor: '#4CAF50',
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
    </div>
  );
}

export default InputContainer;
