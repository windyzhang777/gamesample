import {RenderedComponent} from '../../models/RenderedComponent';
import {addToTerAction} from 'shared/store/trick-or-treat/actions';
/**
 * These are the properties of the AddToter
 * These are passed to the dummy rendering component
 */
export interface AddToterProps {
  useDispatch: any;
  useState: any;
}

export interface AddToterRenderProps {
  username: string;
  changeToterNameCallback: (name: string) => void;
  addToterCallback: (name: string) => void;
}

/**
 *
 * @param {AddToter} props properties for shared
 */
export default function AddToter({
  useDispatch,
  useState,
  renderComponent,
}: AddToterProps & RenderedComponent<AddToterProps & AddToterRenderProps>) {
  /**
   * This is where we would implement our react logic
   * Such as using hooks
   */
  const [username, setUsername] = useState<string>('');
  const dispatch = useDispatch();

  const changeToterNameCallback = (name: string) => {
    setUsername(name);
  };

  const addToterCallback = (name: string) => {
    addToTerAction({name}, dispatch);
  };

  /**
   * This contains all the render properties
   * for what data we pass to be rendered
   */
  const renderProps: AddToterProps & AddToterRenderProps = {
    useDispatch,
    useState,
    username,
    changeToterNameCallback,
    addToterCallback,
  };
  return renderComponent(renderProps);
}
