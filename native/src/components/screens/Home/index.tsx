import React, {useState} from 'react';
import HomeShared, {HomeProps, HomeRenderProps} from 'shared/containers/screens/Home';
import NavigationSystem from '../../NavigationSystem';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import SetDisplayName from '../../SetDisplayName';

/**
 * This is a native version of rendering
 * @param {HomeProps} props
 */

export default function Home(props: HomeProps) {
  return (
    <HomeShared
      {...props}
      useSelector={useSelector}
      renderComponent={({displayName, logout, navigationMenu}: HomeProps & HomeRenderProps) => {
        if (!displayName) {
          return <SetDisplayName />;
        }
        return (
          <View style={{height: '100%', width: '100%'}}>
            <NavigationSystem
              topBarTitle={'TopBar Title'}
              useState={useState}
              navigationMenu={navigationMenu}
              logout={logout}
            />
          </View>
        );
      }}
    />
  );
}
