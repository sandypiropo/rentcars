import React from 'react';

const InputContainer = () => {
  return (
    <div style={{ 
      backgroundColor: '#fff', 
      padding: '20px', // Reduzindo o padding para diminuir o tamanho do container
      borderRadius: '10px', 
      marginTop: '50px', 
      boxShadow: 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center',
      width: '80%', // Definindo uma largura fixa para o container
      maxWidth: '900px', // Limitando a largura máxima para manter o conteúdo legível
      margin: '0 auto', // Centralizando o container horizontalmente
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '20px' }}>
        <input 
          type="text" 
          placeholder="Local" 
          style={{ 
            flex: '2', 
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
    </div>
  );
}

export default InputContainer;
