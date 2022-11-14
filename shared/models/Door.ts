export interface Door {
  // PlayFab key
  id: string;
  // PlayFab's Display Name
  displayName: string;
  // URL to main door image - grayscale image
  doorImage: string;
  // URL to door frame image
  doorFrameImage: string;
  // URL to main door details image - door knobs and things we don't color over the door
  doorDetailsImage: string;
  // URL to main door mask - masks the shape of the door for coloring and limited decoration rendering
  doorImageMaskWeb: string;
  // URL to main door mask - masks the shape of the door for coloring and limited decoration rendering
  doorImageMaskNative: string;
  // Default color when we choose this door.  i.e. '#FF0000'
  defaultColor: string;
}
export enum ItemClass {
  Door = 'door',
  Decoration = 'decoration',
  Color = 'color',
}

export enum Tags {
  Group1Decorations = 'group1Decorations',
  Group2Decorations = 'group2Decorations',
  Group3Decorations = 'group3Decorations',
}

export interface CatalogResponse {
  ItemId: string;
  ItemClass: any;
  DisplayName: string;
  VirtualCurrencyPrices?: any;
  RealCurrencyPrices?: any;
  CanBecomeCharacter: boolean;
  CatalogVersion: string;
  Consumable?: any;
  InitialLimitedEditionCount: number;
  IsLimitedEdition: boolean;
  IsStackable: boolean;
  IsTradable: boolean;
  Tags: any[];
  CustomData?: string;
}
