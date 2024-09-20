import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Typography } from '@mui/material';
import { getUserIdFromToken } from '../Utilities';

function CreateEvent() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [media, setMedia] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const navigation = useNavigate();

  const handleFileChange = (e) => {
    setMedia(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userId = getUserIdFromToken();

    if (!userId) {
      alert('Error: No user ID found');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    for (const file of media) {
      formData.append('media', file);
    }

    try {
      await axios.post('/api/events/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          // 'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'user-id': userId,
        },
      });
      alert('Event created successfully');
      setSubmitted(true);
    } catch (error) {
      alert('Error creating event: ' + error.response.data);
    }
  };

  useEffect(() => {
    if (submitted) {
      setTitle('');
      setDescription('');
      setMedia([]);
      setSubmitted(false);
    }

    console.log('title', title)
    console.log('description', description)
    console.log('media', media)
    console.log('submitted', submitted)
  }, [submitted]);

  const backToHome = (e) => {
    e.preventDefault(); 
    
    navigation('/')
  }

  return (
    <div style={{padding: "0 10px"}}>
      <Typography variant="h4">Create Event</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Event Title"
          required
          style={{width: "100%"}}
        />
        <TextField
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Event Description"
          multiline
          required
          style={{width: "100%", margin: "10px 0 25px"}}
        />
        <input
          type="file"
          multiple
          onChange={handleFileChange}
          style={{width: "100%", fontSize: "large"}}
        />
        <Button type="submit" variant="contained" color="primary" style={{marginTop: "30px"}}>Create Event</Button>
      </form>
      <Button variant="contained" color="primary" style={{marginTop: "40px"}} onClick={backToHome}>Back to Home</Button>
    </div>
  );
}

export default CreateEvent;
