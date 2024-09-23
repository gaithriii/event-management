import React from 'react';
import { Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const createEvent = (e) => {
    e.preventDefault();

    navigate('/events/create');
  }

  const viewAllEvents = (e) => {
    e.preventDefault();

    navigate('/events');
  }

  return (
    <div style={{padding: "0 10px"}}>
      <Typography variant="h4">Home</Typography>
      <div style={{width: "100%", display: "table"}}>
        <Button variant="contained" color="primary" style={{marginTop: "30px", display: "table-cell"}} onClick={createEvent}>Create Event</Button>
        <Button variant="contained" color="primary" style={{marginTop: "30px", display: "table-cell"}} onClick={viewAllEvents}>View Available Events</Button>
      </div>
    </div>
  );
}

export default Home;
