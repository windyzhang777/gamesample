import React from 'react';
import ExploreNeighborhoodShared, {
  ExploreNeighborhoodProps,
  ExploreNeighborhoodRenderProps,
} from 'shared/containers/screens/ExploreNeighborhood';
import {Platform} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import {useDispatch, useSelector} from 'react-redux';
import {Map} from './Map';
import {MAPBOX_ACCESS_TOKEN} from 'shared/const/keys';

MapboxGL.setAccessToken(MAPBOX_ACCESS_TOKEN);

if (Platform.OS === 'android') {
  MapboxGL.requestAndroidLocationPermissions().catch((e) => console.log(e));
}

export default function ExploreNeighborhood(props: ExploreNeighborhoodProps) {
  return (
    <ExploreNeighborhoodShared
      {...props}
      useDispatch={useDispatch}
      useSelector={useSelector}
      renderComponent={(renderProps: ExploreNeighborhoodRenderProps) => (
        <Map key="explore-neighborhood-map" {...renderProps} />
      )}
    />
  );
}
