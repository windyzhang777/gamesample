import React, {useCallback, useEffect, useState} from 'react';
import {View, Modal} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import styles from './ExploreNeighborhood.stylesheet';

import {ExploreNeighborhoodRenderProps} from 'shared/containers/screens/ExploreNeighborhood';
import TrickOrTreat from '../../TrickOrTreat';
import {ImageButton} from '../../ImageButton';

const iconStyles = () => ({
  greenWitch: {
    iconImage: require('native/src/assets/images/green_witch.png'),
    iconAllowOverlap: true,
    iconSize: 0.15,
  },
  door: {
    iconImage: require('native/src/assets/images/demoProfileImage.png'),
    iconAllowOverlap: true,
    iconSize: 0.3,
  },
});

export const Map = ({
  getNearbyDoorsFromPlayFab,
  useSelector,
  onSetLocation,
  onFeatureClick,
}: ExploreNeighborhoodRenderProps) => {
  const [isSlidePanelActive, setIsSlidePanelActive] = useState<boolean>(false);
  const [localNativeDoors, setLocalNativeDoors] = useState<{} | undefined>(undefined);
  const localLocation = useSelector((state: any) => state.doors.location);
  const nearbyDoors = useSelector((state: any) => state.doors.nearbyDoors);
  const symbols = iconStyles();

  const getNativeDoors = useCallback(() => {
    return {
      type: 'FeatureCollection',
      features: nearbyDoors.map((door: any) => ({
        type: 'Feature',
        geometry: {type: 'Point', coordinates: door},
      })),
    };
  }, [nearbyDoors]);

  const handleFeatureClick = useCallback(
    (feature: any) => {
      setIsSlidePanelActive(!isSlidePanelActive);
      if (onFeatureClick) {
        onFeatureClick(feature);
      }
    },
    [isSlidePanelActive, onFeatureClick],
  );

  useEffect(() => {
    if (localLocation.latitude === 0 || localLocation.longitude === 0) {
      return;
    }
    if (getNearbyDoorsFromPlayFab) {
      getNearbyDoorsFromPlayFab({
        latitude: localLocation.latitude,
        longitude: localLocation.longitude,
      });
    }
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
        styleURL="mapbox://styles/shauncrump/ckar23tbj0pbg1imt1cxo6ozj">
        <MapboxGL.Camera
          defaultSettings={{
            centerCoordinate: [localLocation.longitude, localLocation.latitude],
            zoomLevel: 15,
          }}
          followUserLocation={true}
          followUserMode="course"
          followZoomLevel={15}
        />
        {localNativeDoors && (
          <MapboxGL.ShapeSource
            id="symbolLocationSource"
            hitbox={{width: 20, height: 20}}
            onPress={handleFeatureClick}
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
          <MapboxGL.SymbolLayer id={'custom'} style={symbols.greenWitch} />
        </MapboxGL.UserLocation>
      </MapboxGL.MapView>
      <Modal
        animationType="slide"
        visible={isSlidePanelActive}
        onDismiss={() => setIsSlidePanelActive(false)}>
        <View style={styles.ModalView}>
          <TrickOrTreat
            onSelectTrickClick={() => setIsSlidePanelActive(false)}
            onSelectTreatClick={() => setIsSlidePanelActive(false)}
          />
          <ImageButton
            text="Back to Map"
            textStyle={styles.ModalBackButtonText}
            style={styles.ModalBackButton}
            onPress={() => setIsSlidePanelActive(false)}
          />
        </View>
      </Modal>
    </View>
  );
};
