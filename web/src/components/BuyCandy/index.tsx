import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import BuyCandyShared, {BuyCandyViewProps} from 'shared/containers/BuyCandy';

const BuyCandy = () => {
  return (
    <BuyCandyShared
      useDispatch={useDispatch}
      useSelector={useSelector}
      renderComponent={({buyCandy, copy}: BuyCandyViewProps) => {
        const handleBuyCandyClick = () => {
          buyCandy(100);
        };

        return (
          <>
            <input
              id="buyCandyButton"
              type="button"
              onClick={handleBuyCandyClick}
              value={copy.button}
            />
          </>
        );
      }}
    />
  );
};

export default BuyCandy;
