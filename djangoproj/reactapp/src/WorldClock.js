import React, {useEffect, useState} from 'react';
import DisplayTime from './DisplayTime';

const WorldClock = () => {
    let [datee, setDate] = useState(new Date());
  
    useEffect(() => {
      var timer = setInterval(() => setDate(new Date()), 1000);
      return function cleanup() {
        clearInterval(timer);
      };
    });
  
    return (
      <div>
        <DisplayTime dat={datee} />
      </div>
    );
  };
  export default WorldClock;