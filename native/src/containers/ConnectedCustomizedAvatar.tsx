import React from 'react';
import {useSelector} from 'react-redux';
import {contentSelector} from 'src/store/content/selectors';
import CustomizedAvatar from 'src/components/CustomizedAvatar';
import {CustomizedAvatarProps} from 'src/components/CustomizedAvatar/props';
import {currentAvatarCustomizationsSelector} from 'src/store/avatar/selectors';

export default function ConnectedCustomizedAvatar() {
  const currentAvatarCustomizations = useSelector(currentAvatarCustomizationsSelector);

  const {skinColor, clothesOneColor, clothesTwoColor} = currentAvatarCustomizations;

  const contentState = useSelector(contentSelector);
  const avatar = currentAvatarCustomizations.avatar;

  const avatarImage =
    contentState[
      'avatar/' +
        currentAvatarCustomizations.avatar +
        '/' +
        currentAvatarCustomizations.avatar +
        '.png'
    ];
  const avatarDetailsImage =
    contentState[
      'avatar/' +
        currentAvatarCustomizations.avatar +
        '/' +
        currentAvatarCustomizations.avatar +
        '_details.png'
    ];
  const avatarMaskWeb =
    contentState[
      'avatar/' +
        currentAvatarCustomizations.avatar +
        '/' +
        currentAvatarCustomizations.avatar +
        '_mask.svg'
    ];
  const avatarMaskNative =
    contentState[
      'avatar/' +
        currentAvatarCustomizations.avatar +
        '/' +
        currentAvatarCustomizations.avatar +
        '_mask.png'
    ];
  const avatarClothesOneImage =
    contentState[
      'avatar/' +
        currentAvatarCustomizations.avatar +
        '/' +
        currentAvatarCustomizations.avatar +
        '-clothes-one.png'
    ];
  const avatarClothesTwoImage =
    contentState[
      'avatar/' +
        currentAvatarCustomizations.avatar +
        '/' +
        currentAvatarCustomizations.avatar +
        '-clothes-two.png'
    ];
  const avatarClothesOneMaskWeb =
    contentState[
      'avatar/' +
        currentAvatarCustomizations.avatar +
        '/' +
        currentAvatarCustomizations.avatar +
        '-clothes-one_mask.svg'
    ];
  const avatarClothesOneMaskNative =
    contentState[
      'avatar/' +
        currentAvatarCustomizations.avatar +
        '/' +
        currentAvatarCustomizations.avatar +
        '-clothes-one_mask.png'
    ];
  const avatarClothesTwoMaskWeb =
    contentState[
      'avatar/' +
        currentAvatarCustomizations.avatar +
        '/' +
        currentAvatarCustomizations.avatar +
        '-clothes-two_mask.svg'
    ];
  const avatarClothesTwoMaskNative =
    contentState[
      'avatar/' +
        currentAvatarCustomizations.avatar +
        '/' +
        currentAvatarCustomizations.avatar +
        '-clothes-two_mask.png'
    ];

  const eyeImage =
    contentState[
      'eyes' +
        '/' +
        currentAvatarCustomizations.eyes +
        '/' +
        currentAvatarCustomizations.eyes +
        '.png'
    ];
  const headImage =
    contentState[
      'head' +
        '/' +
        currentAvatarCustomizations.head +
        '/' +
        currentAvatarCustomizations.head +
        '.png'
    ];
  const noseImage =
    contentState[
      'nose' +
        '/' +
        currentAvatarCustomizations.nose +
        '/' +
        currentAvatarCustomizations.nose +
        '.png'
    ];
  const mouthImage =
    contentState[
      'mouth' +
        '/' +
        currentAvatarCustomizations.mouth +
        '/' +
        currentAvatarCustomizations.mouth +
        '.png'
    ];

  const costumeFrontImage =
    contentState[
      'costume/' +
        currentAvatarCustomizations.costume +
        '/' +
        currentAvatarCustomizations.costume +
        '_front.png'
    ];

  const costumeBackImage =
    contentState[
      'costume/' +
        currentAvatarCustomizations.costume +
        '/' +
        currentAvatarCustomizations.costume +
        '_back.png'
    ];

  const props: CustomizedAvatarProps = {
    currentAvatarCustomizations,
    eyeImage,
    headImage,
    noseImage,
    mouthImage,
    costumeFrontImage,
    costumeBackImage,
    avatar,
    avatarImage,
    avatarDetailsImage,
    avatarMaskWeb,
    avatarMaskNative,
    avatarClothesOneImage,
    avatarClothesTwoImage,
    avatarClothesOneMaskWeb,
    avatarClothesOneMaskNative,
    avatarClothesTwoMaskWeb,
    avatarClothesTwoMaskNative,
    skinColor,
    clothesOneColor,
    clothesTwoColor,
  };

  return <CustomizedAvatar {...props} />;
}
