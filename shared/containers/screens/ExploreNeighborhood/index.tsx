import {RenderedComponent} from 'shared/models/RenderedComponent';
import {getNearbyDoors} from 'shared/store/doors/actions';
import {setLocation, UserLocation} from 'shared/store/doors/reducer';

export interface ExploreNeighborhoodRenderProps {
  getNearbyDoorsFromPlayFab?: (loc: UserLocation) => void;
  localNativeDoors?: any;
  useSelector?: any;
  onSetLocation: (location: UserLocation) => void;
  onFeatureClick: (e: any) => void;
}

export interface ExploreNeighborhoodProps
  extends RenderedComponent<ExploreNeighborhoodRenderProps> {
  useDispatch?: any;
  useSelector?: any;
}

export default function ExploreNeighborhood({
  renderComponent,
  useDispatch,
  useSelector,
}: ExploreNeighborhoodProps &
  RenderedComponent<ExploreNeighborhoodProps & ExploreNeighborhoodRenderProps>) {
  const dispatch = useDispatch();

  const getNearbyDoorsFromPlayFab = (loc: UserLocation): void => {
    if (loc && loc.latitude !== 0 && loc.longitude !== 0) {
      getNearbyDoors(loc, dispatch);
    }
  };

  const onFeatureClick = (e: any): void => {
    console.log('feature clicked @ container: ', e);
  };

  const handleOnSetLocation = (location: UserLocation): void => {
    if (setLocation) dispatch(setLocation({location}));
  };

  const renderProps: ExploreNeighborhoodRenderProps = {
    getNearbyDoorsFromPlayFab,
    onSetLocation: handleOnSetLocation,
    onFeatureClick,
    useSelector,
  };
  return renderComponent(renderProps);
}
