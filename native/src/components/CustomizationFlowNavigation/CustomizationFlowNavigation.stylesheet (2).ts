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
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
  },
  CustomizationFlowNavigationText: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default styles;
