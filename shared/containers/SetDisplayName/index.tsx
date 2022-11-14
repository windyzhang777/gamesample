import {RenderedComponent} from 'shared/models/RenderedComponent';
import {updateDisplayName} from 'shared/store/authentication/actions';
import {RootState} from '../../../store';

/**
 * These are the properties of the SetUsernameShared
 * These are passed to the dummy rendering component
 */
export interface SetDisplayNameProps {
  displayName?: string;
  handleSubmit: (displayName: string) => void;
}

export interface SetDisplayNameSharedProps {
  useDispatch?: any;
  useSelector?: any;
}

/**
 * This is the SetUsername screen's logic
 * @param {SetDisplayNameProps} props properties for shared
 */
export default function SetDisplayNameShared({
  renderComponent,
  useDispatch,
  useSelector,
}: SetDisplayNameSharedProps & RenderedComponent<SetDisplayNameProps>) {
  /**
   * This is where we would implement our react logic
   * Such as using hooks
   */
  const dispatch = useDispatch();

  const displayNameState = useSelector((state: RootState) => state.user.displayName);

  const handleSubmit = (displayName: string) => {
    updateDisplayName({displayName}, dispatch);
  };
  /**
   * This contains all the render properties
   * for what data we pass to be rendered
   */
  const renderProps: SetDisplayNameProps = {
    displayName: displayNameState,
    handleSubmit: handleSubmit,
  };

  return renderComponent(renderProps);
}
