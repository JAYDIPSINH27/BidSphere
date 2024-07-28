import React from 'react';
import { Navigate } from 'react-router-dom';

const isAuthenticated = () => !!(sessionStorage.getItem('token') || localStorage.getItem('token'));

const PrivateRoute = ({ children }) => isAuthenticated() ? children : <Navigate to="/signin" />;

export default PrivateRoute;
