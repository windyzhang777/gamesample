import React from 'react';
import {RenderedComponent} from 'shared/models/RenderedComponent';
import {buyCandyAction} from 'shared/store/candy-bowl/actions';

export interface BuyCandyViewProps {
  buyCandy: (amount: number) => void;
  copy: {
    button: string;
  };
}

/**
 * These are the properties of the CandyGiver
 * These are passed to the dummy rendering component
 */
export interface BuyCandyProps extends RenderedComponent<BuyCandyViewProps> {
  useDispatch?: any;
  useSelector?: any;
}

export default function CandyGiver({
  renderComponent,
  useDispatch,
}: BuyCandyProps): React.ReactElement {
  /**
   * This is where we would implement our react logic
   * Such as using hooks
   */

  const dispatch = useDispatch();

  const buyCandy = (amount: number) => {
    buyCandyAction({amount}, dispatch);
  };

  /**
   * This contains all the render properties
   * for what data we pass to be rendered
   */
  const renderProps: BuyCandyViewProps = {
    buyCandy,
    copy: {
      button: `Buy 100 Candy`,
    },
  };
  return renderComponent(renderProps);
}
