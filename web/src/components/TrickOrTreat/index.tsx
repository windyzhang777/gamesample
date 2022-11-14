import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import TrickOrTreatShared, {TrickOrTreatProps} from 'shared/containers/screens/TrickOrTreat';
import {ImageButton} from '../ImageButton';

import TreatIcon from 'web/src/assets/images/treatButton.svg';
import TrickIcon from 'web/src/assets/images/trickButton.svg';

import GothicDoorPng from 'web/src/assets/images/gothic-door.png';

import './styles.css';

export default function TrickOrTreat(props: TrickOrTreatProps) {
  return (
    <TrickOrTreatShared
      {...props}
      useDispatch={useDispatch}
      useSelector={useSelector}
      renderComponent={({onSelectTrickClick, onSelectTreatClick}: TrickOrTreatProps) => {
        return (
          <div className="trick-or-treat">
            <h1>Old Soandso's Door</h1>
            <img className="trick-or-treat-door" src={GothicDoorPng} alt="default door" />
            <div className="trick-or-treat-actions">
              <ImageButton
                classNames="trick-or-treat-trick-button"
                imageAlt="Select Trick"
                imageSrc={TrickIcon}
                text="Trick"
                onClick={onSelectTrickClick}
              />
              <ImageButton
                classNames="trick-or-treat-treat-button"
                imageAlt="Select Treat"
                imageSrc={TreatIcon}
                text="Treat"
                onClick={onSelectTreatClick}
              />
            </div>
          </div>
        );
      }}
    />
  );
}
