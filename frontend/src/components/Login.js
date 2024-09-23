import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Typography } from '@mui/material';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [logged, setLogged] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/auth/login', { email, password });
      localStorage.setItem('token', response.data.token);
      setLogged(true);
    } catch (err) {
      setError('Login failed. Please check your credentials.');
    }
  };

  useEffect(() => {
    if (logged) {
      navigate('/events/create');
    }
  }, [logged, navigate]);

  return (
    <div style={{padding: "0 10px"}}>
      <Typography variant="h4">Login</Typography>
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
        {error && <Typography color="error">{error}</Typography>}
        <Button type="submit" variant="contained" color="primary" style={{margin: "10px 0 20px"}}>Login</Button>
      </form>
      <Button variant="contained" color="primary" href="/signup">Create a new account</Button>
    </div>
  );
};

export default Login;
