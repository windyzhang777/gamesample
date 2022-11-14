import {DoorCustomizations, DoorState} from './reducer';
import {createSelector} from 'reselect';

import {get} from 'src/utils/object';
import {Door, CatalogResponse} from 'src/models/Door';
import {CustomizationFlowSection} from 'src/models/CustomizationFlowSection';
import {RootStoreState} from 'src/models/RootStoreState';
import {DecorationOverlayProps} from 'src/models/DecorationOverlayProps';
import {Decoration} from 'src/models/Decoration';
import {ContentState} from 'src/store/content/reducer';
import {contentSelector} from 'src/store/content/selectors';

// Keys - used to search up the path in the reducer slice like door.something
const doorKey = 'door';
const currentDoorCustomizationsKey = 'currentDoorCustomizations';

// Selectors
/**
 * Returns the whole door state
 * @param state
 */
export const doorSelector = (state: any): DoorState => get(state, `${doorKey}`, {});

export const currentDoorCustomizationsSelector = (state): DoorCustomizations =>
  get(state, `${doorKey}.${currentDoorCustomizationsKey}`, {});

export const doorsCustomizationFlowSelector = (state): CustomizationFlowSection[] =>
  state.door.doorCustomizationFlowConfig;

export const doorIsSavingSelector = (state: RootStoreState): boolean => state.door.isSaving;
export const doorIsSavedSelector = (state: RootStoreState): boolean => state.door.isSaved;

export const getDoorCatalogItemDataSelector = (
  customizationFlowKey: string,
  itemId: string,
  defaults: {[key: string]: string},
) => {
  return (state: RootStoreState) => {
    try {
      return JSON.parse(
        state.door.doorCustomizationFlowConfig
          .find(
            (section: CustomizationFlowSection) =>
              section.customizationFlowKey === customizationFlowKey,
          )
          ?.items?.find((item: CatalogResponse) => item.ItemId === itemId)?.CustomData,
      );
    } catch (e) {
      //TODO: Determine if we should return a default value on catch
      console.log(e);
      return defaults;
    }
  };
};
