import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link, Typography, List, ListItem, ListItemText, Button } from '@mui/material';

function EventList() {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchEvents = async () => {
      
      try {
        const response = await axios.get('/api/events');
        setEvents(response.data);
      } catch (error) {
        alert('Error fetching events: ' + error.response.data);
      }
    };
    fetchEvents();
  }, []);

  const backToHome = (e) => {
    e.preventDefault(); 
    
    navigate('/');
  }

  return (
    <div style={{padding: "0 10px"}}>
      <Typography variant="h4">Events</Typography>
      <List>
        {events.map(event => (
          <ListItem sx={{ display: 'list-item', border: '1px solid', marginBottom: '10px' }}>
            <ListItemText primary='Title:' secondary={event.title} />
            <ListItemText primary='Description:' secondary={event.description} style={{marginBottom: '20px'}} />
            <Link href={`/events/${event._id}`}>View Details</Link>
          </ListItem>
        ))}
      </List>
      <Button variant="contained" color="primary" style={{marginTop: "40px"}} onClick={backToHome}>Back to Home</Button>
    </div>
  );
}

export default EventList;
