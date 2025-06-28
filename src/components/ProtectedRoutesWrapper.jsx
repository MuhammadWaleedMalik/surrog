// components/ProtectedRouteWrapper.js
import React from 'react';
import ProtectedRoute from './ProtectedRoute';

interface ProtectedRouteWrapperProps {
  Component: React.ComponentType;
}

const ProtectedRouteWrapper: React.FC<ProtectedRouteWrapperProps> = ({ Component }) => (
  <ProtectedRoute>
    <Component />
  </ProtectedRoute>
);

export default ProtectedRouteWrapper;
