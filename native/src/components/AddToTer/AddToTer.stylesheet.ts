import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  AddToTer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#5c446f',
    alignItems: 'center',
  },
  AddToTerIOContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  AddToTerText: {
    flex: 1,
    color: 'white',
    fontWeight: 'bold',
  },
  AddToTerInput: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: 'white',
  },
  AddToTerButton: {
    color: 'white',
    borderRadius: 20,
    padding: 8,
    paddingHorizontal: 20,
    marginTop: 20,
    borderColor: 'white',
    borderWidth: 1,
    textTransform: 'capitalize',
  },
});
