import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Route} from 'react-router-native';

import ProtectedRouteShared, {
  ProtectedRouteProps,
  ProtectedRouteSharedProps,
} from 'shared/containers/ProtectedRoute';
import {Button, Text} from 'react-native';

const ProtectedRoute = (props: ProtectedRouteProps) => {
  return (
    <ProtectedRouteShared
      {...props}
      useSelector={useSelector}
      useDispatch={useDispatch}
      renderComponent={({
        component,
        isLoggingInToPlayfab,
        path,
        sessionTicket,
        forceNativeLogin,
      }: ProtectedRouteSharedProps) => {
        if (isLoggingInToPlayfab && !sessionTicket) {
          return <Text>Logging in...</Text>;
        }
        if (!sessionTicket) {
          return <Button title="Login" onPress={forceNativeLogin} />;
        }
        return <Route path={path} component={component} />;
      }}
    />
  );
};

export default ProtectedRoute;
