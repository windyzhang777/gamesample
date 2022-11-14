import {createSelector} from 'reselect';
import {AvatarCustomizations, AvatarState} from './reducer';
import {get} from '../../utils/object';
import {Avatar, Item, CatalogResponse} from '../../models/Avatar';
import {CustomizationFlowSection} from '../../containers/CustomizationFlow';

const avatarKey = 'avatar';
const currentAvatarCustomizationsKey = 'currentAvatarCustomizations';

export const avatarSelector: AvatarState = (state: any) => get(state, `${avatarKey}`, {});

export const currentAvatarCustomizationsSelector: AvatarCustomizations = (state: any) =>
  get(state, `${avatarKey}.${currentAvatarCustomizationsKey}`, {});

export const avatarsCustomizationFlowSelector: CustomizationFlowSection[] = (state: any) =>
  state.avatar.avatarCustomizationFlowConfig;

export const getAvatarCatalogItemDataSelector = (
  customizationFlowKey: string,
  itemId: string,
  defaults: {[key: string]: string},
) => {
  return (state: any) => {
    try {
      return JSON.parse(
        state.avatar.avatarCustomizationFlowConfig
          .find(
            (section: CustomizationFlowSection) =>
              section.customizationFlowKey === customizationFlowKey,
          )
          ?.items?.find((item: CatalogResponse) => item.ItemId === itemId)?.CustomData,
      );
    } catch (e) {
      //TODO: Determine if we should return a default value on catch
      console.log('selector error: ' + e);
      return defaults;
    }
  };
};

export const selectedMonsterSelector: Avatar = createSelector(
  [avatarSelector, currentAvatarCustomizationsSelector],
  (avatarState: AvatarState, currentAvatarCustomizations: AvatarCustomizations) => {
    const {selectedMonsterId} = currentAvatarCustomizations;
    const {monsters} = avatarState;
    return monsters.find((monster: Avatar) => monster.id === selectedMonsterId);
  },
);

export const selectedEyeSelector: Item = createSelector(
  [avatarSelector, currentAvatarCustomizationsSelector],
  (avatarState: AvatarState, currentAvatarCustomizations: AvatarCustomizations) => {
    const {selectedEyeId} = currentAvatarCustomizations;
    const {eyes} = avatarState;
    return eyes.find((eye: Item) => eye.id === selectedEyeId);
  },
);

export const selectedHeadSelector: Item = createSelector(
  [avatarSelector, currentAvatarCustomizationsSelector],
  (avatarState: AvatarState, currentAvatarCustomizations: AvatarCustomizations) => {
    const {selectedHeadId} = currentAvatarCustomizations;
    const {heads} = avatarState;
    return heads.find((head: Item) => head.id === selectedHeadId);
  },
);

export const selectedNoseSelector: Item = createSelector(
  [avatarSelector, currentAvatarCustomizationsSelector],
  (avatarState: AvatarState, currentAvatarCustomizations: AvatarCustomizations) => {
    const {selectedNoseId} = currentAvatarCustomizations;
    const {noses} = avatarState;
    return noses.find((nose: Item) => nose.id === selectedNoseId);
  },
);

export const selectedMouthSelector: Item = createSelector(
  [avatarSelector, currentAvatarCustomizationsSelector],
  (avatarState: AvatarState, currentAvatarCustomizations: AvatarCustomizations) => {
    const {selectedMouthId} = currentAvatarCustomizations;
    const {mouths} = avatarState;
    return mouths.find((mouth: Item) => mouth.id === selectedMouthId);
  },
);
