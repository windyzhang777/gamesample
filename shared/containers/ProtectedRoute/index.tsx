import {RenderedComponent} from '../../util/@types';
import {RootStoreState} from '../../store';
import {login} from 'shared/store/authentication/actions';

/**
 * These are the properties of the Toter
 * These are passed to the dummy rendering component
 */
export interface ProtectedRouteProps {
  exact: boolean;
  component: RenderedComponent;
  key: string;
  path: string;
  useDispatch?: any;
  useSelector?: any;
}

export interface ProtectedRouteSharedProps extends ProtectedRouteProps {
  isLoggingInToPlayfab: boolean;
  sessionTicket: string;
  displayName: string;
  forceNativeLogin: () => void;
}

/**
 *
 * @param {RenderProps} props properties for shared
 */
export default function ProtectedRouteShared({
  component,
  exact,
  key,
  path,
  useSelector,
  useDispatch,
  renderComponent,
}: ProtectedRouteProps & RenderedComponent<ProtectedRouteSharedProps>) {
  /**
   * This is where we would implement our react logic
   * Such as using hooks
   */
  const dispatch = useDispatch();

  const forceNativeLogin = () => {
    dispatch(login.request());
  };

  const isLoggingInToPlayfab = useSelector(
    (state: RootStoreState) => state.user.isLoggingInToPlayfab,
  );
  const sessionTicket = useSelector((state: RootStoreState) => state.user.sessionTicket);
  const displayName = useSelector((state: RootStoreState) => state.user.displayName);
  /**
   * This contains all the render properties
   * for what data we pass to be rendered
   */
  const renderProps: ProtectedRouteSharedProps = {
    component,
    exact,
    isLoggingInToPlayfab,
    key,
    sessionTicket,
    path,
    displayName,
    forceNativeLogin,
  };
  return renderComponent(renderProps);
}
