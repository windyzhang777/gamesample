import React from 'react';
import SharedCustomizationItemList, {
  CustomizationItemListProps,
  CustomizationItemListRenderProps,
} from 'shared/containers/CustomizationItemList';
import {FlatList, Dimensions, View} from 'react-native';

export default function CustomizationItemList(props: CustomizationItemListProps): JSX.Element {
  return (
    <SharedCustomizationItemList
      {...props}
      renderComponent={({
        children,
        numColumns,
        useSelection,
        multiselection,
        itemMarginTop,
        itemMarginRight,
        itemMarginBottom,
        itemMarginLeft,
      }: CustomizationItemListProps & CustomizationItemListRenderProps) => {
        let [selection, setSelection] = useSelection;
        return (
          <FlatList
            style={{
              width: Dimensions.get('window').width,
            }}
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
      }}
    />
  );
}
