/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Routes, Route, Link, Navigate, Outlet } from 'react-router-dom';
import { Login } from './Login';

export const ProtectedRoute = ({ user }) => {

    if (!user) return <Navigate to="/login" replace />

    return <Outlet />
      
};