import { jwtDecode } from 'jwt-decode';

export const getUserFromToken = () => {
  let token = localStorage.getItem('token');
  if (!token) {
    token = sessionStorage.getItem('token');
  }
  if (token) {
    try {
      return jwtDecode(token);
    } catch (error) {
      console.error('Error decoding token', error);
      return null;
    }
  }
  return null;
};

export const clearUserToken = () => {
  localStorage.removeItem('token');
  sessionStorage.removeItem('token');
};
