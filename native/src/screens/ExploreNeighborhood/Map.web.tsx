import React, {useEffect, useState} from 'react';
import ReactMapboxGl, {Feature, Layer} from 'react-mapbox-gl';
import {useSelector} from 'react-redux';

import {ExploreNeighborhoodRenderProps} from './index';
import Avatar from 'src/assets/images/Placeholder_frakenstein_horns.png';
import PlaceholderDoorImage from 'src/assets/images/Placeholder_6PanelDoorcoverings.png';
import usePosition from './UsePosition';
import {GeoLocation} from 'src/models/GeoLocation';
import {MAPBOX_ACCESS_TOKEN} from 'src/const/keys';
import {RootStoreState} from 'src/models/RootStoreState';

const MapboxMap = ReactMapboxGl({
  accessToken: MAPBOX_ACCESS_TOKEN,
});

export const Map = ({
  getNearbyDoorsFromPlayFab,
  onSetLocation,
  onFeatureClick,
}: ExploreNeighborhoodRenderProps) => {
  const [localDoors, setLocalDoors] = useState<[] | undefined>(undefined);
  const localLocation: GeoLocation | undefined = useSelector(
    (state: RootStoreState) => state.doors.location,
  );
  const nearbyDoors = useSelector((state: RootStoreState) => state.doors.nearbyDoors);

  // lat & lng from usePosition are only used to get the user location and update state. lat & lng provided to the map come from state.
  const {latitude, longitude} = usePosition();

  useEffect(() => {
    if (latitude === 0 || longitude === 0) return;
    getNearbyDoorsFromPlayFab({lat: latitude, lng: longitude});

    onSetLocation({
      latitude: latitude,
      longitude: longitude,
    });
  }, [getNearbyDoorsFromPlayFab, latitude, longitude, onSetLocation]);

  useEffect(() => {
    if (!nearbyDoors) return;
    setLocalDoors(nearbyDoors);
  }, [nearbyDoors]);

  // Create an image for the user layer
  const userImage: HTMLImageElement = new Image();
  userImage.src = Avatar;
  userImage.height = 124;
  userImage.width = 64;
  const userCharacter: any = ['me', userImage];

  // Create an image for the doors layer
  const doorsImage: HTMLImageElement = new Image();
  doorsImage.src = PlaceholderDoorImage;
  doorsImage.height = 85;
  doorsImage.width = 53;
  const doorImages: any = ['door', doorsImage];

  if (localLocation && localLocation.longitude && localLocation.latitude) {
    return (
      <MapboxMap
        style="mapbox://styles/claycalv/ckdre2yc20vu719p8pbm1mise"
        center={[localLocation.longitude, localLocation.latitude]}
        zoom={[15]}
        pitch={[60]}
        containerStyle={{
          height: '100vh',
          width: '100vw',
        }}>
        <Layer
          key="1"
          type="symbol"
          id="doors"
          layout={{'icon-image': 'door'}}
          images={doorImages}
          anchor="bottom">
          {localDoors &&
            localDoors.map((door: any) => (
              <Feature
                key={`${door[0]}-${door[1]}`}
                coordinates={[door[0], door[1]]}
                onClick={(e) => onFeatureClick(e)}
              />
            ))}
        </Layer>
        <Layer
          key="2"
          type="symbol"
          id="user"
          layout={{'icon-image': 'me'}}
          images={userCharacter}
          anchor="bottom">
          <Feature
            key={`${localLocation.longitude}-${localLocation.latitude}`}
            coordinates={[localLocation.longitude, localLocation.latitude]}
            onClick={(e) => onFeatureClick(e)}
          />
        </Layer>
      </MapboxMap>
    );
  } else {
    return <div>Loading....</div>;
  }
};
