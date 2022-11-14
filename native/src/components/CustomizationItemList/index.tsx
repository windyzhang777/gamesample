import React, {useEffect, useState} from 'react';
import {FlatList, Dimensions, View} from 'react-native';

export interface CustomizationItemListProps {
  children: any[] | any;
  defaultCustomizationKey?: string;
  numColumns: number;
  onSelectionCallback?: (value: string) => void;
  multiselection?: boolean;
  optionalSelection: boolean;
  itemMarginTop?: number;
  itemMarginRight?: number;
  itemMarginBottom?: number;
  itemMarginLeft?: number;
}

export default function CustomizationItemList({
  children,
  defaultCustomizationKey,
  numColumns,
  multiselection = false,
  optionalSelection = false,
  onSelectionCallback,
  itemMarginTop = 8,
  itemMarginRight = 8,
  itemMarginBottom = 8,
  itemMarginLeft = 8,
}: CustomizationItemListProps): JSX.Element {
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
    if (onSelectionCallback) {
      onSelectionCallback(useSelection[0]);
    }
  }, [useSelection[0]]);

  const [selection, setSelection] = useSelection;
  return (
    <FlatList
      style={{
        width: Dimensions.get('window').width,
      }}
      keyExtractor={(item) => item.customizationKey}
      contentContainerStyle={{alignSelf: 'center'}}
      data={Array.isArray(children) ? children : [children]}
      renderItem={(child) => {
        return (
          <View
            style={{
              marginTop: itemMarginTop,
              marginRight: itemMarginRight,
              marginBottom: itemMarginBottom,
              marginLeft: itemMarginLeft,
            }}>
            {React.cloneElement(child.item, {
              onPress: (customizationKey: string) => {
                if (multiselection) {
                  if (selection.includes(customizationKey)) {
                    setSelection(selection.filter((v: string) => v !== customizationKey));
                  } else {
                    if (selection.length > 0) {
                      setSelection([...selection, customizationKey]);
                    } else {
                      setSelection([customizationKey]);
                    }
                  }
                } else if (optionalSelection) {
                  selection && selection === customizationKey
                    ? setSelection(null)
                    : setSelection(customizationKey);
                } else {
                  setSelection(customizationKey);
                }
              },
              selected: multiselection
                ? selection.includes(child.item.props.customizationKey)
                : selection === child.item.props.customizationKey,
            })}
          </View>
        );
      }}
      numColumns={numColumns}
    />
  );
}
