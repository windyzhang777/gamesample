import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import BuyCandyShared, {BuyCandyViewProps} from 'shared/containers/BuyCandy';

import {Button} from 'react-native';

const BuyCandy = () => {
  return (
    <BuyCandyShared
      useDispatch={useDispatch}
      useSelector={useSelector}
      renderComponent={({buyCandy, copy}: BuyCandyViewProps) => {
        const handleBuyCandyClick = () => {
          buyCandy(100);
        };

        return <Button onPress={handleBuyCandyClick} title={copy.button} />;
      }}
    />
  );
};

export default BuyCandy;
