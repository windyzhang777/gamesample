export interface Avatar {
  // PlayFab key
  id: string;
  // PlayFab's Display Name
  displayName: string;
  monsterImage: string;
  monsterDetailsImage: string;
  monsterImageMaskWeb: string;
  monsterImageMaskNative: string;
  // some monster might have no clothes so each monster has quantity of available clothes
  availableClothes: number;
  clothesOneImage: string;
  clothesOneMaskWeb: string;
  clothesOneMaskNative: string;
  clothesTwoImage: string;
  clothesTwoMaskWeb: string;
  clothesTwoMaskNative: string;
}

// interface for nose, head, mouth or any static assets
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
  Head = 'head',
  Mouth = 'mouth',
  Nose = 'nose',
  SkinColor = 'skinColor',
  ClothesOneColor = 'clothesOneColor',
  ClothesTwoColor = 'clothesTwoColor',
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
