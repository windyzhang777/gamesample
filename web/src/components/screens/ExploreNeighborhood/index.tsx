import React from 'react';
import ExploreNeighborhoodShared, {
  ExploreNeighborhoodProps,
  ExploreNeighborhoodRenderProps,
} from 'shared/containers/screens/ExploreNeighborhood';
import {useDispatch, useSelector} from 'react-redux';
import {Map} from './Map';

export default function ExploreNeighborhood(props: ExploreNeighborhoodProps) {
  return (
    <ExploreNeighborhoodShared
      {...props}
      useDispatch={useDispatch}
      useSelector={useSelector}
      renderComponent={(props: ExploreNeighborhoodRenderProps) => (
        <Map key="explore-neighborhood-map" {...props} />
      )}
    />
  );
}
