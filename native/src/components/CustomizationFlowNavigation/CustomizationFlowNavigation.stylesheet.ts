import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
  CustomizationFlowNavigation: {
    flexShrink: 1,
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: Platform.OS === 'ios' ? 42 : 16,
  },
  CustomizationFlowNavigationButton: {
    flex: 1,
    flexGrow: 1,
    height: 50,
  },
  CustomizationFlowNavigationText: {
    fontSize: 18,
    fontFamily: 'Tungsten-Bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default styles;
