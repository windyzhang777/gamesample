import React, {useState, useEffect} from 'react';
import {storiesOf} from '@storybook/react';
import {BrowserRouter} from 'react-router-dom';
import CustomizationFlow from '.';
import {CatalogResponse} from 'shared/models/Door';
import Provider from '../../utils/Provider';

const doorItems: CatalogResponse[] = [
  {
    ItemId: 'door_gothic',
    ItemClass: 'doors',
    CatalogVersion: 'Doors',
    DisplayName: 'Gothic Door',
    VirtualCurrencyPrices: {},
    Tags: [],
    CustomData: '{"defaultColor":"#FF0000"}',
    Consumable: {},
    CanBecomeCharacter: false,
    IsStackable: false,
    IsTradable: false,
    IsLimitedEdition: false,
    InitialLimitedEditionCount: 0,
  },
  {
    ItemId: 'door_medieval',
    ItemClass: 'doors',
    CatalogVersion: 'Doors',
    DisplayName: 'Medieval Door',
    VirtualCurrencyPrices: {},
    Tags: [],
    CustomData: '{"defaultColor":"#FF0000"}',
    Consumable: {},
    CanBecomeCharacter: false,
    IsStackable: false,
    IsTradable: false,
    IsLimitedEdition: false,
    InitialLimitedEditionCount: 0,
  },
];

const colorItems: CatalogResponse[] = [
  {
    ItemId: 'green',
    ItemClass: 'color',
    CatalogVersion: 'Doors',
    DisplayName: 'Green',
    VirtualCurrencyPrices: {},
    Tags: [],
    CustomData: '{"color":"#00FF00"}',
    Consumable: {},
    CanBecomeCharacter: false,
    IsStackable: false,
    IsTradable: false,
    IsLimitedEdition: false,
    InitialLimitedEditionCount: 0,
  },
  {
    ItemId: 'expensive_green',
    ItemClass: 'color',
    CatalogVersion: 'Doors',
    DisplayName: 'Expensive Green',
    VirtualCurrencyPrices: {SP: 999},
    Tags: [],
    CustomData: '{"color":"#004200"}',
    Consumable: {},
    CanBecomeCharacter: false,
    IsStackable: false,
    IsTradable: false,
    IsLimitedEdition: false,
    InitialLimitedEditionCount: 0,
  },
  {
    ItemId: 'blue',
    ItemClass: 'color',
    CatalogVersion: 'Doors',
    DisplayName: 'Blue',
    VirtualCurrencyPrices: {},
    Tags: [],
    CustomData: '{"color":"#0000FF"}',
    Consumable: {},
    CanBecomeCharacter: false,
    IsStackable: false,
    IsTradable: false,
    IsLimitedEdition: false,
    InitialLimitedEditionCount: 0,
  },
  {
    ItemId: 'red',
    ItemClass: 'color',
    CatalogVersion: 'Doors',
    DisplayName: 'Red',
    VirtualCurrencyPrices: {},
    Tags: [],
    CustomData: '{"color":"#FF0000"}',
    Consumable: {},
    CanBecomeCharacter: false,
    IsStackable: false,
    IsTradable: false,
    IsLimitedEdition: false,
    InitialLimitedEditionCount: 0,
  },
  {
    ItemId: 'pink',
    ItemClass: 'color',
    CatalogVersion: 'Doors',
    DisplayName: 'Pink',
    VirtualCurrencyPrices: {},
    Tags: [],
    CustomData: '{"color":"#FFC0CB"}',
    Consumable: {},
    CanBecomeCharacter: false,
    IsStackable: false,
    IsTradable: false,
    IsLimitedEdition: false,
    InitialLimitedEditionCount: 0,
  },
  {
    ItemId: 'lightpink',
    ItemClass: 'color',
    CatalogVersion: 'Doors',
    DisplayName: 'lightpink',
    VirtualCurrencyPrices: {},
    Tags: [],
    CustomData: '{"color":"#FFB6C1"}',
    Consumable: {},
    CanBecomeCharacter: false,
    IsStackable: false,
    IsTradable: false,
    IsLimitedEdition: false,
    InitialLimitedEditionCount: 0,
  },
  {
    ItemId: 'hotpink',
    ItemClass: 'color',
    CatalogVersion: 'Doors',
    DisplayName: 'hotpink',
    VirtualCurrencyPrices: {},
    Tags: [],
    CustomData: '{"color":"#FF69B4"}',
    Consumable: {},
    CanBecomeCharacter: false,
    IsStackable: false,
    IsTradable: false,
    IsLimitedEdition: false,
    InitialLimitedEditionCount: 0,
  },
  {
    ItemId: 'deeppink',
    ItemClass: 'color',
    CatalogVersion: 'Doors',
    DisplayName: 'deeppink',
    VirtualCurrencyPrices: {},
    Tags: [],
    CustomData: '{"color":"#FF1493"}',
    Consumable: {},
    CanBecomeCharacter: false,
    IsStackable: false,
    IsTradable: false,
    IsLimitedEdition: false,
    InitialLimitedEditionCount: 0,
  },
  {
    ItemId: 'palevioletred',
    ItemClass: 'color',
    CatalogVersion: 'Doors',
    DisplayName: 'palevioletred',
    VirtualCurrencyPrices: {},
    Tags: [],
    CustomData: '{"color":"#DB7093"}',
    Consumable: {},
    CanBecomeCharacter: false,
    IsStackable: false,
    IsTradable: false,
    IsLimitedEdition: false,
    InitialLimitedEditionCount: 0,
  },
];

