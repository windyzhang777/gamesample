import {RenderedComponent} from 'shared/models/RenderedComponent';

export interface StorybookScreenProps {}

export default function StorybookScreen({
  renderComponent,
}: StorybookScreenProps & RenderedComponent<StorybookScreenProps>) {
  const renderProps: StorybookScreenProps = {};
  return renderComponent(renderProps);
}
