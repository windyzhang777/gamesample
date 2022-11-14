/* eslint-disable  @typescript-eslint/no-explicit-any */

export interface Avatar {
  // PlayFab key
  id: string;
  // PlayFab's Display Name
  displayName: string;
  avatarImage: string;
  avatarDetailsImage: string;
  avatarImageMaskWeb: string;
  avatarImageMaskNative: string;
  // some avatar might have no clothes so each avatar has quantity of available clothes
  availableClothes: number;
  clothesOneImage: string;
  clothesOneMaskWeb: string;
  clothesOneMaskNative: string;
  clothesTwoImage: string;
  clothesTwoMaskWeb: string;
  clothesTwoMaskNative: string;
}

// interface for eyes, nose, mouth or any static assets
export interface Item {
  // PlayFab key
  id: string;
  // PlayFab's Display Name
  displayName: string;
  // URL to item image
  image: string;
}

export enum AvatarItemClass {
  Avatar = 'avatar',
  Eyes = 'eyes',
  Mouth = 'mouth',
  Nose = 'nose',
  Head = 'head',
  SkinColor = 'skinColor',
  ClothesOneColor = 'clothesOneColor',
  ClothesTwoColor = 'clothesTwoColor',
  Costume = 'costume',
  Sound = 'sound',
}

export interface CatalogResponse {
  ItemId: string;
  ItemClass: AvatarItemClass;
  CatalogVersion: string;
  DisplayName: string;
  VirtualCurrencyPrices?: any;
  Tags?: any[];
  CustomData?: string;
  Consumable?: any;
  CanBecomeCharacter: boolean;
  IsStackable: boolean;
  IsTradable: boolean;
  IsLimitedEdition: boolean;
  InitialLimitedEditionCount: number;
}
