import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  flex: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    textAlign: 'center',
  },
  colorsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    display: 'flex',
  },
  categoryWrapper: {
    flexDirection: 'row',
    height: 80,
    width: 300,
    display: 'flex',
  },
  categoryText: {
    color: '#FFF',
  },
  saveButtonContainer: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
  },
  saveButton: {
    backgroundColor: '#037d03',
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
  },
  saveButtonText: {
    color: '#FFF',
  },
});

export default styles;
