import {RenderedComponent} from 'shared/models/RenderedComponent';

export interface EmptyScreenProps {
  emptyScreenName: string;
}

export default function EmptyScreen({
  emptyScreenName,
  renderComponent,
}: EmptyScreenProps & RenderedComponent<EmptyScreenProps>) {
  const renderProps: EmptyScreenProps = {
    emptyScreenName,
  };
  return renderComponent(renderProps);
}
