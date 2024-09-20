import { jwtDecode } from 'jwt-decode';

// Function to decode JWT and get user ID
export const getUserIdFromToken = () => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwtDecode(token);
      return decoded.id;
    }
    return null;
  };