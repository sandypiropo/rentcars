import { BiMap, BiCalendar } from 'react-icons/bi';

const InputContainer = () => {
  return (
    <div style={{ 
      backgroundColor: '#fff', 
      padding: '30px', 
      borderRadius: '10px', 
      marginTop: '50px', 
      boxShadow: 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center',
      width: '80%', 
      maxWidth: '900px', 
      margin: '0 auto', 
      position: 'relative', // Adicionando posição relativa para elementos absolutos
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '20px'}}>
        {/* Ícone do local e label */}
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <BiMap size={20} style={{ marginRight: '5px' }} />
          <input 
            type="text" 
            placeholder="Local" // Colocando placeholder vazio
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
          <label style={{ position: 'absolute', top: '-20px', left: '0', fontSize: '15px', color: '#666' }}>Choose a location</label>
        </div>
        {/* Ícone da data e label */}
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <BiCalendar size={20} style={{ marginRight: '5px' }} />
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
          <label style={{ position: 'absolute', top: '-20px', left: '0', fontSize: '15px', color: '#666' }}>Pick up data</label>
          <BiCalendar size={20} style={{ marginRight: '5px' }}/>
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
          <label style={{ position: 'absolute', top: '-20px', left: '50%', fontSize: '15px', color: '#666', transform: 'translateX(-50%)' }}>Return data</label>
        </div>
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
