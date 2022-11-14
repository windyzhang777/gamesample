export interface ToTerType {
  toterId: string;
  toterName: string;
}

export interface ToterState {
  currentDoorId?: number;
  toterItems: ToTerType[];
}