const decorationItems: CatalogResponse[] = [
  {
    ItemId: 'deco_g1_fire',
    ItemClass: 'decorations',
    CatalogVersion: 'Doors',
    DisplayName: 'Fire',
    VirtualCurrencyPrices: {},
    RealCurrencyPrices: {},
    Tags: ['group1Decorations'],
    Consumable: {},
    CanBecomeCharacter: false,
    IsStackable: false,
    IsTradable: false,
    IsLimitedEdition: false,
    InitialLimitedEditionCount: 0,
  },
  {
    ItemId: 'deco_g1_skulls',
    ItemClass: 'decorations',
    CatalogVersion: 'Doors',
    DisplayName: 'Skulls',
    VirtualCurrencyPrices: {},
    RealCurrencyPrices: {},
    Tags: ['group1Decorations'],
    Consumable: {},
    CanBecomeCharacter: false,
    IsStackable: false,
    IsTradable: false,
    IsLimitedEdition: false,
    InitialLimitedEditionCount: 0,
  },
  {
    ItemId: 'deco_g1_spiderweb',
    ItemClass: 'decorations',
    CatalogVersion: 'Doors',
    DisplayName: 'Spiderweb',
    VirtualCurrencyPrices: {},
    RealCurrencyPrices: {},
    Tags: ['group1Decorations'],
    Consumable: {},
    CanBecomeCharacter: false,
    IsStackable: false,
    IsTradable: false,
    IsLimitedEdition: false,
    InitialLimitedEditionCount: 0,
  },
];

storiesOf('Customization Flow', module)
  .addDecorator((story: any) => (
    <BrowserRouter>
      <Provider story={story()} />
    </BrowserRouter>
  ))
  .addDecorator((story: any) => (
    <div style={{backgroundColor: '#020d2c', height: '95vh'}}>{story()}</div>
  ))
  .add('Customization Flow', () => {
    return (
      <CustomizationFlow
        useEffect={useEffect}
        useState={useState}
        customizationFlowConfig={[
          {
            customizationFlowKey: 'door',
            customizationFlowTitle: 'Door',
            customizationItemIconComponent: 'ImageCustomizationIcon',
            custiomizationFlowContentComponentProps: {
              numColumns: 4,
            },
            custiomizationFlowContentComponent: 'CustomizationItemList',
            items: doorItems,
          },
          {
            customizationFlowKey: 'color',
            customizationFlowTitle: 'Color',
            customizationItemIconComponent: 'ColorCustomizationIcon',
            custiomizationFlowContentComponentProps: {
              numColumns: 4,
            },
            custiomizationFlowContentComponent: 'CustomizationItemList',
            items: colorItems,
          },
          {
            customizationFlowKey: 'decorations',
            customizationFlowTitle: 'Decorations',
            customizationItemIconComponent: 'ImageCustomizationIcon',
            custiomizationFlowContentComponentProps: {
              numColumns: 4,
            },
            custiomizationFlowContentComponent: 'CustomizationItemList',
            items: decorationItems,
          },
        ]}
        useCustomizationConfig={useState({})}
      />
    );
  });
