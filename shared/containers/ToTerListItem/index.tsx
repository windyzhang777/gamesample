import {RenderedComponent} from '../../models/RenderedComponent';
import {ToTerType} from '../../store/trick-or-treat/types';

/**
 * These are the properties of the NavigationItemShared
 * These are passed to the dummy rendering component
 */
export interface ToTerListItemProps {
  toterItem: ToTerType;
}

/**
 * This is the ToTer List item's logic
 * @param {ToTerListItemProps} props properties for shared
 */
export default function ToTerListItem({
  toterItem,
  renderComponent,
}: ToTerListItemProps & RenderedComponent<ToTerListItemProps>) {
  /**
   * This is where we would implement our react logic
   * Such as using hooks
   */

  /**
   * This contains all the render properties
   * for what data we pass to be rendered
   */
  const renderProps: ToTerListItemProps = {
    toterItem,
  };
  return renderComponent(renderProps);
}
