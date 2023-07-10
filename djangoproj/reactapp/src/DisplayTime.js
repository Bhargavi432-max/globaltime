import React, { useEffect, useState } from "react";
import "./DisplayTime.css"; 
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

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
    <>
    <Box sx={{ width: '100%' }}>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={12}>
        <Item>WORLD CLOCK</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>
          <Typography>Hong Kong</Typography>
          <Typography>Time</Typography>
        </Item>
      </Grid>
      <Grid item xs={4}>
        <Item>
          <Typography>India</Typography>
          <Typography>Time</Typography>
        </Item>
      </Grid>
      <Grid item xs={4}>
        <Item>
        <Typography>US</Typography>
          <Typography>Time</Typography>
        </Item>
      </Grid>
    </Grid>
  </Box>
 </>
  );
};

export default DisplayTime;