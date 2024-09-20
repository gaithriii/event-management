import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { TextField, Button, Typography } from '@mui/material';
import { getUserIdFromToken } from '../Utilities';

function EventDetail() {
  const { id } = useParams();
  const [userId, setUserId] = useState('');
  const [event, setEvent] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editDeleteRights, setEditDeleteRights] = useState(false);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        // const response = await axios.get(`/api/events/${id}`);
        // TODO: delete dummy data
        const response = {
          data: {
            "_id": "66ebabc5b76b00ed9e054834",
            "title": "t2",
            "description": "d2",
            "media": [
                "uploads/a1c50f94013a132a6f8d375f23ae4976"
            ],
            "creator": "66eba5f6a9f6e3c13d25ddb7",
            "attendees": ['66eba5f6a9f6e3c13d25ddb7', '1223'],
            "__v": 0
          }
        }
        setEvent(response.data);
        
        const userId = getUserIdFromToken();
        setUserId(userId);
        console.log(`userId: ${userId}`);

        if (!userId) {
          alert('Error: No user ID found');
          return;
        }

        (response && response.data && userId === response.data['creator']) ? setEditDeleteRights(true) : setEditDeleteRights(false);
      } catch (error) {
        alert('Error fetching event details: ' + error);
      }
    };
    fetchEvent();
  }, [id]);

  if (!event) return <p>Loading...</p>;

  const deleteEvent = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.delete(`/api/events/${id}`);
      if (response.status === 200) {
        alert('Event deleted successfully');
        // redirect to view all events page: :3000/
      }
    } catch (error) {
      alert('Error deleting event: ' + error.response.data);
    }
  }

  const editEvent = async (event) => {
    event.preventDefault();
    setIsEditing(true);
  }

  const updateTitle = e => {
    const { value } = e.target;
    setEvent(prevState => ({
        ...prevState,
        title: value
    }));
  };

  const updateDescription = e => {
    const { value } = e.target;
    setEvent(prevState => ({
        ...prevState,
        description: value
    }));
  };

  const updateEvent = async () => {
    try {
      console.log('event', event)
      const response = await axios.put(`/api/events/${id}`, event, {
        headers: { 'Content-Type': 'application/json' }
      });
      if (response.status === 200) {
        alert('Event updated successfully');
        setEvent(response.data);
      }
    } catch (error) {
      alert('Error updating event: ' + error.response.data);
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();

    updateEvent();
  }

  const attendEvent = (e) => {
    e.preventDefault();

    event.attendees.push(userId);
    setEvent(event);

    updateEvent();
  }

  return (
    <div style={{padding: "0 10px"}}>
      <div style={{float: "right", paddingBottom: "20px"}}>
        <Button variant="outlined" style={{display: editDeleteRights ? "inline" : "none", marginRight: "10px"}} onClick={deleteEvent}>Delete Event</Button>
        <Button variant="contained" style={{display: editDeleteRights ? "inline" : "none"}} onClick={editEvent}>Edit Event</Button>
      </div>
      <div style={{float: "right", width: "100%", marginBottom: "10px"}}>
        <Button variant="outlined" style={{float: "right"}} onClick={attendEvent}>Attend Event</Button>
      </div>
      <form onSubmit={onSubmit}>
        <TextField
          label="Title:"
          fullWidth
          value={event.title}
          disabled={!isEditing} 
          variant="outlined"
          onChange={updateTitle}
          sx={{
            'margin-bottom': '20px',
            '& input.Mui-disabled': {
              '-webkit-text-fill-color': 'black',
              'color': 'black',
            },
            '& .MuiInputLabel-root.Mui-disabled': { color: 'black' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': { border: !isEditing ? 'none' : '1px solid'},
              '&:hover fieldset': { border: !isEditing ? 'none' : '1px solid' },
              '&.Mui-focused fieldset': { border: !isEditing ? 'none' : '1px solid' },
            }
          }}
        />
        <TextField
          label="Description:"
          fullWidth
          value={event.description}
          disabled={!isEditing} 
          variant="outlined"
          onChange={updateDescription}
          sx={{
            'margin-bottom': '20px',
            '& input.Mui-disabled': {
              '-webkit-text-fill-color': 'black',  // Overwriting color for WebKit browsers
              'color': 'black',  // Fallback for other browsers
            },
            '& .MuiInputLabel-root.Mui-disabled': { color: 'black' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': { border: !isEditing ? 'none' : '1px solid' },
              '&:hover fieldset': { border: !isEditing ? 'none' : '1px solid' },
              '&.Mui-focused fieldset': { border: !isEditing ? 'none' : '1px solid' },
            }
          }}
        />
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>Media</Typography>
        <ul>
          {event.media.map((file, index) => (
            <li key={index}><a href={file} target="_blank" rel="noopener noreferrer">View Media {index + 1}</a></li>
          ))}
        </ul>
        {isEditing && 
          <div style={{float: "right", width: "100%", marginBottom: "10px"}}>
            <Button type="submit" variant="contained" style={{float: "right"}}>Update Event</Button>
          </div>
        }
      </form>
      <Typography variant="body1">Created by: {event.creator}</Typography>
      <Typography variant="body1">Attendees: {event.attendees.length}</Typography>
      <ul>
        {event.attendees.map((attendee, index) => (
          <li key={index}>{attendee}</li>
        ))}
      </ul>
    </div>
  );
}

export default EventDetail;
