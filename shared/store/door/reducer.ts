import {createSlice} from '@reduxjs/toolkit';
import {login, logout} from '../authentication/actions';
import {updateDoor, saveDoor, getDoorsConfigurationFlowAndAssets} from './actions';
import {Door} from 'shared/models/Door';
import {Decoration} from 'shared/models/Decoration';
import {get} from 'shared/utils/object';
import {CustomizationFlowSection} from '../../containers/CustomizationFlow';

//These customizations are defined in playfab.
export interface DoorCustomizations {
  doors: string;
  color: string;
  decorations: string[];
}

export interface DoorState {
  // The user's last saved door customizations (random if new)
  lastSavedDoorCustomizations: DoorCustomizations;
  // The user's current unsaved customizations used for edit screens
  currentDoorCustomizations: DoorCustomizations;
  // A door that we're currently trick-or-treating at
  trickOrTreatDoorCustomizations: DoorCustomizations;
  // Making an API call to save
  isSaving: boolean;
  doorCustomizationFlowConfig: CustomizationFlowSection[];
}

export interface GetDoorsAssetsPayload {
  doors: Door[];
  group1Decorations: Decoration[];
  group2Decorations: Decoration[];
  group3Decorations: Decoration[];
  saveData: DoorCustomizations;
}

export interface GetDoorsAssetsAction {
  payload: GetDoorsAssetsPayload;
}

export interface UpdateDoorPayload {
  selectedColor: string;
  selectedDoorId: string;
  selectedGroup1Decoration: string[];
  selectedGroup2Decoration: string[];
  selectedGroup3Decoration: string[];
}

export interface UpdateDoorAction {
  payload: UpdateDoorPayload;
}

const initialDoorCustomizations: DoorCustomizations = {
  doors: 'door_gothic',
  color: 'green',
  decorations: ['deco_g1_spiderweb'],
};

const initialState: DoorState = {
  isSaving: false,
  currentDoorCustomizations: {
    ...initialDoorCustomizations,
  },
  lastSavedDoorCustomizations: {
    ...initialDoorCustomizations,
  },
  trickOrTreatDoorCustomizations: {
    ...initialDoorCustomizations,
  },
  doorCustomizationFlowConfig: [],
};

export const doorSlice = createSlice({
  name: 'door',
  initialState,
  reducers: {
    setCurrentDoorCustomizations: (state: DoorState, {payload}): DoorState => {
      return {
        ...state,
        currentDoorCustomizations: {...payload},
      };
    },
  },
  extraReducers: {
    [logout.SUCCESS]: (): DoorState => initialState,
    [login.SUCCESS]: (state, {payload}: any): void => {
      //TODO: at the end of the flow need to save and then also get the saved data from playfab
      // const {userData} = payload;
      // let savedData = {};
      // // if user data is available in store, format the data to work with our door slice
      // if (userData && Object.keys(userData).length >= 1) {
      //   savedData = Object.keys(userData).reduce((acc, elm) => {
      //     /* playfab sends list data in key value pair where key is formatted as elementName[0], elementName[1]
      //      *  for now this regex is used to replace brackets and digits
      //      * */
      //     const elmName = elm.replace(/[\d[\]]/g, '');
      //     if (
      //       elmName === 'selectedGroupOneDecorations' ||
      //       elmName === 'selectedGroupTwoDecorations' ||
      //       elmName === 'selectedGroupThreeDecorations'
      //     ) {
      //       return {
      //         ...acc,
      //         [elmName]: [...acc[elmName], userData[elm].Value],
      //       };
      //     }
      //     return {
      //       ...acc,
      //       [elmName]: userData[elm].Value,
      //     };
      //   }, initialDoorCustomizations);
      // }
      // const lastSavedDoorCustomizations: DoorCustomizations = {
      //   selectedColor: get(savedData, 'selectedColor', initialDoorCustomizations.selectedColor),
      //   selectedDoorId: get(savedData, 'selectedDoorId', ''),
      //   selectedGroupOneDecorations: [...get(savedData, 'selectedGroupOneDecorations', [])],
      //   selectedGroupTwoDecorations: [],
      //   selectedGroupThreeDecorations: [],
      // };
      // return {
      //   ...state,
      //   lastSavedDoorCustomizations: {
      //     ...lastSavedDoorCustomizations,
      //   },
      //   currentDoorCustomizations: {
      //     ...lastSavedDoorCustomizations,
      //   },
      // };
    },
    [getDoorsConfigurationFlowAndAssets.SUCCESS]: (state, {payload}): DoorState => {
      return {
        ...state,
        doorCustomizationFlowConfig: payload,
      };
    },
    [saveDoor.REQUEST]: (state): DoorState => ({...state, isSaving: true}),
    [saveDoor.SUCCESS]: (state, {payload}): DoorState => ({
      ...state,
      lastSavedDoorCustomizations: {
        ...payload,
      },
      isSaving: false,
    }),
    [saveDoor.FAIL]: (state): DoorState => ({...state, isSaving: false}),
    [updateDoor.REQUEST]: (state, {payload}: UpdateDoorAction): DoorState => ({
      ...state,
      currentDoorCustomizations: {
        ...state.currentDoorCustomizations,
        ...payload,
      },
    }),
  },
});

export default doorSlice.reducer;
