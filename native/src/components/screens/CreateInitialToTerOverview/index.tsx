import React from 'react';
import CreateInitialToTerShared, {
  CreateInitialToTerRenderProps,
} from 'shared/containers/screens/CreateInitialToTer';
import {View, Text} from 'react-native';
import {Link} from 'react-router-native';
import styles from './CreateInitialToTer.stylesheet';

const CreateInitialToTerOverview = () => {
  return (
    <CreateInitialToTerShared
      renderComponent={({copy}: CreateInitialToTerRenderProps) => {
        return (
          <View style={styles.CreateIntitialToTer}>
            <Text style={styles.p}>{copy.overviewTitle1}</Text>
            <Text style={styles.p}>{copy.overviewTitle2}</Text>
            <Link to="/create_initial_toter_add_child">
              <View>
                <Text style={styles.button}>{copy.overviewSetUpButton}</Text>
              </View>
            </Link>
            <Link to="/explore_neighborhood">
              <Text style={styles.button}>{copy.overviewSkipButton}</Text>
            </Link>
          </View>
        );
      }}
    />
  );
};

export default CreateInitialToTerOverview;
