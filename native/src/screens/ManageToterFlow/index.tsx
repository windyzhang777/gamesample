import React from 'react';

//  views
import {createStackNavigator} from '@react-navigation/stack';
import ShoppingCart from '../ShoppingCart';
import HamburgerMenuIcon from '../../components/HamburgerMenuIcon';
import RedeemCandyCredits from '../RedeemCandyCredits';
import ManageTrickOrTreatersScreen from '../ManageTrickOrTreaters';
import EditToTer from '../EditToTer';
import AddToTerScreen from '../AddToTer';

const ManageToterStack = createStackNavigator();

const ManageToterFlow = () => (
  <ManageToterStack.Navigator>
    <ManageToterStack.Screen
      name="ManageFamily"
      component={ManageTrickOrTreatersScreen}
      options={{
        title: 'Manage Family',
        headerLeft: (props) => <HamburgerMenuIcon />,
      }}
    />
    <ManageToterStack.Screen
      name="EditToter"
      component={EditToTer}
      options={{
        title: 'Edit Trick or Treater',
      }}
    />
    <ManageToterStack.Screen
      name="AddToter"
      component={AddToTerScreen}
      options={{
        title: 'Add Trick or Treater',
      }}
    />
  </ManageToterStack.Navigator>
);

export default ManageToterFlow;
