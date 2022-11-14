import React from 'react';
import {Route, Redirect} from 'react-router-dom';

import ProtectedRouteShared, {
  ProtectedRouteProps,
  ProtectedRouteSharedProps,
} from 'shared/containers/ProtectedRoute';

const ProtectedRoute = (props: ProtectedRouteProps) => {
  return (
    <ProtectedRouteShared
      {...props}
      renderComponent={({
        component,
        path,
        sessionTicket,
        displayName,
      }: ProtectedRouteSharedProps) => {
        if (!sessionTicket) return <Redirect to="/login" />;
        if (!displayName) return <Redirect to="/set-display-name" />;
        return <Route path={path} component={component} />;
      }}
    />
  );
};

export default ProtectedRoute;
