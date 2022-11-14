import React from 'react';

//  views
import {createStackNavigator} from '@react-navigation/stack';
import ShoppingCart from '../ShoppingCart';
import HamburgerMenuIcon from '../../components/HamburgerMenuIcon';
import RedeemCandyCredits from '../RedeemCandyCredits';

const RedeemStack = createStackNavigator();

const RedeemFlow = () => (
  <RedeemStack.Navigator>
    <RedeemStack.Screen
      name="Redeem"
      component={RedeemCandyCredits}
      options={{
        headerLeft: (props) => <HamburgerMenuIcon />,
      }}
    />
    <RedeemStack.Screen name="ShoppingCart" component={ShoppingCart} />
  </RedeemStack.Navigator>
);

export default RedeemFlow;
