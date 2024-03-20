import { useState } from 'react';
import { BiMap, BiCalendar } from 'react-icons/bi';
import Button from '../components/button/Button';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './InputContainer.css'; 

const InputContainer = () => {
  const [local, setLocal] = useState(""); 
  const [startDate, setStartDate] = useState<Date | null>(null); 
  const [returnDate, setReturnDate] = useState<Date | null>(null);
  const handleLocalChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocal(event.target.value);
  };

  const handleSubmit = () => {
    console.log("Local:", local);
    console.log("Pick up date:", startDate);
    console.log("Return date:", returnDate);
  }
  const setMinDate = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); 
    return today;
  };

  const setMinReturnDate = () => {
    if (returnDate) {
      return returnDate;
    } else {
      return startDate || new Date();
    }
  };

  return (
    <div className="input-container"> 
      <div className="input-wrapper">
        {/* Ícone do local e label */}
        <div className="input-field">
          <BiMap size={20} className="icon" />
          <input 
            type="text" 
            placeholder="Local" 
            className="text-input" 
            value={local}
            onChange={handleLocalChange}
          />
          <label className="input-label">Choose a location</label>
        </div>
  
        <div className="input-field">
          <BiCalendar size={20} className="icon" />
          <DatePicker 
            selected={startDate} 
            onChange={(date: Date) => setStartDate(date)} 
            minDate={setMinDate()} 
            className="date-input" 
            dateFormat="dd/MM/yyyy" 
          />
          <label className="input-label">Pick up date</label>
        </div>
        <div className="input-field">
          <BiCalendar size={20} className="icon" />
          <DatePicker 
            selected={returnDate} 
            onChange={(date: Date) => setReturnDate(date)} 
            minDate={setMinReturnDate()} 
            className="date-input" 
            dateFormat="dd/MM/yyyy" 
          />
          <label className="input-label">Return date</label>
        </div>
      </div>
      <Button onClick={handleSubmit}/>

      <div>
      <p>Local: {local}</p>
      <p>Pick up date: {startDate ? startDate.toLocaleDateString() : 'Please select a date'}</p>
      <p>Return date: {returnDate ? returnDate.toLocaleDateString() : 'Please select a date'}</p>
    </div>
    </div>
  );
}

export default InputContainer;
