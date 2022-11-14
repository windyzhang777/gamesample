import {RenderedComponent} from 'shared/models/RenderedComponent';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CustomizeAvatarProps {}

export default function CustomizeAvatar({
  renderComponent,
}: {} & RenderedComponent<CustomizeAvatarProps>) {
  const renderProps: CustomizeAvatarProps = {};
  return renderComponent(renderProps);
}
