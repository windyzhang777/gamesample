import {RenderedComponent} from 'shared/models/RenderedComponent';
import {NavigationMenuType} from '../../../store/navigation-system/types';

/**
 * These are the properties of the HomeShared
 * These are passed to the dummy rendering component
 */
export interface HomeProps {
  useSelector?: any;
  useDispatch?: any;
  login?: () => void;
  logout?: () => void;
  displayName?: string;
  sessionTicket?: any;
}

export interface HomeRenderProps {
  navigationMenu: NavigationMenuType;
  login?: () => void;
  logout?: () => void;
}

/**
 * This is the navigation item's logic
 * @param {HomeProps} props properties for shared
 */
export default function Home({
  useSelector,
  login,
  renderComponent,
}: HomeProps & RenderedComponent<HomeProps & HomeRenderProps>) {
  /**
   * This is where we would implement our react logic
   * Such as using hooks
   */
  /**
   * This contains all the render properties
   * for what data we pass to be rendered
   */
  const renderProps: HomeProps & HomeRenderProps = {
    login,
    navigationMenu: useSelector((state: any) => state.navigationSystem),
    displayName: useSelector((state: any) => state.user.displayName),
    sessionTicket: useSelector((state: any) => state.user.sessionTicket),
  };
  return renderComponent(renderProps);
}
