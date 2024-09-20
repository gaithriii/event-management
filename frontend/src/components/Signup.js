// frontend/src/components/Signup.js
import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography } from '@mui/material';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/auth/signup', { email, password });
      alert('Signup successful');
    } catch (error) {
      alert('Signup failed');
    }
  };

  return (
    <div style={{padding: "0 10px"}}>
      <Typography variant="h4">Create a new account</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* {error && <Typography color="error">{error}</Typography>} */}
        <Button type="submit" variant="contained" color="primary" style={{marginTop: "10px"}}>
          Create a new account
        </Button>
      </form>
    </div>
  );
}

export default Signup;
