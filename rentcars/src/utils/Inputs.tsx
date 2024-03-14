import { useState } from 'react';
import { BiMap, BiCalendar } from 'react-icons/bi';
import BookButton from '../components/button/Button';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const InputContainer = () => {
  const [startDate, setStartDate] = useState(null); // Estado para a data de partida
  const [returnDate, setReturnDate] = useState(null); // Estado para a data de retorno

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
      maxWidth: '900px', 
      margin: '0 auto', 
      position: 'relative', 
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '20px'}}>
        {/* Ícone do local e label */}
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <BiMap size={20} style={{ marginRight: '5px' }} />
          <input 
            type="text" 
            placeholder="Local" // Colocando placeholder vazio
            style={{ 
              flex: '7', 
              height: '40px', 
              padding: '10px', 
              fontSize: '16px', 
              borderRadius: '5px', 
              border: 'none', 
              marginRight: '5px', 
              outline: 'none',
            }} 
          />
          <label style={{ position: 'absolute', top: '-20px', left: '0', fontSize: '15px', color: '#666' }}>Choose a location</label>
        </div>
        {/* Ícone da data e label */}
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <BiCalendar size={20} style={{ marginRight: '5px' }} />
          <DatePicker 
            selected={startDate} 
            onChange={(date) => setStartDate(date)} 
            style={{ 
                flex: '1', 
                height: '40px', 
                padding: '10px', 
                fontSize: '16px', 
                borderRadius: '5px', 
                border: 'none', 
                outline: 'none',
            }}
            dateFormat="dd/MM/yyyy" 
            wrapperClassName="date-picker-wrapper" 
          />
          <label style={{ position: 'absolute', top: '-20px', left: '0', fontSize: '15px', color: '#666' }}>Pick up data</label>
          <BiCalendar size={20} style={{ marginRight: '5px' }}/>
          <DatePicker 
            selected={returnDate} 
            onChange={(date) => setReturnDate(date)} 
            style={{ 
                flex: '1', 
                height: '40px', 
                padding: '10px', 
                fontSize: '16px', 
                borderRadius: '5px', 
                border: 'none', 
                outline: 'none',
            }}
            dateFormat="dd/MM/yyyy" 
            wrapperClassName="date-picker-wrapper" 
          />
          <label style={{ position: 'absolute', top: '-20px', left: '60%', fontSize: '15px', color: '#666', transform: 'translateX(-50%)' }}>Return data</label>
        </div>
      </div>
      <BookButton />
    </div>
  );
}

export default InputContainer;
