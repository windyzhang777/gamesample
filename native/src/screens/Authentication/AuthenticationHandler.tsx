import {useSelector} from 'react-redux';
import React, {useEffect} from 'react';
import {setAuthHeader} from 'src/utils/api';
import {userSessionTicketSelector} from 'src/store/user/selectors';
import AuthenticationHOC from './index';
import {AuthenticationHandlerProps} from './AuthenticationHandlerProps';

const AuthenticationHandler = ({children, store}: AuthenticationHandlerProps) => {
  const token = useSelector(userSessionTicketSelector);

  // This is needed so we can set the user's auth tokens for all API calls when redux persist finishes hydrating
  useEffect(() => {
    // Logging in the first time will make this token undefined / null, but, the auth saga calls this during login
    if (token) {
      setAuthHeader(token);
    }
  }, [token]);

  return <AuthenticationHOC store={store}>{children}</AuthenticationHOC>;
};

export default AuthenticationHandler;
