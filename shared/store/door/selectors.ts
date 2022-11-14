import {DoorCustomizations, DoorState} from './reducer';
import {get} from 'shared/utils/object';
import {createSelector} from 'reselect';
import {DecorationOverlayProps} from 'web/src/components/CustomizedDoor/DecorationOverlay';
import {Decoration} from '../../models/Decoration';
import {contentSelector} from '../content/selectors';
import {Door, CatalogResponse} from '../../models/Door';
import {ContentState} from '../content/reducer';
import {CustomizationFlowSection} from '../../containers/CustomizationFlow';
import {RootState} from 'src/store';

// Keys - used to search up the path in the reducer slice like door.something
const doorKey = 'door';
const currentDoorCustomizationsKey = 'currentDoorCustomizations';

// Selectors
/**
 * Returns the whole door state
 * @param state
 */
export const doorSelector: DoorState = (state: any) => get(state, `${doorKey}`, {});

export const currentDoorCustomizationsSelector: DoorCustomizations = (state) =>
  get(state, `${doorKey}.${currentDoorCustomizationsKey}`, {});

export const doorsCustomizationFlowSelector: CustomizationFlowSection[] = (state) =>
  state.door.doorCustomizationFlowConfig;

export const getDoorCatalogItemDataSelector = (
  customizationFlowKey: string,
  itemId: string,
  defaults: {[key: string]: string},
) => {
  return (state: RootState) => {
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

/**
 * Gets the Door model for the currently selected door
 */
export const selectedDoorSelector: Door = createSelector(
  [doorSelector, currentDoorCustomizationsSelector],
  (doorState: DoorState, currentDoorCustomizations: DoorCustomizations) => {
    const {selectedDoorId} = currentDoorCustomizations;
    return doorState.doors.find((door: Door) => door.id === selectedDoorId);
  },
);

/**
 * Returns an array of props that can be used to fill out the decorations
 */
export const selectedDecorationOverlaysSelector: DecorationOverlayProps[] = createSelector(
  [contentSelector, doorSelector, selectedDoorSelector],
  (contentState: ContentState, doorState: DoorState, selectedDoor) => {
    const {group1Decorations, currentDoorCustomizations} = doorState;
    const {selectedGroupOneDecorations} = currentDoorCustomizations;

    const selectedDecorationsProps: DecorationOverlayProps[] = [];

    // Finding all of our group 1 decorations by ID, then creating an array of props we'd pass to DecorationOverlay
    selectedGroupOneDecorations.forEach((decorationId: string) => {
      const foundDecoration = group1Decorations.find(
        (deco: Decoration) => deco.id === decorationId,
      );
      if (foundDecoration && selectedDoor) {
        selectedDecorationsProps.push({
          image: contentState[foundDecoration.image],
          maskImage: contentState[selectedDoor.doorImageOverlay],
        });
      }
    });

    return selectedDecorationsProps;
  },
);
