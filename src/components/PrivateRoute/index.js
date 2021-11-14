import React from 'react';
import { Navigate } from 'react-router-dom';
import { getUser } from '../../storage';

export function PrivateRoute({ children }) {
  return (
    getUser()
        ? children
        : <Navigate to='/login' />
  )
}
