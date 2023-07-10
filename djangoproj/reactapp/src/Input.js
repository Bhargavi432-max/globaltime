import React, { useState } from 'react';
import DisplayTime from './DisplayTime';
import WorldClock from './WorldClock';
import axios from "axios";


const TimeInputField = () => {
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');
  const [ampm, setAmPm] = useState('AM');
  const [showCustomTime, setShowCustomTime] = useState(false);
  const [newDate, setNewDate] = useState(null);

  const handleHourChange = (event) => {
    setHour(event.target.value);
  };

  const handleMinuteChange = (event) => {
    setMinute(event.target.value);
  };

  const handleAmPmChange = (event) => {
    setAmPm(event.target.value);
  };
  const handleCustomChange = () => {
    if (hour === "" || minute === "") {
      setShowCustomTime(false);
    } else {
      setShowCustomTime(true);
    }
  };

  const handleTimeSubmit = (event) => {
    event.preventDefault();

    
    const d = new Date();
    ampm === "AM" ? d.setHours(hour) : d.setHours(Number(hour) + 12);
    d.setMinutes(minute);
    setNewDate(d);

   
    const payload = {
      "hour": `${hour}`,
      "minute": `${minute}`,
      "ampm": `${ampm}`,
      }
    
    axios({
     
      method: 'post',
      url: 'http://127.0.0.1:8000/time-entry/',
      data: payload, // you are sending body instead
      headers: {
       // 'Authorization': `bearer ${token}`,
      'Content-Type': 'application/json'
      }, 
    })
    .then(response => {
         console.log(response.data); // Handle success response
         })
         .catch(error => {
           console.error(error); // Handle error response
         });
  };
  // return (
  //   <>
  //   {showCustomTime ? <DisplayTime dat={newDate} /> : <WorldClock />}
  //   <form onSubmit={handleTimeSubmit}>
  //     <label>
  //       Hour:
  //       <input type="number" min="1" max="12" value={hour} onChange={handleHourChange} />
  //     </label>
  //     <label>
  //       Minute:
  //       <input type="number" min="0" max="59" value={minute} onChange={handleMinuteChange} />
  //     </label>
  //     <label>
  //       AM/PM:
  //       <select value={ampm} onChange={handleAmPmChange}>
  //         <option value="AM">AM</option>
  //         <option value="PM">PM</option>
  //       </select>
  //     </label>
  //     <button  onClick={handleCustomChange} type="submit">Submit</button>
  //   </form>
  //   </>
  // );
  
  return (
    <>
      {showCustomTime ? <DisplayTime dat={newDate} /> : <WorldClock />}
      <form onSubmit={handleTimeSubmit} style={{ marginTop: '20px' }}>
        <label>
          Hour:
          <input type="number" min="1" max="12" value={hour} onChange={handleHourChange} />
        </label>
        <label>
          Minute:
          <input type="number" min="0" max="59" value={minute} onChange={handleMinuteChange} />
        </label>
        <label>
          AM/PM:
          <select value={ampm} onChange={handleAmPmChange}>
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>
        </label>
        <button onClick={handleCustomChange} type="submit">Submit</button>
      </form>
      
      
    </>
  );
};

export default TimeInputField;