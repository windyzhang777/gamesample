export interface NavigationRoute {
  key: string;
  linkTo: string;
  // eslint-disable-next-line no-undef
  linkComponent: () => JSX.Element;
}

export interface NavigationItemType extends NavigationRoute {
  menuText: string;
  removeBottomUnderline?: boolean;
  // eslint-disable-next-line no-undef
  icon?: JSX.Element;
}

export interface NavigationSectionType {
  sectionText: string;
  sectionKey: string;
  removeBottomUnderline?: boolean;
  navigationItems: NavigationItemType[];
}

export interface NavigationMenuType {
  sections: NavigationSectionType[];
  extraRoutes?: NavigationRoute[];
}
