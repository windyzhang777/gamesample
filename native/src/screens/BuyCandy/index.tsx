import React from 'react';

//  views
import {createStackNavigator} from '@react-navigation/stack';
import ConnectedBuyCandy from 'src/containers/ConnectedBuyCandy';
import ShoppingCart from '../ShoppingCart';
import HamburgerMenuIcon from '../../components/HamburgerMenuIcon';

const CandyPurchaseStack = createStackNavigator();

const CandyPurchaseFlow = () => (
  <CandyPurchaseStack.Navigator>
    <CandyPurchaseStack.Screen
      name="BuyCandy"
      component={ConnectedBuyCandy}
      options={{
        headerLeft: (props) => <HamburgerMenuIcon />,
      }}
    />
    <CandyPurchaseStack.Screen name="ShoppingCart" component={ShoppingCart} />
  </CandyPurchaseStack.Navigator>
);
export default CandyPurchaseFlow;
