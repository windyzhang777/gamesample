import React from 'react';
import TopBar from 'src/components/TopBar';
import {useSelector} from 'react-redux';
import {RootState} from 'src/store';

export interface ConnectedTopBarProps {
  backgroundColor: string;
}

export default function ConnectedTopBar({backgroundColor}) {
  const topBarProps = {
    isCandyGiver: useSelector((state: RootState) => state.user.isCandyGiver),
    spookyPoints: 999,
    candyPoints: 999,
    treatBowlPoints: 999,
    backgroundColor,
  };
  return <TopBar {...topBarProps} />;
}
