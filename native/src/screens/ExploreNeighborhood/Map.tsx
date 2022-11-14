import React from 'react';
import {View, Text} from 'react-native';

import {ExploreNeighborhoodRenderProps} from 'src/screens/ExploreNeighborhood';
import {Container} from '../../components/Container';

export const Map = (props: ExploreNeighborhoodRenderProps) => (
  <Container>
    <Text>Props: {props}</Text>
  </Container>
);
