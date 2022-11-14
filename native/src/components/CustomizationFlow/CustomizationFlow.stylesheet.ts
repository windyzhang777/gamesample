import {StyleSheet} from 'react-native';

export const flowTabTextStyle = ({currentIndex, index}: {currentIndex: number; index: number}) =>
  StyleSheet.create({
    tabText: {
      marginHorizontal: 20,
      color: currentIndex === index ? '#ADEDF9' : index < currentIndex ? 'white' : '#515a71',
      fontSize: 20,
      textTransform: 'capitalize',
      fontWeight: currentIndex === index ? 'bold' : 'normal',
    },
  });
export default StyleSheet.create({
  CustomizationFlowContainer: {
    flex: 1,
    marginTop: 5,
  },
  CustomizationFlowTabs: {
    flexShrink: 0,
    marginVertical: 5,
  },
  CustomizationFlowTabsUnderline: {
    height: 2,
    backgroundColor: '#454c67',
  },
});
