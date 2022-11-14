import React, {useRef} from 'react';
import CustomizationItemShared, {CustomizationItemProps} from 'shared/containers/CustomizationItem';
import classes from './CustomizationItem.module.css';
import CheckIcon from 'native/src/assets/images/check.png';

export default function CustomizationItem(props: CustomizationItemProps): JSX.Element {
  let iconCallbackRef = useRef(() => {});
  return (
    <CustomizationItemShared
      {...props}
      renderComponent={({
        componentStyle,
        selected,
        customizationKey,
        customizationValue,
        icon,
        onPress,
      }: CustomizationItemProps) => {
        // TODO: switch icon based on item style

        const itemClasses = [classes.CustomizationItem];
        if (componentStyle === 'color') {
          itemClasses.push(classes.ColorPicker);
        }
        if (componentStyle === 'text') {
          icon = <div>{customizationValue}</div>;
        }
        let check = null;
        if (selected) {
          itemClasses.push(classes.IsSelected);
          if (componentStyle !== 'color') {
            check = (
              <div className={classes.Check}>
                <img src={CheckIcon} alt="check" />
              </div>
            );
          }
        }
        return (
          <div
            className={classes.CustomizationItemContainer}
            onClick={() => {
              iconCallbackRef.current();
              // eslint-disable-next-line @typescript-eslint/no-unused-expressions
              onPress ? onPress(customizationKey) : null;
            }}>
            {check}
            <div className={itemClasses.join(' ')}>
              {icon
                ? React.cloneElement(icon, {
                    ref: iconCallbackRef,
                  })
                : null}
            </div>
          </div>
        );
      }}
    />
  );
}
