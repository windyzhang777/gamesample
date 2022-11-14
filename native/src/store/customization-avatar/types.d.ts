export interface CustomizationItemType {
  // eslint-disable-next-line no-undef
  customizationValue?: string;
  style?: string;
  icon?: JSX.Element;
}

export interface CustomizationGridType {
  customizationItems: CustomizationItemType[];
}

export interface CustomizationPanelType {
  customizationList: CustomizationListType;
}
