import React, { useEffect, useState } from "react";
import "./DisplayTime.css"; 

const DisplayTime = ({ dat }) => {
  const [timeZones, setTimeZones] = useState([]);

  useEffect(() => {
    // Define the time zones you want to display
    const zones = [
      { name: "India", timeZone: "Asia/Kolkata" },
      { name: "Hong Kong", timeZone: "Asia/Hong_Kong" },
      { name: "US", timeZone: "America/New_York" }
    ];
    setTimeZones(zones);
  }, []);

  const getTimeString = (timeZone) => {
    const date = dat.toLocaleString("en-US", { timeZone });
    const options = { hour: "numeric", minute: "numeric", second: "numeric" };
    return new Intl.DateTimeFormat("en-US", options).format(new Date(date));
  };

  // return (
  //   <div>
  //     <h2>World Clock</h2>
  //     {timeZones.map((zone) => (
  //       <p key={zone.name}>
  //         {zone.name}: {getTimeString(zone.timeZone)}
  //       </p>
  //     ))}
  //   </div>
  // );
  return (
    <div className="display-time-container">
      <h2>World Clock</h2>
      <div className="time-wrapper">
        <div className="left-time">
          {timeZones.map((zone) => (
            zone.name === "Hong Kong" && (
              <p key={zone.name}>
                {zone.name}: {getTimeString(zone.timeZone)}
              </p>
            )
          ))}
        </div>
        <div className="middle-time">
          {timeZones.map((zone) => (
            zone.name === "India" && (
              <p key={zone.name}>
                {zone.name}: {getTimeString(zone.timeZone)}
              </p>
            )
          ))}
        </div>
        <div className="right-time">
          {timeZones.map((zone) => (
            zone.name === "US" && (
              <p key={zone.name}>
                {zone.name}: {getTimeString(zone.timeZone)}
              </p>
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default DisplayTime;