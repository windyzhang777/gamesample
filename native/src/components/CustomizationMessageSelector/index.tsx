import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Dimensions, FlatList, Modal} from 'react-native';
import styles from './CustomizationMessageSelector.stylesheet';
import CustomizationItem from '../CustomizationItem';
import CustomizationHeader from '../CustomizationHeader';
import CustomizationFlowNavigation from '../CustomizationFlowNavigation';
import LinearGradient from 'react-native-linear-gradient';

function OptionTextIcon(props: any) {
  return (
    <Text
      style={{
        marginVertical: 35,
        marginHorizontal: 16,
        alignSelf: 'flex-start',
      }}>
      {props.text}
    </Text>
  );
}

export interface CustomizationMessageSelectorProps {
  children: any[]; //CatalogResponse
  defaultCustomizationKey?: string;
  onSelectionCallback?: (value: string) => void;
}

export default function CustomizationMessageSelector({
  onSelectionCallback,
  defaultCustomizationKey,
  children,
}: CustomizationMessageSelectorProps) {
  const [selection, setSelection] = useState(
    defaultCustomizationKey ? defaultCustomizationKey : null,
  );
  const [modalOpen, setModalOpen] = useState(false);
  const options = children.reduce<{[key: string]: string}>((acc, item) => {
    acc[item.ItemId] = item.DisplayName;
    return acc;
  }, {});
  const optionKeys = Object.keys(options);
  useEffect(() => {
    if (onSelectionCallback) onSelectionCallback(selection);
  }, [selection]);

  return (
    <View
      style={{
        width: Dimensions.get('window').width,
      }}>
      <View style={styles.CustomizationMessageSelector}>
        <Text style={styles.CustomizationMessageSelectorLabel}>Select a Message</Text>
        <TouchableOpacity
          style={styles.CustomizationMessageSelectorSelect}
          onPress={() => {
            //Prevents spam clicking and nice toggle for animation :)
            if (!modalOpen) {
              setModalOpen(!modalOpen);
            }
          }}>
          {selection === null ? (
            <Text style={styles.CustomizationMessageSelectorSelectedText}>
              No Message Selected...
            </Text>
          ) : (
            <Text numberOfLines={1} style={styles.CustomizationMessageSelectorSelectedText}>
              {options[selection]}
            </Text>
          )}
        </TouchableOpacity>
      </View>
      <Modal animationType="slide" visible={modalOpen}>
        <View style={[styles.CustomizationMessageSelectorModal]}>
          <LinearGradient
            colors={['#0E2B57', '#000C2E']}
            style={{
              flex: 1,
              backgroundColor: '#000C2E',
            }}>
            <CustomizationHeader headerText={'Pick a Greeting'} />
            <View
              style={{
                width: '100%',
                height: 1,
                backgroundColor: '#6C778A',
                marginTop: 24,
              }}
            />
            <FlatList
              data={optionKeys}
              contentContainerStyle={{
                marginHorizontal: 30,
              }}
              keyExtractor={(_, index) => optionKeys[index]}
              renderItem={({item: optionKey}) => {
                return (
                  <View
                    style={{
                      marginTop: optionKey === optionKeys[0] ? 24 : 10,
                    }}>
                    <CustomizationItem
                      selected={optionKey === selection}
                      customizationKey={optionKey}
                      customizationValue={optionKey}
                      onPress={(selectedOptionKey: string) => {
                        setSelection(selectedOptionKey);
                      }}
                      icon={<OptionTextIcon text={options[optionKey]} />}
                    />
                  </View>
                );
              }}
            />
            <CustomizationFlowNavigation
              previousText={'Cancel'}
              onPreviousCallback={() => {
                if (modalOpen) {
                  setModalOpen(!modalOpen);
                }
              }}
              onNextCallback={() => {
                if (modalOpen) {
                  setModalOpen(!modalOpen);
                }
              }}
            />
          </LinearGradient>
        </View>
      </Modal>
    </View>
  );
}
