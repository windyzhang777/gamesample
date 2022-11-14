import {RenderedComponent} from '../../models/RenderedComponent';

/**
 * These are the properties of the NavigationItemShared
 * These are passed to the dummy rendering component
 */
export interface NotificationIconProps {
  notificationNumber: number;
}

/**
 * This is the navigation item's logic
 * @param {NotificationIconProps} props properties for shared
 */
export default function NotificationIcon({
  notificationNumber,
  renderComponent,
}: NotificationIconProps & RenderedComponent<NotificationIconProps>) {
  /**
   * This is where we would implement our react logic
   * Such as using hooks
   */

  /**
   * This contains all the render properties
   * for what data we pass to be rendered
   */
  const renderProps: NotificationIconProps = {
    notificationNumber: notificationNumber,
  };
  return renderComponent(renderProps);
}
