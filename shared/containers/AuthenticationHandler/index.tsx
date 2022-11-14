import {setAuthHeader} from 'shared/utils/api';
import {userSessionTicketSelector} from 'shared/store/user/selectors';

export interface AuthenticationHandlerProps {
  children: any;
  useSelector?: any;
  useEffect?: any;
}

const AuthenticationHandler = function ({
  children,
  useEffect,
  useSelector,
}: AuthenticationHandlerProps) {
  const token = useSelector(userSessionTicketSelector);

  // This is needed so we can set the user's auth tokens for all API calls when redux persist finishes hydrating
  useEffect(() => {
    // Logging in the first time will make this token undefined / null, but, the auth saga calls this during login
    if (token) {
      setAuthHeader(token);
    }
  }, [token]);

  return children;
};

export default AuthenticationHandler;
