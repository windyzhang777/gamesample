import {RenderedComponent} from '../../models/RenderedComponent';
import {CatalogResponse} from '../../models/Door';

export interface CustomizationFlowSection {
  customizationFlowKey: string;
  customizationFlowTitle: string;
  custiomizationFlowContentComponent: string;
  custiomizationFlowContentComponentProps?: {
    [propKey: string]: any;
  };
  customizationItemIconComponent: string;
  // eslint-disable-next-line no-empty-pattern
  items?: CatalogResponse[];
}

export interface CustomizationFlowProps {
  useState: any;
  useEffect: any;
  useCustomizationConfig: [any, any];
  customizationFlowConfig: CustomizationFlowSection[];
}

export interface CustomizationFlowRenderProps {
  useCustomizationConfig: [any, any];
}

export default function CustomizationFlow({
  useState,
  useEffect,
  useCustomizationConfig,
  customizationFlowConfig,
  renderComponent,
}: CustomizationFlowProps &
  RenderedComponent<CustomizationFlowProps & CustomizationFlowRenderProps>): JSX.Element {
  return renderComponent({
    useState,
    useEffect,
    customizationFlowConfig,
    useCustomizationConfig,
  });
}
