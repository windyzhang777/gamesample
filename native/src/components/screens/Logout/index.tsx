import React, {useEffect} from 'react';
import LogoutShared, {LogoutProps} from 'shared/containers/screens/Logout';
import {useSelector, useDispatch} from 'react-redux';
import {Redirect} from 'react-router-native';
/**
 * This is a native version of rendering
 * @param {HomeSharedProps} props
 */
const LogoutComponent = ({logout}: LogoutProps) => {
  useEffect(() => {
    if (logout) {
      logout();
    }
  }, [logout]);

  return <Redirect to="/" />;
};

export default function Logout(props: LogoutProps) {
  //This is just passing down the properties
  return (
    <LogoutShared
      {...props}
      useSelector={useSelector}
      useDispatch={useDispatch}
      renderComponent={LogoutComponent}
    />
  );
}
