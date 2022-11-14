import React, {useEffect, useState} from 'react';
import {ExploreNeighborhoodRenderProps} from 'shared/containers/screens/ExploreNeighborhood';
import GreenWitch from './green_witch.png';
import PlaceholderDoorImage from './demoProfileImage.png';
import ReactMapboxGl, {Feature, Layer} from 'react-mapbox-gl';
import usePosition from './UsePosition';
import {RootState} from '../../../store';
import {UserLocation} from 'shared/store/doors/reducer';
import {MAPBOX_ACCESS_TOKEN} from 'shared/const/keys';
import TrickOrTreat from '../../TrickOrTreat';
import {Modal} from '../../Modal';
import constructionBrickPng from 'web/src/assets/images/CustomizationBrick.png';

const MapboxMap = ReactMapboxGl({
  accessToken: MAPBOX_ACCESS_TOKEN,
});

export const Map = ({
  getNearbyDoorsFromPlayFab,
  useSelector,
  onSetLocation,
  onFeatureClick,
}: ExploreNeighborhoodRenderProps) => {
  const [isTrickOrTreatModalVisible, setIsTrickOrTreatModalVisible] = useState<boolean>(false);
  const [localDoors, setLocalDoors] = useState<[] | undefined>(undefined);
  const localLocation: UserLocation = useSelector((state: RootState) => state.doors.location);
  const nearbyDoors = useSelector((state: RootState) => state.doors.nearbyDoors);

  // lat & lng from usePosition are only used to get the user location and update state. lat & lng provided to the map come from state.
  const {latitude, longitude, error} = usePosition();
  const handleFeatureClick = (feature: any) => {
    setIsTrickOrTreatModalVisible(!isTrickOrTreatModalVisible);

    if (onFeatureClick) {
      onFeatureClick(feature);
    }
  };

  useEffect(() => {
    if (latitude === 0 || longitude === 0) return;
    if (getNearbyDoorsFromPlayFab) getNearbyDoorsFromPlayFab({latitude, longitude});

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
  userImage.src = GreenWitch;
  userImage.height = 57.8;
  userImage.width = 47.4;
  const userCharacter: any = ['me', userImage];

  // Create an image for the doors layer
  const doorsImage: HTMLImageElement = new Image();
  doorsImage.src = PlaceholderDoorImage;
  doorsImage.height = 57.8;
  doorsImage.width = 47.4;
  const doorImages: any = ['door', doorsImage];

  if (localLocation.longitude && localLocation.latitude) {
    return (
      <>
        <MapboxMap
          style="mapbox://styles/shauncrump/ckar23tbj0pbg1imt1cxo6ozj"
          center={[localLocation.longitude, localLocation.latitude]}
          zoom={[15]}
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
                  onClick={(e) => handleFeatureClick(e)}
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
            />
          </Layer>
        </MapboxMap>
        <Modal
          isOpen={isTrickOrTreatModalVisible}
          className="trick-or-treat-background"
          closeText="Back To Map"
          backgroundImageSrc={constructionBrickPng}
          onClose={() => {
            setIsTrickOrTreatModalVisible(false);
          }}>
          <TrickOrTreat
            onSelectTreatClick={() => setIsTrickOrTreatModalVisible(false)}
            onSelectTrickClick={() => setIsTrickOrTreatModalVisible(false)}
          />
        </Modal>
      </>
    );
  } else {
    return <div>Loading....</div>;
  }
};
