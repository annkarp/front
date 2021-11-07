import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export function PrivateRoute({ children, user }) {
  const location = useLocation();
  return (
    user
        ? children
        : <Navigate to='login' state={{ from: location }} />
  )
}
