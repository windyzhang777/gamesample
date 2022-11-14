import React from 'react';
import {RenderedComponent} from 'shared/models/RenderedComponent';
import {RootStoreState} from '../../store';

export interface CandyBowlViewProps {
  copy: {
    title: string;
  };
}

/**
 * These are the properties of the CandyGiver
 * These are passed to the dummy rendering component
 */
export interface CandyBowlProps extends RenderedComponent<CandyBowlViewProps> {
  useDispatch?: any;
  useSelector?: any;
}

export default function CandyGiver({
  renderComponent,
  useSelector,
}: CandyBowlProps): React.ReactElement {
  /**
   * This is where we would implement our react logic
   * Such as using hooks
   */

  const displayName = useSelector((state: RootStoreState) => state.user.displayName);
  const candy = useSelector((state: RootStoreState) => state.candyBowl.candy);

  /**
   * This contains all the render properties
   * for what data we pass to be rendered
   */
  const renderProps: CandyBowlViewProps = {
    copy: {
      title: `Candy In ${displayName}'s Bowl: ${candy}`,
    },
  };
  return renderComponent(renderProps);
}
