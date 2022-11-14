import React, {useRef, useState, useLayoutEffect} from 'react';
import SharedCustomizationFlow, {
  CustomizationFlowProps,
  CustomizationFlowSection,
  CustomizationFlowRenderProps,
} from 'shared/containers/CustomizationFlow';
import {Text, Dimensions, View, FlatList} from 'react-native';
import styles, {flowTabTextStyle} from './CustomizationFlow.stylesheet';
import BatIcon from '../../assets/images/activeBat.svg';
import resolvePlatform from 'shared/utils/resolvePlatform';
import resolveNative from '../../utils/resolveNative';
import CustomizationItem from '../CustomizationItem';
import {CatalogResponse} from 'shared/models/Door';
import CustomizationFlowNavigation from '../CustomizationFlowNavigation';

export default function CustomizationFlow(props: CustomizationFlowProps) {
  let [currentIndex, setCurrentIndex] = useState(0);
  const tabList = useRef<FlatList>(null);
  const flowTabContentList = useRef<FlatList>(null);
  const halfWidth = Dimensions.get('window').width / 2;
  useLayoutEffect(() => {
    if (tabList && tabList.current && props.customizationFlowConfig.length > 0) {
      tabList.current.scrollToIndex({
        index: currentIndex,
        viewPosition: 0.5,
      });
    }
    if (
      flowTabContentList &&
      flowTabContentList.current &&
      props.customizationFlowConfig.length > 0
    ) {
      flowTabContentList.current.scrollToIndex({
        index: currentIndex,
        viewPosition: 0.5,
      });
    }
  }, [tabList, flowTabContentList, currentIndex, props.customizationFlowConfig.length]);
  return (
    <SharedCustomizationFlow
      {...props}
      renderComponent={({
        customizationFlowConfig,
        useCustomizationConfig,
      }: CustomizationFlowProps & CustomizationFlowRenderProps) => {
        let [customizationConfig, setCustomizationConfig] = useCustomizationConfig;
        return (
          <View style={styles.CustomizationFlowContainer}>
            <BatIcon style={styles.CustomizationFlowBatIcon} />
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
                if (tabList && tabList.current && props.customizationFlowConfig.length > 0) {
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
                let contentComponent = resolvePlatform(item.custiomizationFlowContentComponent, {
                  ...item.custiomizationFlowContentComponentProps,
                  defaultCustomizationKey: customizationConfig[item.customizationFlowKey],
                  //Build out the child elements correctly
                  children: item.items
                    ? item.items.map((catalogItem: CatalogResponse) => {
                        //Resolve the configured flow
                        let iconComponent = resolvePlatform(item.customizationItemIconComponent, {
                          catalogItem,
                          ...(catalogItem.CustomData ? JSON.parse(catalogItem.CustomData) : {}),
                        }).bind({resolver: resolveNative});
                        return (
                          <CustomizationItem
                            customizationKey={catalogItem.ItemId}
                            customizationValue={catalogItem.ItemId}
                            icon={iconComponent()}
                          />
                        );
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
              showNextButton={currentIndex + 1 !== customizationFlowConfig.length}
              onNextCallback={() => {
                if (currentIndex + 1 >= customizationFlowConfig.length) {
                  currentIndex = 0;
                  setCurrentIndex(currentIndex);
                } else {
                  currentIndex++;
                  setCurrentIndex(currentIndex);
                }
              }}
              showPreviousButton={currentIndex !== 0}
              onPreviousCallback={() => {
                if (currentIndex - 1 <= 0) {
                  currentIndex = 0;
                  setCurrentIndex(currentIndex);
                } else {
                  currentIndex--;
                  setCurrentIndex(currentIndex);
                }
              }}
            />
          </View>
        );
      }}
    />
  );
}
