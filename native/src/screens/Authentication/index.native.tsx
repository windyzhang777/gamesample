import React from 'react';
import {Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AuthenticationHandlerProps} from './AuthenticationHandlerProps';
import {RootStoreState} from 'src/models/RootStoreState';
import {login, refreshLogin} from 'src/store/authentication/actions';
import Login from './Login';

const AuthenticationHOC = ({children}: AuthenticationHandlerProps) => {
  const isLoggingInToPlayfab = useSelector(
    (state: RootStoreState) => state.user.isLoggingInToPlayfab,
  );
  const sessionTicket = useSelector((state: RootStoreState) => state.user.sessionTicket);
  const loginExpiration = useSelector((state: RootStoreState) => state.user.loginExpires) || 0;

  const dispatch = useDispatch();

  if (isLoggingInToPlayfab && !sessionTicket) {
    console.log('Refreshing Login!');
    return <Text>Logging in...</Text>;
  } else if (!sessionTicket) {
    console.log('Login!');
    const dispatchLogin = () => dispatch(login.request());
    dispatchLogin();
    return <Login login={dispatchLogin} />;
  } else if (sessionTicket && loginExpiration < Date.now()) {
    console.log(`Refreshing because ${loginExpiration} is before ${Date.now()}`);
    dispatch(refreshLogin.request());
    return <Text>Logging in...</Text>;
  } else {
    console.log(
      `Logged In! because ${loginExpiration} is after  ${Date.now()} and sessiont ticket is ${sessionTicket}`,
    );
    // console.log('returning: ', children);
    return children;
  }
};

export default AuthenticationHOC;
