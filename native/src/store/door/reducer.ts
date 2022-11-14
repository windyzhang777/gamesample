import {createSlice} from '@reduxjs/toolkit';
import {login, logout} from '../authentication/actions';
import {updateDoor, saveDoor, getDoorsConfigurationFlowAndAssets} from './actions';
import {CustomizationFlowSection} from 'src/models/CustomizationFlowSection';

//These customizations are defined in playfab.
export interface DoorCustomizations {
  doors: string;
  color: string;
  decorations: string[];
  greetings: string | null;
}

export interface DoorCustomizationsPayload {
  payload: DoorCustomizations;
}

export interface DoorState {
  // The user's last saved door customizations (random if new)
  lastSavedDoorCustomizations: DoorCustomizations;
  // The user's current unsaved customizations used for edit screens
  currentDoorCustomizations: DoorCustomizations;
  // A door that we're currently trick-or-treating at
  trickOrTreatDoorCustomizations: DoorCustomizations;

  isSaving: boolean;
  isSaved: boolean;
  doorCustomizationFlowConfig: CustomizationFlowSection[];
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
  greetings: null,
};

const initialState: DoorState = {
  isSaving: false,
  isSaved: false,
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
    resetSaved: (state): DoorState => {
      return {
        ...state,
        isSaved: false,
        isSaving: false,
      };
    },
  },
  extraReducers: {
    [logout.SUCCESS]: (): DoorState => initialState,
    [login.SUCCESS]: (state, {payload}: any): DoorState => {
      const {userData} = payload;
      if ('savedDoor' in userData) {
        const lastSavedDoorCustomizations = {
          ...initialDoorCustomizations,
          ...JSON.parse(userData.savedDoor.Value),
        };
        return {
          ...state,
          lastSavedDoorCustomizations: {
            ...lastSavedDoorCustomizations,
          },
          currentDoorCustomizations: {
            ...lastSavedDoorCustomizations,
          },
        };
      }
      return state;
    },
    [getDoorsConfigurationFlowAndAssets.SUCCESS]: (state, {payload}): DoorState => {
      return {
        ...state,
        doorCustomizationFlowConfig: payload,
      };
    },
    [saveDoor.REQUEST]: (state): DoorState => ({...state, isSaved: false, isSaving: true}),
    [saveDoor.SUCCESS]: (state, {payload}): DoorState => ({
      ...state,
      lastSavedDoorCustomizations: {
        ...payload,
      },
      isSaving: false,
      isSaved: true,
    }),
    [saveDoor.FAIL]: (state): DoorState => ({...state, isSaving: false, isSaved: false}), //TODO need an general error system to throw a modal error?
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
