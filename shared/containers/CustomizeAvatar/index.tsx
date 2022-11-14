import * as React from 'react';
import * as avatarActions from 'shared/store/avatar/actions';
import {contentSelector} from 'shared/store/content/selectors';
import {avatarSelector} from '../../store/avatar/selectors';
import {Item, Monster} from '../../models/Monster';
import {AvatarState} from '../../store/avatar/reducer';
import {ContentState} from '../../store/content/reducer';

export interface CustomizeAvatarProps {
  renderComponent: React.FC<any>;
  useEffect?: any;
  useDispatch?: any;
  useSelector?: any;
}

export interface CustomizeAvatarRenderComponentProps {
  avatarState: AvatarState;
  contentState: ContentState;
  handleClickMonsterButton: (monster: Monster) => void;
  handleClickMouthButton: (mouth: Item) => void;
  handleClickNoseButton: (nose: Item) => void;
  handleClickEyeButton: (eye: Item) => void;
  handleClickHeadButton: (head: Item) => void;
  handleClickSkinColorButton: (color: string) => void;
  handleClickClothesOneColorButton: (color: string) => void;
  handleClickClothesTwoColorButton: (color: string) => void;
}

// This is really just a function (and not using React or React Native) that can be used in both web/native components
// This will be the data / state of a component that can be shared between any platform.
const CustomizeAvatar = ({
  renderComponent,
  useDispatch,
  useSelector,
  useEffect,
}: CustomizeAvatarProps) => {
  // Get door data from redux
  const dispatch = useDispatch();

  const loadAssets = () => {
    avatarActions.getAvatarAssets({}, dispatch);
  };

  const handleClickMonsterButton = (selectedMonster: Monster) =>
    avatarActions.updateSelectedMonsterId({selectedMonsterId: selectedMonster.id}, dispatch);
  const handleClickMouthButton = (selectedMouth: Item) =>
    avatarActions.updateSelectedMouthId({selectedMouthId: selectedMouth.id}, dispatch);
  const handleClickNoseButton = (selectedNose: Item) =>
    avatarActions.updateSelectedNoseId({selectedNoseId: selectedNose.id}, dispatch);
  const handleClickEyeButton = (selectedEye: Item) =>
    avatarActions.updateSelectedEyeId({selectedEyeId: selectedEye.id}, dispatch);
  const handleClickHeadButton = (selectedHead: Item) =>
    avatarActions.updateSelectedHeadId({selectedHeadId: selectedHead.id}, dispatch);
  const handleClickSkinColorButton = (selectedSkinColor: string) =>
    avatarActions.updateSelectedSkinColor({selectedSkinColor}, dispatch);
  const handleClickClothesOneColorButton = (selectedClothesOneColor: string) =>
    avatarActions.updateSelectedClothesOneColor({selectedClothesOneColor}, dispatch);
  const handleClickClothesTwoColorButton = (selectedClothesTwoColor: string) =>
    avatarActions.updateSelectedClothesTwoColor({selectedClothesTwoColor}, dispatch);

  const avatarState = useSelector(avatarSelector);
  const contentState = useSelector(contentSelector);

  useEffect(() => {
    loadAssets();
  }, []);

  const renderProps: CustomizeAvatarRenderComponentProps = {
    avatarState,
    contentState,
    handleClickMonsterButton,
    handleClickMouthButton,
    handleClickNoseButton,
    handleClickEyeButton,
    handleClickHeadButton,
    handleClickSkinColorButton,
    handleClickClothesOneColorButton,
    handleClickClothesTwoColorButton,
  };
  return renderComponent(renderProps);
};

export default CustomizeAvatar;
