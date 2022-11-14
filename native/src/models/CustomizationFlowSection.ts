import {CatalogResponse} from './Door';

export interface CustomizationFlowSection {
  customizationFlowKey: string;
  customizationFlowTitle: string;
  customizationFlowContentComponent: string;
  customizationFlowContentComponentProps?: {
    [propKey: string]: any;
  };
  customizationItemIconComponent: string;
  items?: CatalogResponse[];
}
