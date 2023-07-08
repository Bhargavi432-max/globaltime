import React, { useState } from 'react';

const TimeInputField = () => {
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');
  const [ampm, setAmPm] = useState('AM');

  const handleHourChange = (event) => {
    setHour(event.target.value);
  };

  const handleMinuteChange = (event) => {
    setMinute(event.target.value);
  };

  const handleAmPmChange = (event) => {
    setAmPm(event.target.value);
  };

  const handleTimeSubmit = (event) => {
    event.preventDefault();
    // Combine hour, minute, and AM/PM to form the time value
    const time = `${hour}:${minute} ${ampm}`;
    console.log(time); // You can use the time value as per your requirement
  };

  return (
    <form onSubmit={handleTimeSubmit}>
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
      <button type="submit">Submit</button>
    </form>
  );
};

export default TimeInputField;