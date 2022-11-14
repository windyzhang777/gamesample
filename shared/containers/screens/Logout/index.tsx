import {RenderedComponent} from 'shared/models/RenderedComponent';
import {RootStoreState} from '../../../store';
import * as authActions from 'shared/store/authentication/actions';

/**
 * These are the properties of the HomeShared
 * These are passed to the dummy rendering component
 */
export interface LogoutProps {
  useSelector?: any;
  useDispatch?: any;
  login?: () => void;
  logout?: () => void;
}

/**
 * This is the navigation item's logic
 * @param {HomeProps} props properties for shared
 */
export default function Logout({
  useSelector,
  useDispatch,
  login,
  logout,
  renderComponent,
}: LogoutProps & RenderedComponent<LogoutProps>) {
  const b2cId = useSelector((state: RootStoreState) => state.user.b2cId);
  const dispatch = useDispatch();

  //  this clears all references to the existing user from state
  const clearLoginState = () => {
    authActions.logout({b2cId}, dispatch);
  };

  const handleLogout = () => {
    if (logout) logout();
    clearLoginState();
  };

  /**
   * This is where we would implement our react logic
   * Such as using hooks
   */
  /**
   * This contains all the render properties
   * for what data we pass to be rendered
   */
  const renderProps: LogoutProps = {
    login,
    logout: handleLogout,
  };
  return renderComponent(renderProps);
}
