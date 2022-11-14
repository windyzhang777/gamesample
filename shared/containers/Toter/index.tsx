import {RenderedComponent} from '../../models/RenderedComponent';
import {chooseTreatAction, chooseTrickAction} from 'shared/store/trick-or-treat/actions';

/**
 * These are the properties of the Toter
 * These are passed to the dummy rendering component
 */
export interface ToterProps {
  chooseTreat: (toterId: string) => void;
  chooseTrick: () => void;
  cachedImages: any;
  candies: any;
  name: string;
  id: string;
  useDispatch?: any;
}

/**
 *
 * @param {ToterProps} props properties for shared
 */
export default function Toter({
  cachedImages,
  candies,
  name,
  id,
  useDispatch,
  renderComponent,
}: ToterProps & RenderedComponent<ToterProps>) {
  /**
   * This is where we would implement our react logic
   * Such as using hooks
   */
  const dispatch = useDispatch();

  const chooseTreat = (totterId: string) => {
    chooseTreatAction({toter: totterId}, dispatch);
  };

  const chooseTrick = () => {
    chooseTrickAction({}, dispatch);
  };

  /**
   * This contains all the render properties
   * for what data we pass to be rendered
   */
  const renderProps: ToterProps = {
    chooseTreat: chooseTreat,
    chooseTrick: chooseTrick,
    cachedImages: cachedImages,
    candies: candies,
    name: name,
    id: id,
  };
  return renderComponent(renderProps);
}
