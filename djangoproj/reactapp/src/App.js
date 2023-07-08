import React, { useState, useEffect } from "react";
import TimeInput from "./Input";

const WorldClock = () => {
  const [timeZones, setTimeZones] = useState([]);
  let [datee, setDate] = useState(new Date());

  useEffect(() => {
    // Define the time zones you want to display
    const zones = [
      { name: "India", timeZone: "Asia/Kolkata" },
      { name: "Hong Kong", timeZone: "Asia/Hong_Kong" },
      { name: "US", timeZone: "America/New_York" }
    ];
    setTimeZones(zones);
  }, []);

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  const getTimeString = (timeZone) => {
    const date = datee.toLocaleString("en-US", { timeZone });
    const options = { hour: "numeric", minute: "numeric", second: "numeric" };
    return new Intl.DateTimeFormat("en-US", options).format(new Date(date));
  };

  return (
    <div>
      <h2>World Clock</h2>
      {timeZones.map((zone) => (
        <p key={zone.name}>
          {zone.name}: {getTimeString(zone.timeZone)}
        </p>
      ))}
      <div>
        <TimeInput />
      </div>
    </div>
  );
};

export default WorldClock;