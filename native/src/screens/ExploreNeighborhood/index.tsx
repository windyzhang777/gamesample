import React from 'react';
import {useDispatch} from 'react-redux';
import {Map} from './Map';
import {getNearbyDoors, setLocation} from 'src/store/doors/actions';
import {GeoLocation} from 'src/models/GeoLocation';
import {Container} from '../../components/Container';
import ConnectedTopBar from 'src/containers/ConnectedTopBar';
import {StatusBar, SafeAreaView} from 'react-native';

export interface ExploreNeighborhoodRenderProps {
  getNearbyDoorsFromPlayFab?: any;
  localNativeDoors?: any;
  useSelector?: any;
  onSetLocation: (location: GeoLocation) => void;
  onFeatureClick: (e: any) => void;
}

export default function ExploreNeighborhood() {
  const dispatch = useDispatch();

  const getNearbyDoorsFromPlayFab = (loc: GeoLocation) => {
    if (loc && loc.latitude !== 0 && loc.longitude !== 0) {
      getNearbyDoors(loc, dispatch);
    }
  };

  const onFeatureClick = (e: any) => {
    console.log('Event: onFeatureClick - ', e);
    console.log('Event: onFeatureClick - ', e.feature.geometry);
    //trigger popup (later)
  };

  const handleOnSetLocation = (location: GeoLocation) => {
    dispatch(setLocation({location}));
  };

  return (
    <>
      <SafeAreaView style={{flex: 0, backgroundColor: '#000C2E'}} />
      <Container style={{backgroundColor: 'transparent'}}>
        <StatusBar barStyle="light-content" />
        <ConnectedTopBar backgroundColor={'#000C2E'} />
        <Map
          key="explore-neighborhood-map"
          getNearbyDoorsFromPlayFab={getNearbyDoorsFromPlayFab}
          onFeatureClick={onFeatureClick}
          onSetLocation={handleOnSetLocation}
        />
      </Container>
    </>
  );
}
