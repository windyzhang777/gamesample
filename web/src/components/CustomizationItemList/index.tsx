import React from 'react';
import CustomizationItemListShared, {
  CustomizationItemListProps,
  CustomizationItemListRenderProps,
} from 'shared/containers/CustomizationItemList';
import classes from './CustomizationItemList.module.css';

export default function CustomizationItemList(props: CustomizationItemListProps): JSX.Element {
  return (
    <CustomizationItemListShared
      {...props}
      renderComponent={({
        children,
        numColumns,
        multiselection,
        useSelection,
      }: CustomizationItemListProps & CustomizationItemListRenderProps) => {
        let [selection, setSelection] = useSelection;
        const data = Array.isArray(children) ? children : [children];

        const itemList = data.map((item) => {
          return React.cloneElement(item, {
            key: item.props.customizationKey,
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
              ? selection.includes(item.props.customizationKey)
              : selection === item.props.customizationKey,
          });
        });

        return (
          <div
            className={classes.CustomizationItemList}
            style={{
              gridTemplateColumns: `repeat(${numColumns}, 1fr)`,
            }}>
            {itemList}
          </div>
        );
      }}
    />
  );
}
