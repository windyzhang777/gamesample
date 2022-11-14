import React from 'react';
import {StyleSheet} from 'react-native';
import TouchableImage from 'src/components/TouchableImage';
import icon from 'src/assets/images/topBarDrawerIcon.png';
import {DrawerActions} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';

const styles = StyleSheet.create({
  TopBarDrawerIcon: {
    width: 32,
    height: 32,
    marginLeft: 15,
  },
});

const HamburgerMenuIcon = () => {
  const navigation = useNavigation();
  return (
    <TouchableImage
      source={icon}
      style={styles.TopBarDrawerIcon}
      onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
    />
  );
};

export default HamburgerMenuIcon;
