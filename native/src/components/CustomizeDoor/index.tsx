import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Text, SafeAreaView, View, ScrollView, TouchableOpacity} from 'react-native';
import CustomizeDoorShared, {
  CustomizeDoorRenderComponentProps,
} from 'shared/containers/CustomizeDoor';
import CustomizedDoor from '../CustomizedDoor';
import ColorButton from '../ColorButton';
import CustomOptionButton from '../CustomOptionButton';
import styles from './CustomizeDoor.stylesheet';
import {Decoration} from 'shared/models/Decoration';
import {Door} from 'shared/models/Door';

// The Render Component will take all the shared props/state from a shared component and use that to render in
// the platform specific way.  There should not be any logic here.  This will be view only.
const CustomizeDoorRenderComponent = ({
  saveDoor,
  contentState,
  doorState,
  handleClickColorButton,
  handleClickDoorButton,
  handleClickDecorationButton,
}: CustomizeDoorRenderComponentProps) => {
  const {doors, availableColors, group1Decorations, currentDoorCustomizations} = doorState;

  const {selectedGroupOneDecorations, selectedColor, selectedDoorId} = currentDoorCustomizations;

  return (
    <SafeAreaView style={styles.flex}>
      <CustomizedDoor />
      <ScrollView>
        <View style={styles.colorsContainer}>
          {availableColors.map((color) => (
            <ColorButton
              color={color}
              isActive={selectedColor === color}
              onPress={handleClickColorButton}
              key={color}
            />
          ))}
        </View>

        <Text style={styles.categoryText}>Door Designs</Text>
        <View style={styles.categoryWrapper}>
          {doors.map(({id, doorImage}: Door) => (
            <View key={id}>
              <CustomOptionButton
                id={id}
                image={contentState[doorImage]}
                isActive={selectedDoorId === id}
                onPress={handleClickDoorButton}
              />
            </View>
          ))}
        </View>

        <Text style={styles.categoryText}>Decorations</Text>
        <View style={styles.categoryWrapper}>
          {group1Decorations.map(({id, image}: Decoration) => (
            <View key={id}>
              <CustomOptionButton
                image={contentState[image]}
                isActive={selectedGroupOneDecorations.findIndex((deco: string) => deco === id) > -1}
                id={id}
                onPress={handleClickDecorationButton}
              />
            </View>
          ))}
        </View>

        <View style={styles.saveButtonContainer}>
          <TouchableOpacity onPress={saveDoor} style={styles.saveButton}>
            <Text style={styles.saveButtonText}>Save Door</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const CustomizeDoor = () => (
  <CustomizeDoorShared
    renderComponent={CustomizeDoorRenderComponent}
    useDispatch={useDispatch}
    useSelector={useSelector}
    useEffect={useEffect}
  />
);

export default CustomizeDoor;
