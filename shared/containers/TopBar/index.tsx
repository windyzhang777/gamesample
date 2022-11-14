import {RenderedComponent} from '../../models/RenderedComponent';

export interface TopBarProps {
  drawerOpenCallback?: () => void;
  toggleDrawerCallback: () => void;
  topBarTitle: string;
  shareButtonCallback?: () => void;
}

export interface TopBarRenderProps {
  // toggleDrawerCallback: () => void;
  linkTo?: string;
  // eslint-disable-next-line no-undef
  linkComponent?: () => JSX.Element;
}

export default function NavigationSection({
  drawerOpenCallback,
  toggleDrawerCallback,
  topBarTitle,
  shareButtonCallback,
  linkTo,
  linkComponent,
  renderComponent,
}: TopBarProps & RenderedComponent<TopBarProps & TopBarRenderProps>) {
  const renderProps: TopBarProps = {
    drawerOpenCallback: drawerOpenCallback,
    toggleDrawerCallback: toggleDrawerCallback,
    topBarTitle: topBarTitle,
    shareButtonCallback: shareButtonCallback,
    linkTo: linkTo,
    linkComponent: linkComponent,
  };
  return renderComponent(renderProps);
}
