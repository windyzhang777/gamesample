import React, {useEffect} from 'react';
import CustomizeAvatarShared from 'shared/containers/CustomizeAvatar';
import {useDispatch, useSelector} from 'react-redux';
import CustomOptionButton from '../CustomOptionButton';
import classes from '../CustomizeAvatar/CustomizeAvatar.module.css';
import ColorButton from '../ColorButton';
import SelectedCustomizedAvatar from '../SelectedCustomizedAvatar';
import {Item} from 'shared/models/Monster';

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

  if (!monsters) {
    return <p>No selected monster</p>;
  }
  return (
    <>
      <div className={classes.AvatarWrapper}>
        <SelectedCustomizedAvatar />
      </div>
      <p>Monster</p>
      {monsters.map((elm: any) => (
        <CustomOptionButton
          id={elm.id}
          image={contentState[elm.monsterDetailsImage]}
          alt={elm.displayName}
          isActive={true}
          onClick={handleClickMonsterButton}
        />
      ))}
      <p>Skin Color</p>
      <div>
        {availableColors.map((color: string) => (
          <ColorButton color={color} isActive={true} onClick={handleClickSkinColorButton} />
        ))}
      </div>
      <p>Clothes One Color</p>
      <div>
        {availableColors.map((color: string) => (
          <ColorButton color={color} isActive={true} onClick={handleClickClothesOneColorButton} />
        ))}
      </div>
      <p>Clothes Two Color</p>
      <div>
        {availableColors.map((color: string) => (
          <ColorButton color={color} isActive={true} onClick={handleClickClothesTwoColorButton} />
        ))}
      </div>
      <p>Heads</p>
      {heads.map((elm: Item) => (
        <CustomOptionButton
          id={elm.id}
          image={contentState[elm.image]}
          alt={elm.displayName}
          isActive={true}
          onClick={handleClickHeadButton}
        />
      ))}
      <p>Eyes</p>
      {eyes.map((elm: Item) => (
        <CustomOptionButton
          id={elm.id}
          image={contentState[elm.image]}
          alt={elm.displayName}
          isActive={true}
          onClick={handleClickEyeButton}
        />
      ))}
      <p>Nose</p>
      {noses.map((elm: Item) => (
        <CustomOptionButton
          id={elm.id}
          image={contentState[elm.image]}
          alt={elm.displayName}
          isActive={true}
          onClick={handleClickNoseButton}
        />
      ))}
      <p>Mouth</p>
      {mouths.map((elm: Item) => (
        <CustomOptionButton
          id={elm.id}
          image={contentState[elm.image]}
          alt={elm.displayName}
          isActive={true}
          onClick={handleClickMouthButton}
        />
      ))}
    </>
  );
};

const CustomizeAvatar = () => (
  <CustomizeAvatarShared
    renderComponent={CustomizeAvatarRenderComponent}
    useEffect={useEffect}
    useDispatch={useDispatch}
    useSelector={useSelector}
  />
);

export default CustomizeAvatar;
