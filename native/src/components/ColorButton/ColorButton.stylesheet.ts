import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#ff0101',
    padding: 10,
    margin: 10,
    borderRadius: 1000,
    width: 30,
    height: 30,
    borderColor: '#000',
    borderWidth: StyleSheet.hairlineWidth,
  },

  active: {
    borderColor: '#FFF',
    borderWidth: 2,
  },
});

export default styles;
