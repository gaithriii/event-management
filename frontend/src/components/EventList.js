// src/components/EventList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link, Typography, List, ListItem, ListItemText, Button } from '@mui/material';

function EventList() {
  const [events, setEvents] = useState([]);
  const navigation = useNavigate();
  
  useEffect(() => {
    const fetchEvents = async () => {
      
      try {
        const response = await axios.get('/api/events');
        //TODO: delete dummy data
        // const response = {
        //   data: [
        //     {
        //         "_id": "66ebabc5b76b00ed9e054834",
        //         "title": "t2",
        //         "description": "d2",
        //         "media": [
        //             "uploads/a1c50f94013a132a6f8d375f23ae4976"
        //         ],
        //         "creator": "66eba5f6a9f6e3c13d25ddb7",
        //         "attendees": [
        //             "66eba5f6a9f6e3c13d25ddb7"
        //         ],
        //         "__v": 0
        //     },
        //     {
        //       "_id": "66ebabc5b76b00ed9e054834",
        //       "title": "t3",
        //       "description": "d3",
        //       "media": [
        //           "uploads/a1c50f94013a132a6f8d375f23ae4976"
        //       ],
        //       "creator": "66eba5f6a9f6e3c13d25ddb7",
        //       "attendees": [
        //           "66eba5f6a9f6e3c13d25ddb7"
        //       ],
        //       "__v": 0
        //     },
        //     {
        //       "_id": "66ebabc5b76b00ed9e054834",
        //       "title": "t4",
        //       "description": "d4",
        //       "media": [
        //           "uploads/a1c50f94013a132a6f8d375f23ae4976"
        //       ],
        //       "creator": "66eba5f6a9f6e3c13d25ddb7",
        //       "attendees": [
        //           "66eba5f6a9f6e3c13d25ddb7"
        //       ],
        //       "__v": 0
        //     }
        //   ]
        // };
        setEvents(response.data);
      } catch (error) {
        alert('Error fetching events: ' + error.response.data);
      }
    };
    fetchEvents();
  }, []);

  const backToHome = (e) => {
    e.preventDefault(); 
    
    navigation('/')
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
