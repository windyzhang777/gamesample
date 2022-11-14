// import {createSelector} from 'reselect';
import {get} from 'src/utils/object';
import {AvatarCustomizations, AvatarState} from './reducer';
import {CustomizationFlowSection} from 'src/models/CustomizationFlowSection';
import {RootStoreState} from 'src/models/RootStoreState';
import {CatalogResponse} from 'src/models/Avatar';

const avatarKey = 'avatar';

export const avatarSelector = (state: RootStoreState): AvatarState =>
  get(state, `${avatarKey}`, {});

export const currentAvatarCustomizationsSelector = (state: RootStoreState): AvatarCustomizations =>
  get(state, `${avatarKey}.currentAvatarCustomizations`, {});

export const avatarsCustomizationFlowSelector = (
  state: RootStoreState,
): CustomizationFlowSection[] => get(state, `${avatarKey}.avatarCustomizationFlowConfig`, []);

export const avatarIsSavingSelector = (state: RootStoreState): boolean =>
  get(state, `${avatarKey}.isSaving`, false);

export const avatarIsSavedSelector = (state: RootStoreState): boolean =>
  get(state, `${avatarKey}.isSaved`, false);

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
