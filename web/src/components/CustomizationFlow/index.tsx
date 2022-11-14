import React, {useRef, useState, useEffect, CSSProperties} from 'react';
import SharedCustomizationFlow, {
  CustomizationFlowProps,
  CustomizationFlowSection,
  CustomizationFlowRenderProps,
} from 'shared/containers/CustomizationFlow';
import BatIcon from 'native/src/assets/images/Options-Menu_Active-Selection-Bat.svg';
import resolvePlatform from 'shared/utils/resolvePlatform';
import resolveWeb from '../../utils/resolveWeb';
import CustomizationItem from '../CustomizationItem';
import {CatalogResponse} from 'shared/models/Door';
import classes from './CustomizationFlow.module.css';
import CustomizationFlowNavigation from '../CustomizationFlowNavigation';

export default function CustomizationFlow(props: CustomizationFlowProps) {
  let [currentIndex, setCurrentIndex] = useState(0);

  const tabList = useRef<HTMLDivElement | null>(null);
  const flowTabContentList = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (tabList && tabList.current) {
      const currentIndexElement = tabList.current.childNodes[currentIndex] as HTMLSpanElement;
      if (currentIndexElement) {
        const tabListbRect = tabList.current.getBoundingClientRect();
        const currentIndexbRect = currentIndexElement.getBoundingClientRect();
        const x =
          tabListbRect.x -
          currentIndexbRect.x +
          tabListbRect.width / 2 -
          currentIndexbRect.width / 2;
        tabList.current.style.transform = 'translateX(' + x + 'px)';
      }
    }
  }, [tabList, flowTabContentList, currentIndex]);

  return (
    <SharedCustomizationFlow
      {...props}
      renderComponent={({
        customizationFlowConfig,
        useCustomizationConfig,
      }: CustomizationFlowProps & CustomizationFlowRenderProps) => {
        // console.log('Flow', customizationFlowConfig);
        let [customizationConfig, setCustomizationConfig] = useCustomizationConfig;
        return (
          <div className={classes.CustomizationFlowContainer}>
            <div className={classes.BatIcon}>
              <img src={BatIcon} alt="BatIcon" />
            </div>
            <div className={classes.FlowTabs} ref={tabList}>
              {customizationFlowConfig.map((item: CustomizationFlowSection, index: number) => {
                let textStyle: CSSProperties = {
                  color: '#fff',
                  fontWeight: 600,
                };
                switch (true) {
                  case currentIndex === index:
                    textStyle = {
                      color: '#ADEDF9',
                      fontWeight: 900,
                    };
                    break;
                  case currentIndex > index:
                    textStyle = {
                      color: '#fff',
                      fontWeight: 600,
                    };
                    break;
                  case currentIndex < index:
                    textStyle = {
                      color: '#515a71',
                      fontWeight: 600,
                    };
                    break;
                }
                return (
                  <span
                    className={classes.FlowTabText}
                    key={item.customizationFlowKey}
                    style={textStyle}>
                    {item.customizationFlowTitle}
                  </span>
                );
              })}
            </div>
            <div className={classes.Underline} />

            <div className={classes.FlowSection} ref={flowTabContentList}>
              {customizationFlowConfig &&
                customizationFlowConfig.map((item: CustomizationFlowSection) => {
                  // console.log('customizationFlowConfig: ', customizationFlowConfig);
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
                          }).bind({resolver: resolveWeb});
                          return (
                            <CustomizationItem
                              componentStyle={
                                catalogItem.ItemClass.toLowerCase().indexOf('color') > 0
                                  ? 'color'
                                  : ''
                              }
                              customizationKey={catalogItem.ItemId}
                              customizationValue={catalogItem.ItemId}
                              icon={iconComponent()}
                            />
                          );
                        })
                      : [],
                  }).bind({resolver: resolveWeb});
                  return (
                    <div
                      className={classes.FlowPanel}
                      style={{transform: `translateX(${-100 * currentIndex}%)`}}>
                      {React.cloneElement(contentComponent(), {
                        onSelectionCallback: (value: string) => {
                          setCustomizationConfig({
                            ...customizationConfig,
                            [item.customizationFlowKey]: value,
                          });
                        },
                      })}
                    </div>
                  );
                })}
            </div>
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
          </div>
        );
      }}
    />
  );
}
