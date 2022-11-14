import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styles from './CustomizeAvatar.stylesheet';
import ColorButton from '../ColorButton';
import CustomOptionButton from '../CustomOptionButton';
import SelectedCustomizedAvatar from '../SelectedCustomizedAvatar';
import {Text, SafeAreaView, View, ScrollView} from 'react-native';
import CustomizeAvatarShared from 'shared/containers/CustomizeAvatar';
import {Item, Monster} from 'shared/models/Monster';

const CustomizeAvatarRenderComponent = ({
  avatarState,
  contentState,
  handleClickMonsterButton,
  handleClickMouthButton,
  handleClickNoseButton,
  handleClickEyeButton,
  handleClickHeadButton,
  handleClickSkinColorButton,
  handleClickClothesOneColorButton,
  handleClickClothesTwoColorButton,
}: any) => {
  const {heads, eyes, noses, mouths, monsters, availableColors} = avatarState;
  return (
    <SafeAreaView style={styles.flex}>
      <SelectedCustomizedAvatar />
      <ScrollView>
        <Text style={styles.categoryText}>Monsters</Text>
        <View style={styles.categoryWrapper}>
          {monsters.map((monster: Monster) => (
            <CustomOptionButton
              id={monster.id}
              image={contentState[monster.monsterDetailsImage]}
              isActive={true}
              onPress={handleClickMonsterButton}
            />
          ))}
        </View>
        <Text style={styles.categoryText}>Skin Color</Text>
        <View style={styles.colorsContainer}>
          {availableColors.map((color: string) => (
            <ColorButton color={color} isActive={true} onPress={handleClickSkinColorButton} />
          ))}
        </View>
        <Text style={styles.categoryText}>Clothes One Color</Text>
        <View style={styles.colorsContainer}>
          {availableColors.map((color: string) => (
            <ColorButton color={color} isActive={true} onPress={handleClickClothesOneColorButton} />
          ))}
        </View>
        <Text style={styles.categoryText}>Clothes Two Color</Text>
        <View style={styles.colorsContainer}>
          {availableColors.map((color: string) => (
            <ColorButton color={color} isActive={true} onPress={handleClickClothesTwoColorButton} />
          ))}
        </View>
        <Text style={styles.categoryText}>Heads</Text>
        <View style={styles.categoryWrapper}>
          {heads.map((head: Item) => (
            <CustomOptionButton
              id={head.id}
              image={contentState[head.image]}
              isActive={true}
              onPress={handleClickHeadButton}
            />
          ))}
        </View>
        <Text style={styles.categoryText}>Eyes</Text>
        <View style={styles.categoryWrapper}>
          {eyes.map((eye: Item) => (
            <CustomOptionButton
              id={eye.id}
              image={contentState[eye.image]}
              isActive={true}
              onPress={handleClickEyeButton}
            />
          ))}
        </View>
        <Text style={styles.categoryText}>Nose</Text>
        <View style={styles.categoryWrapper}>
          {noses.map((nose: Item) => (
            <CustomOptionButton
              id={nose.id}
              image={contentState[nose.image]}
              isActive={true}
              onPress={handleClickNoseButton}
            />
          ))}
        </View>
        <Text style={styles.categoryText}>Mouth</Text>
        <View style={styles.categoryWrapper}>
          {mouths.map((mouth: Item) => (
            <CustomOptionButton
              id={mouth.id}
              image={contentState[mouth.image]}
              isActive={true}
              onPress={handleClickMouthButton}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const CustomizeAvatar = () => (
  <CustomizeAvatarShared
    renderComponent={CustomizeAvatarRenderComponent}
    useSelector={useSelector}
    useDispatch={useDispatch}
    useEffect={useEffect}
  />
);

export default CustomizeAvatar;
