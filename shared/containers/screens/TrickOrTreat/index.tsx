import {RenderedComponent} from 'shared/models/RenderedComponent';
import {ReactElement} from 'react';

import {chooseTreatAction, chooseTrickAction} from 'shared/store/trick-or-treat/actions';
import {RootStoreState} from '../../../store';
import {ToTerType} from '../../../store/trick-or-treat/types';

export interface TrickOrTreatProps {
  useSelector?: any;
  useDispatch?: any;
  onSelectTrickClick: () => void;
  onSelectTreatClick: () => void;
}

export default function TrickOrTreat({
  renderComponent,
  useDispatch,
  useSelector,
  onSelectTreatClick,
  onSelectTrickClick,
}: TrickOrTreatProps & RenderedComponent<TrickOrTreatProps>): ReactElement<TrickOrTreatProps> {
  const dispatch = useDispatch();

  const toters: ToTerType[] = useSelector((state: RootStoreState) => state.toterList.toterItems);

  const handleSelectTreatClick = (): void => {
    const toter = toters && toters.length !== 0 ? toters[0].toterId : undefined;
    if (!toter) return;

    chooseTreatAction({toter: toters[0].toterId}, dispatch);
    if (onSelectTreatClick) onSelectTreatClick();
  };

  const handleSelectTrickClick = (): void => {
    chooseTrickAction({}, dispatch);
    if (onSelectTrickClick) onSelectTrickClick();
  };

  const renderProps: TrickOrTreatProps = {
    onSelectTreatClick: handleSelectTreatClick,
    onSelectTrickClick: handleSelectTrickClick,
  };

  return renderComponent(renderProps);
}
