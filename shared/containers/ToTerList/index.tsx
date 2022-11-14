import {RenderedComponent} from '../../models/RenderedComponent';
import {ToterState} from '../../store/trick-or-treat/types';

/**
 * These are the properties of the NavigationItemShared
 * These are passed to the dummy rendering component
 */
export interface ToTerListProps {
  toterList: ToterState;
}

/**
 * This is the ToTer List item's logic
 * @param {ToTerListProps} props properties for shared
 */
export default function ToTerList({
  toterList,
  renderComponent,
}: ToTerListProps & RenderedComponent<ToTerListProps>) {
  /**
   * This is where we would implement our react logic
   * Such as using hooks
   */

  /**
   * This contains all the render properties
   * for what data we pass to be rendered
   */
  const renderProps: ToTerListProps = {
    toterList,
  };
  return renderComponent(renderProps);
}
