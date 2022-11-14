import React, {useState, useEffect} from 'react';
import {storiesOf} from '@storybook/react';
import CustomizationItemList from '.';
import CustomizationItem from '../CustomizationItem';
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

storiesOf('Customization Item List', module)
  .addDecorator((story: any) => (
    <BrowserRouter>
      <Provider story={story()} />
    </BrowserRouter>
  ))
  .addDecorator((story: any) => (
    <div style={{backgroundColor: '#020d2c', height: '95vh', padding: '20px'}}>{story()}</div>
  ))
  .add('One Black Customization Item List', () => (
    <CustomizationItemList useState={useState} useEffect={useEffect} numColumns={4}>
      <CustomizationItem
        customizationKey={'item_0'}
        customizationValue={'item_0'}
        icon={colorIcon('', 'item_0')}
      />
    </CustomizationItemList>
  ))
  .add('Three Black Customization Item List', () => (
    <CustomizationItemList useState={useState} useEffect={useEffect} numColumns={4}>
      {Array.from({length: 3}, () => (
        <CustomizationItem
          customizationKey={Math.floor(Math.random() * 1000) + ''}
          customizationValue={Math.floor(Math.random() * 1000) + ''}
          icon={colorIcon('', 'item_0')}
        />
      ))}
    </CustomizationItemList>
  ))
  .add('Mutiple Black Customization Item List', () => (
    <CustomizationItemList useState={useState} useEffect={useEffect} numColumns={4}>
      {Array.from({length: 20}, () => (
        <CustomizationItem
          customizationKey={Math.floor(Math.random() * 1000) + ''}
          customizationValue={Math.floor(Math.random() * 1000) + ''}
          icon={colorIcon('', 'item_0')}
        />
      ))}
    </CustomizationItemList>
  ))
  .add('One Text Customization Item List', () => (
    <CustomizationItemList useState={useState} useEffect={useEffect} numColumns={4}>
      <CustomizationItem
        componentStyle={'text'}
        customizationKey={'item_0'}
        customizationValue={'item_0'}
      />
    </CustomizationItemList>
  ))
  .add('Three Text Customization Item List', () => (
    <CustomizationItemList useState={useState} useEffect={useEffect} numColumns={4}>
      {Array.from({length: 3}, () => (
        <CustomizationItem
          componentStyle={'text'}
          customizationKey={Math.floor(Math.random() * 1000) + ''}
          customizationValue={Math.floor(Math.random() * 1000) + ''}
        />
      ))}
    </CustomizationItemList>
  ))
  .add('Mutiple Text Customization Item List', () => (
    <CustomizationItemList useState={useState} useEffect={useEffect} numColumns={4}>
      {Array.from({length: 20}, () => (
        <CustomizationItem
          componentStyle={'text'}
          customizationKey={Math.floor(Math.random() * 1000) + ''}
          customizationValue={Math.floor(Math.random() * 1000) + ''}
        />
      ))}
    </CustomizationItemList>
  ))
  .add('One Color Customization Item List', () => (
    <CustomizationItemList useState={useState} useEffect={useEffect} numColumns={5}>
      <CustomizationItem
        componentStyle={'color'}
        customizationKey={Math.floor(Math.random() * 1000) + ''}
        customizationValue={Math.floor(Math.random() * 1000) + ''}
        icon={colorIcon('color', Math.floor(Math.random() * 1000) + '')}
      />
    </CustomizationItemList>
  ))
  .add('Three Color Customization Item List', () => (
    <CustomizationItemList useState={useState} useEffect={useEffect} numColumns={5}>
      {Array.from({length: 3}, () => (
        <CustomizationItem
          componentStyle={'color'}
          customizationKey={Math.floor(Math.random() * 1000) + ''}
          customizationValue={Math.floor(Math.random() * 1000) + ''}
          icon={colorIcon('color', Math.floor(Math.random() * 1000) + '')}
        />
      ))}
    </CustomizationItemList>
  ))
  .add('Mutiple Color Customization Item List', () => (
    <CustomizationItemList useState={useState} useEffect={useEffect} numColumns={5}>
      {Array.from({length: 20}, () => (
        <CustomizationItem
          componentStyle={'color'}
          customizationKey={Math.floor(Math.random() * 1000) + ''}
          customizationValue={Math.floor(Math.random() * 1000) + ''}
          icon={colorIcon('color', Math.floor(Math.random() * 1000) + '')}
        />
      ))}
    </CustomizationItemList>
  ));
