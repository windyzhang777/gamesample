import {RenderedComponent} from '../../models/RenderedComponent';
import {NavigationItemType} from '../../store/navigation-system/types';

/**
 * These are the properties of the NavigationItemShared
 * These are passed to the dummy rendering component
 */
export interface NavigationItemProps {
  navigationItem: NavigationItemType;
  toggleDrawerCallback: () => void;
}

/**
 * This is the navigation item's logic
 * @param {NavigationItemProps} props properties for shared
 */
export default function NavigationItem({
  navigationItem,
  toggleDrawerCallback,
  renderComponent,
}: NavigationItemProps & RenderedComponent<NavigationItemProps>) {
  /**
   * This is where we would implement our react logic
   * Such as using hooks
   */

  /**
   * This contains all the render properties
   * for what data we pass to be rendered
   */
  const renderProps: NavigationItemProps = {
    navigationItem,
    toggleDrawerCallback,
  };
  return renderComponent(renderProps);
}
