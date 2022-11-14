import {RenderedComponent} from 'shared/models/RenderedComponent';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TriviaGameProps {
  score: number;
}

export default function TriviaGameShared({
  renderComponent,
}: {} & RenderedComponent<TriviaGameProps>) {
  const renderProps: TriviaGameProps = {};
  return renderComponent(renderProps);
}
