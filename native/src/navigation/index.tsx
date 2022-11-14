import './GestureHandler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import ExploreNeighborhood from '../screens/ExploreNeighborhood';
import EditYourDoor from '../screens/EditYourDoor';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawerContent from './drawer';
import {Platform, StyleSheet} from 'react-native';
import CandyPurchaseFlow from '../screens/BuyCandy';
import RedeemFlow from '../screens/RedeemFlow';
import EditYourAvatar from 'src/screens/EditYourAvatar';
import ManageToterFlow from '../screens/ManageToterFlow';
import ConnectedTriviaGame from 'src/containers/trivia/ConnectedTriviaGame';
import SudokuGame from 'src/components/sudoku/SudokuGame';
import ConnectedProfileSelection from 'src/containers/ConnectedProfileSelection';
import RushHourGame from 'src/components/rushHour/RushHourGame';

const Drawer = createDrawerNavigator();

const drawerNav = {
  backgroundColor: '#DDFAFF',
  width: '100%',
};

if (Platform.OS === 'web') {
  drawerNav['height'] = '100vh';
}

export const styles = StyleSheet.create({drawerNav});

export function Navigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerStyle={styles.drawerNav}
        initialRouteName="Explore"
        drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name={`Buy & Manage Candy`} component={CandyPurchaseFlow} />
        {/*<Drawer.Screen name="Customize Avatar" component={CustomizeAvatar} />*/}
        <Drawer.Screen name="Explore" component={ExploreNeighborhood} />
        <Drawer.Screen name="Manage Your Family" component={ManageToterFlow} />
        <Drawer.Screen name="Edit Your Door" component={EditYourDoor} />
        <Drawer.Screen name="Edit Your Avatar" component={EditYourAvatar} />
        <Drawer.Screen name="Redeem Candy" component={RedeemFlow} />
        <Drawer.Screen name="Trivia Game" component={ConnectedTriviaGame} />
        <Drawer.Screen name="Sudoku Game" component={SudokuGame} />
        <Drawer.Screen name="Profile Selection" component={ConnectedProfileSelection} />
        <Drawer.Screen name="Rush Hour" component={RushHourGame} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
