import {AvatarCustomizations} from 'src/store/avatar/reducer';

export interface CustomizedAvatarProps {
  currentAvatarCustomizations: AvatarCustomizations;
  eyeImage: string;
  headImage: string;
  noseImage: string;
  mouthImage: string;
  costumeFrontImage: string;
  costumeBackImage: string;
  avatar: string;
  avatarImage: string;
  avatarDetailsImage: string;
  avatarMaskWeb: string;
  avatarMaskNative: string;
  avatarClothesOneImage: string;
  avatarClothesTwoImage: string;
  avatarClothesOneMaskWeb: string;
  avatarClothesOneMaskNative: string;
  avatarClothesTwoMaskWeb: string;
  avatarClothesTwoMaskNative: string;
  skinColor: string;
  clothesOneColor: string;
  clothesTwoColor: string;
}
