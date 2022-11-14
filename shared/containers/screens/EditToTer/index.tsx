import {RenderedComponent} from 'shared/models/RenderedComponent';
import {ToTerType} from '../../../store/trick-or-treat/types';

export interface EditToTerProps {
  useSelector: any;
  history?: any;
  match: any;
}

export interface EditToTerRenderProps {
  toter: ToTerType;
  goBackCallback: () => void;
}

export default function EditToTer({
  useSelector,
  match,
  history,
  renderComponent,
}: EditToTerProps & RenderedComponent<EditToTerRenderProps>) {
  //might want to key these and just do a hash lookup. O(N)
  const toter = useSelector((state: any) =>
    state.toterList.toterItems.find((toter: ToTerType) => toter.toterId === match.params.toterId),
  );
  const goBackCallback = () => {
    if (history !== undefined) {
      history.goBack();
    } else {
      console.warn('History is not present on the editrorer, can not resolve go back path');
    }
  };
  const renderProps: EditToTerRenderProps = {
    goBackCallback,
    toter: toter,
  };
  return renderComponent(renderProps);
}
