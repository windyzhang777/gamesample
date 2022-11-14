import React, {useRef, useState, useLayoutEffect} from 'react';
import {Text, Dimensions, View, FlatList} from 'react-native';
import styles, {flowTabTextStyle} from './CustomizationFlow.stylesheet';
import {CatalogResponse} from 'src/models/Door';
import {CustomizationFlowSection} from 'src/models/CustomizationFlowSection';
import CustomizationItem from 'src/components/CustomizationItem';
import CustomizationFlowNavigation from 'src/components/CustomizationFlowNavigation';
import BatIcon from 'src/components/icons/BatIcon';
import resolveNative from 'src/utils/resolveNative';
import resolvePlatform from 'src/utils/resolvePlatform';
import {ContentState} from 'src/store/content/reducer';

export interface CustomizationFlowProps {
  triggerFlowEndCallback: () => void;
  useCustomizationConfig: [any, any];
  customizationFlowConfig: CustomizationFlowSection[];
  useCurrentIndex?: [any, any];
  endFlowPane: (useCurrentIndex: [any, any]) => JSX.Element;
  showEndFlowPane: boolean;
  content: ContentState;
}

export default function CustomizationFlow({
  customizationFlowConfig,
  useCustomizationConfig,
  showEndFlowPane,
  triggerFlowEndCallback,
  endFlowPane,
  content,
}: CustomizationFlowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [customizationConfig, setCustomizationConfig] = useCustomizationConfig;
  const tabList = useRef<FlatList>(null);
  const flowTabContentList = useRef<FlatList>(null);
  const halfWidth = Dimensions.get('window').width / 2;

  useLayoutEffect(() => {
    if (tabList && tabList.current && customizationFlowConfig.length > 0) {
      tabList.current.scrollToIndex({
        index: currentIndex,
        viewPosition: 0.5,
      });
    }
    if (flowTabContentList && flowTabContentList.current && customizationFlowConfig.length > 0) {
      flowTabContentList.current.scrollToIndex({
        index: currentIndex,
        viewPosition: 0.5,
      });
    }
  }, [tabList, flowTabContentList, currentIndex, customizationFlowConfig.length]);

  return (
    <>
      <View
        style={[
          styles.CustomizationFlowContainer,
          {
            display: showEndFlowPane ? 'none' : 'flex',
          },
        ]}>
        <BatIcon />
        <FlatList
          horizontal={true}
          scrollEnabled={false}
          ref={tabList}
          data={customizationFlowConfig}
          style={styles.CustomizationFlowTabs}
          contentContainerStyle={{
            paddingHorizontal: halfWidth,
          }}
          onLayout={() => {
            if (tabList && tabList.current && customizationFlowConfig.length > 0) {
              tabList.current.scrollToIndex({
                index: currentIndex,
                viewPosition: 0.5,
              });
            }
          }}
          keyExtractor={(item) => item.customizationFlowKey}
          renderItem={({item, index}: {item: CustomizationFlowSection; index: number}) => {
            return (
              <Text style={flowTabTextStyle({currentIndex, index}).tabText}>
                {item.customizationFlowTitle}
              </Text>
            );
          }}
        />
        <View style={styles.CustomizationFlowTabsUnderline} />
        <FlatList
          ref={flowTabContentList}
          data={customizationFlowConfig}
          renderItem={({item}: {item: CustomizationFlowSection; index: number}) => {
            //Resolve the Content Component
            const contentComponent = resolvePlatform(item.customizationFlowContentComponent, {
              ...item.customizationFlowContentComponentProps,
              defaultCustomizationKey: customizationConfig[item.customizationFlowKey],
              //Build out the child elements correctly
              children: item.items
                ? item.items.map((catalogItem: CatalogResponse) => {
                    if (item.customizationItemIconComponent) {
                      //Resolve the configured flow
                      const iconComponent = resolvePlatform(item.customizationItemIconComponent, {
                        catalogItem,
                        ...(catalogItem.CustomData ? JSON.parse(catalogItem.CustomData) : {}),
                      }).bind({resolver: resolveNative});
                      return (
                        <CustomizationItem
                          key={catalogItem.ItemId}
                          customizationKey={catalogItem.ItemId}
                          customizationValue={catalogItem.ItemId}
                          icon={iconComponent()}
                        />
                      );
                    } else {
                      return catalogItem;
                    }
                  })
                : [],
            }).bind({resolver: resolveNative});
            return React.cloneElement(contentComponent(), {
              onSelectionCallback: (value: string) => {
                setCustomizationConfig({
                  ...customizationConfig,
                  [item.customizationFlowKey]: value,
                });
              },
            });
          }}
          keyExtractor={(cfs) => cfs.customizationFlowKey}
          horizontal={true}
          scrollEnabled={false}
        />
        <CustomizationFlowNavigation
          onNextCallback={() => {
            if (currentIndex + 1 >= customizationFlowConfig.length) {
              triggerFlowEndCallback();
              setCurrentIndex(currentIndex);
            } else {
              setCurrentIndex(currentIndex + 1);
            }
          }}
          showPreviousButton={currentIndex !== 0}
          onPreviousCallback={() => {
            if (currentIndex > 0) {
              setCurrentIndex(currentIndex - 1);
            }
          }}
        />
      </View>
      <View
        style={{
          display: showEndFlowPane ? 'flex' : 'none',
          flex: 1,
        }}>
        {endFlowPane([currentIndex, setCurrentIndex])}
      </View>
    </>
  );
}
