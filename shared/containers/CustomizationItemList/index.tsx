import {RenderedComponent} from '../../models/RenderedComponent';
import {Children} from 'react';
export interface CustomizationItemListProps {
  useState: any;
  useEffect: any;
  children: any[] | any;
  defaultCustomizationKey?: string;
  numColumns: number;
  onSelectionCallback?: (value: string) => void;
  multiselection?: boolean;
  itemMarginTop?: number;
  itemMarginRight?: number;
  itemMarginBottom?: number;
  itemMarginLeft?: number;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CustomizationItemListRenderProps {
  useSelection: [any, any];
}

export default function CustomizationItemList({
  useState,
  useEffect,
  children,
  defaultCustomizationKey,
  numColumns,
  onSelectionCallback,
  multiselection = false,
  itemMarginTop = 8,
  itemMarginRight = 8,
  itemMarginBottom = 8,
  itemMarginLeft = 8,
  renderComponent,
}: CustomizationItemListProps &
  RenderedComponent<CustomizationItemListProps & CustomizationItemListRenderProps>): JSX.Element {
  const defaultValue = defaultCustomizationKey
    ? defaultCustomizationKey
    : Array.isArray(children) && children.length > 0
    ? children[0].props.customizationKey
    : children.props
    ? children.props.customizationKey
    : multiselection
    ? []
    : null;
  const useSelection = useState(defaultValue);

  useEffect(() => {
    if (onSelectionCallback) onSelectionCallback(useSelection[0]);
  }, [useSelection[0]]);

  const renderProps: CustomizationItemListProps & CustomizationItemListRenderProps = {
    useState,
    useEffect,
    children,
    numColumns,
    onSelectionCallback,
    multiselection,
    itemMarginTop,
    itemMarginRight,
    itemMarginBottom,
    itemMarginLeft,
    useSelection,
  };

  return renderComponent(renderProps);
}
