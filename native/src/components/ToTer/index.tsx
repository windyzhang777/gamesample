// import {useDispatch, useSelector} from 'react-redux';
import React from 'react';
// import {chooseTreat, chooseTrick} from 'shared/store/trick-or-treat/actions';
import {View, Button, Text, StyleSheet} from 'react-native';
import ToterShared, {ToterProps} from 'shared/containers/Toter';
import {useDispatch} from 'react-redux';

const renderCandy = (cachedImages, candy) => {
  const items = [];

  // for (let step = 0; step < candy.count; step++) {
  //   items.push(
  //     <Image
  //       source={{uri: cachedImages[`${candy.id}.jpg`]}}
  //       alt={candy.id}
  //       key={`${candy.id}-${step}`}
  //     />,
  //   );
  // }

  items.push(
    <Text>
      {candy.id}: {candy.count}
    </Text>,
  );

  return items;
};

const ToTer = (props: ToterProps) => {
  // const dispatch = useDispatch();
  // const cachedImages = useSelector((state) => state.content);

  return (
    <ToterShared
      {...props}
      useDispatch={useDispatch}
      renderComponent={({
        chooseTrick,
        chooseTreat,
        id,
        cachedImages,
        candies,
        name,
      }: ToterProps) => {
        return (
          <View>
            <Text>Candy In {name}'s Pillowcase</Text>
            {candies &&
              candies.map((candy) => (
                <View key={candy.id}>{renderCandy(cachedImages, candy)}</View>
              ))}
            <View style={styles.buttonRow}>
              <Button onPress={() => chooseTrick()} title="Trick" />
              <Text>or</Text>
              <Button onPress={() => chooseTreat(id)} title="Treat" />
            </View>
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  candyImage: {
    height: 20,
    width: 20,
  },
});

export default ToTer;
