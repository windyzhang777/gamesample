import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import CustomizationItem from '.';
import {BrowserRouter} from 'react-router-dom';
import Provider from '../../utils/Provider';

const colorIcon = (componentStyle: string, customizationValue: string) => {
  let randomColor = '#000';
  if (customizationValue && componentStyle === 'color') {
    randomColor = `#${((+customizationValue / 1000) * 16777215)
      .toString(16)
      .slice(0, 6)
      .replace(/\./g, 'f')}`;
  }
  const icon = (
    <div
      style={{
        height: '50px',
        width: '50px',
        backgroundColor: randomColor,
        borderRadius: '50%',
      }}
    />
  );
  return icon;
};

storiesOf('Customization Item', module)
  .addDecorator((story: any) => (
    <BrowserRouter>
      <Provider story={story()} />
    </BrowserRouter>
  ))
  .addDecorator((story: any) => (
    <div style={{backgroundColor: '#020d2c', height: '95vh', padding: '20px'}}>{story()}</div>
  ))
  .add('Black Customization Item', () => (
    <CustomizationItem
      selected={false}
      customizationKey={'item_0'}
      customizationValue={'item_0'}
      onPress={action('select item!')}
      icon={colorIcon('', '')}
    />
  ))
  .add('Selected Black Customization Item', () => (
    <CustomizationItem
      selected={true}
      customizationKey={'item_0'}
      customizationValue={'item_0'}
      onPress={action('select item!')}
      icon={colorIcon('', '')}
    />
  ))
  .add('Text Customization Item', () => (
    <CustomizationItem
      componentStyle={'text'}
      customizationKey={'item_0'}
      customizationValue={'item_0'}
      onPress={action('select item!')}
    />
  ))
  .add('Selected Text Customization Item', () => (
    <CustomizationItem
      componentStyle={'text'}
      selected={true}
      customizationKey={'item_0'}
      customizationValue={'item_0'}
      onPress={action('select item!')}
    />
  ))
  .add('Color Customization Item', () => (
    <CustomizationItem
      componentStyle={'color'}
      customizationKey={'777'}
      customizationValue={'777'}
      onPress={action('select item!')}
      icon={colorIcon('color', '777')}
    />
  ))
  .add('Selected Color Customization Item', () => (
    <CustomizationItem
      componentStyle={'color'}
      selected={true}
      customizationKey={'777'}
      customizationValue={'777'}
      onPress={action('select item!')}
      icon={colorIcon('color', '777')}
    />
  ));
