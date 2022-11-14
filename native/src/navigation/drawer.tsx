import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {DrawerActions} from '@react-navigation/native';
import {navigationPrimaryColor} from 'src/theme/variables';

export const styles = StyleSheet.create({
  NavigationDrawer: {
    flex: 1,
    padding: 30,
    backgroundColor: navigationPrimaryColor,
  },
  NavigationDrawerClose: {
    color: '#000C2E',
    // fontFamily: 'Tungsten',
    fontSize: 32,
    fontWeight: 'bold',
    letterSpacing: 0.8,
    lineHeight: 38,
    marginBottom: 39,
  },
  itemLabel: {
    color: '#000C2E',
    fontFamily: 'Tungsten',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  menuHeader: {
    color: '#000C2E',
    // fontFamily: 'Tungsten',
    fontSize: 32,
    fontWeight: 'bold',
    letterSpacing: 0.8,
    lineHeight: 38,
    textAlign: 'center',
    marginBottom: 39,
  },
  itemBox: {
    width: '90%',
    height: 103,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0,12,46,0.43)',
    borderRadius: 8,
  },
});

function CustomDrawerContent({navigation, ...props}: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView {...props} style={styles.NavigationDrawer}>
      <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.closeDrawer)}>
        <Text style={styles.NavigationDrawerClose}>X</Text>
      </TouchableOpacity>
      <Text style={styles.menuHeader}>Menu</Text>
      <DrawerItemList
        navigation={navigation}
        {...props}
        labelStyle={styles.itemLabel}
        itemStyle={styles.itemBox}
      />
    </DrawerContentScrollView>
  );
}

export default CustomDrawerContent;
