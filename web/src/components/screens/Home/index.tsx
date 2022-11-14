import React, {useState} from 'react';
import HomeShared, {HomeProps, HomeRenderProps} from 'shared/containers/screens/Home';
import NavigationSystem from '../../NavigationSystem';
import {useSelector} from 'react-redux';
import SetDisplayName from '../../SetDisplayName';

/**
 * This is a native version of rendering
 * @param {HomeProps} props
 */
export default function Home(props: HomeProps) {
  //This is just passing down the properties
  return (
    <HomeShared
      {...props}
      useSelector={useSelector}
      renderComponent={({
        login,
        displayName,
        navigationMenu,
        sessionTicket,
      }: HomeProps & HomeRenderProps) => {
        if (sessionTicket && !displayName) {
          return <SetDisplayName />;
        } 
        return (
          <NavigationSystem
            useState={useState}
            topBarTitle="westgate hills"
            navigationMenu={navigationMenu}
            login={login}
          />
        );
      }}
    />
  );
}
