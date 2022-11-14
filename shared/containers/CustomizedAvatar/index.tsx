import {AvatarCustomizations} from 'shared/store/avatar/reducer';
import {RenderedComponent} from '../../models/RenderedComponent';
import {
  currentAvatarCustomizationsSelector,
  getAvatarCatalogItemDataSelector,
} from '../../store/avatar/selectors';
import {contentSelector} from '../../store/content/selectors';

export interface SelectedCustomizedAvatarRenderProps {
  eyeImage: string;
  headImage: string;
  noseImage: string;
  mouthImage: string;
  avatar: string;
  monsterImage: string;
  monsterDetailsImage: string;
  monsterMaskWeb: string;
  monsterMaskNative: string;
  monsterClothesOneImage: string;
  monsterClothesTwoImage: string;
  monsterClothesOneMaskWeb: string;
  monsterClothesOneMaskNative: string;
  monsterClothesTwoMaskWeb: string;
  monsterClothesTwoMaskNative: string;
  skinColor: string;
  clothesOneColor: string;
  clothesTwoColor: string;
}

export interface CustomizedAvatarProps {
  // renderComponent: React.FC<any>;
  useSelector?: any;
}

export interface CustomizedAvatarRenderProps {
  currentAvatarCustomizations: AvatarCustomizations;
}

export default function CustomizedAvatar({
  useSelector,
  renderComponent,
}: CustomizedAvatarProps & RenderedComponent<CustomizedAvatarProps & CustomizedAvatarRenderProps>) {
  const currentAvatarCustomizations = useSelector(currentAvatarCustomizationsSelector);
  // console.log('Avatar Customizations', currentAvatarCustomizations);

  const {skinColor, clothesOneColor, clothesTwoColor} = currentAvatarCustomizations;

  const contentState = useSelector(contentSelector);
  const avatar = currentAvatarCustomizations.avatar;

  const monsterImage =
    contentState[
      'avatar/' +
        currentAvatarCustomizations.avatar +
        '/' +
        currentAvatarCustomizations.avatar +
        '.png'
    ];
  const monsterDetailsImage =
    contentState[
      'avatar/' +
        currentAvatarCustomizations.avatar +
        '/' +
        currentAvatarCustomizations.avatar +
        '_details.png'
    ];
  const monsterMaskWeb =
    contentState[
      'avatar/' +
        currentAvatarCustomizations.avatar +
        '/' +
        currentAvatarCustomizations.avatar +
        '_mask.svg'
    ];
  const monsterMaskNative =
    contentState[
      'avatar/' +
        currentAvatarCustomizations.avatar +
        '/' +
        currentAvatarCustomizations.avatar +
        '_mask.png'
    ];
  const monsterClothesOneImage =
    contentState[
      'avatar/' +
        currentAvatarCustomizations.avatar +
        '/' +
        currentAvatarCustomizations.avatar +
        '-clothes-one.png'
    ];
  const monsterClothesTwoImage =
    contentState[
      'avatar/' +
        currentAvatarCustomizations.avatar +
        '/' +
        currentAvatarCustomizations.avatar +
        '-clothes-two.png'
    ];
  const monsterClothesOneMaskWeb =
    contentState[
      'avatar/' +
        currentAvatarCustomizations.avatar +
        '/' +
        currentAvatarCustomizations.avatar +
        '-clothes-one_mask.svg'
    ];
  const monsterClothesOneMaskNative =
    contentState[
      'avatar/' +
        currentAvatarCustomizations.avatar +
        '/' +
        currentAvatarCustomizations.avatar +
        '-clothes-one_mask.png'
    ];
  const monsterClothesTwoMaskWeb =
    contentState[
      'avatar/' +
        currentAvatarCustomizations.avatar +
        '/' +
        currentAvatarCustomizations.avatar +
        '-clothes-two_mask.svg'
    ];
  const monsterClothesTwoMaskNative =
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

  const renderProps: CustomizedAvatarProps &
    CustomizedAvatarRenderProps &
    SelectedCustomizedAvatarRenderProps = {
    useSelector,
    currentAvatarCustomizations,
    eyeImage,
    headImage,
    noseImage,
    mouthImage,
    avatar,
    monsterImage,
    monsterDetailsImage,
    monsterMaskWeb,
    monsterMaskNative,
    monsterClothesOneImage,
    monsterClothesTwoImage,
    monsterClothesOneMaskWeb,
    monsterClothesOneMaskNative,
    monsterClothesTwoMaskWeb,
    monsterClothesTwoMaskNative,
    skinColor,
    clothesOneColor,
    clothesTwoColor,
  };
  return renderComponent(renderProps);
}
