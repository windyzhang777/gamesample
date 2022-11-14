import {RenderedComponent} from 'shared/models/RenderedComponent';
import {ToterState} from '../../../store/trick-or-treat/types';

export interface ManageTrickOrTreatersProps {
  useSelector: any;
}

export interface ManageTrickOrTreatersRenderProps {
  toterList: ToterState;
}

export default function ManageTrickOrTreaters({
  useSelector,
  renderComponent,
}: ManageTrickOrTreatersProps &
  RenderedComponent<ManageTrickOrTreatersProps & ManageTrickOrTreatersRenderProps>) {
  const renderProps: ManageTrickOrTreatersProps & ManageTrickOrTreatersRenderProps = {
    toterList: useSelector((state: any) => state.toterList),
    useSelector,
  };
  return renderComponent(renderProps);
}
