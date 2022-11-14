import React, {useCallback, useEffect, useState} from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import {useSelector} from 'react-redux';

import {ExploreNeighborhoodRenderProps} from './index';
import {MAPBOX_ACCESS_TOKEN} from 'src/const/keys';

MapboxGL.setAccessToken(MAPBOX_ACCESS_TOKEN);

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  map: {
    flex: 1,
  },
  tester: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    flex: 1,
  },
});

const iconStyles = () => ({
  avatar: {
    iconImage: require('src/assets/images/Placeholder_frakenstein_horns.png'),
    iconAllowOverlap: true,
    iconSize: 0.5,
  },
  door: {
    iconImage: require('src/assets/images/Placeholder_6PanelDoorcoverings.png'),
    iconAllowOverlap: true,
    iconSize: 0.4,
  },
});

export const Map = ({getNearbyDoorsFromPlayFab, onSetLocation}: ExploreNeighborhoodRenderProps) => {
  const symbols = iconStyles();
  if (Platform.OS === 'android') {
    MapboxGL.requestAndroidLocationPermissions().catch((e) =>
      console.log('should handle the error state when a user rejects gps', e),
    );
  }

  const [localNativeDoors, setLocalNativeDoors] = useState(undefined);
  const localLocation = useSelector((state: any) => state.doors.location);
  const nearbyDoors = useSelector((state: any) => state.doors.nearbyDoors);
  console.log(localNativeDoors);

  const getNativeDoors = useCallback(() => {
    return {
      type: 'FeatureCollection',
      features: nearbyDoors.map((door: any) => ({
        type: 'Feature',
        geometry: {type: 'Point', coordinates: door},
      })),
    };
  }, [nearbyDoors]);

  useEffect(() => {
    if (localLocation.latitude === 0 || localLocation.longitude === 0) {
      return;
    }

    getNearbyDoorsFromPlayFab({lat: localLocation.latitude, lng: localLocation.longitude});
  }, [getNearbyDoorsFromPlayFab, localLocation]);

  useEffect(() => {
    if (!nearbyDoors) {
      return;
    }
    setLocalNativeDoors(getNativeDoors());
  }, [getNativeDoors, nearbyDoors]);

  return (
    <View key="mapbox-neighborhood-map" style={styles.page}>
      <MapboxGL.MapView
        style={styles.map}
        styleURL="mapbox://styles/claycalv/ckdre2yc20vu719p8pbm1mise">
        <MapboxGL.Camera
          defaultSettings={{
            centerCoordinate: [localLocation.longitude, localLocation.latitude],
            zoomLevel: 15,
          }}
          followUserLocation={true}
          followUserMode="course"
          followZoomLevel={15}
          pitch={60}
        />
        {localNativeDoors && (
          <MapboxGL.ShapeSource
            id="symbolLocationSource"
            hitbox={{width: 20, height: 20}}
            shape={localNativeDoors} // The contents of the source. A shape can represent a GeoJSON geometry, a feature, or a feature colllection.
          >
            <MapboxGL.SymbolLayer
              id="symbolLocationSymbols"
              minZoomLevel={5}
              style={symbols.door}
            />
          </MapboxGL.ShapeSource>
        )}
        <MapboxGL.UserLocation
          onUpdate={(userLocation) => {
            if (userLocation?.coords?.speed && userLocation?.coords?.speed >= 2) {
              onSetLocation({
                latitude: userLocation?.coords?.latitude || 0,
                longitude: userLocation?.coords?.longitude || 0,
              });
            }
            //  if the location stored in redux is 0 (not set) then set with current userLocation
            if (localLocation.latitude === 0 || localLocation.longitude === 0) {
              onSetLocation({
                latitude: userLocation?.coords?.latitude || 0,
                longitude: userLocation?.coords?.longitude || 0,
              });
            }
          }}>
          <MapboxGL.SymbolLayer id={'custom'} style={symbols.avatar} />
        </MapboxGL.UserLocation>
      </MapboxGL.MapView>
    </View>
  );
};
