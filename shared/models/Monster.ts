export interface Monster {
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
  Monster = 'monster',
  Eyes = 'eyes',
  Head = 'head',
  Mouth = 'mouth',
  Nose = 'nose',
}
