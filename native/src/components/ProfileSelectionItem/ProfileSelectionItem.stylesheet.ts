import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  ProfileSelectionItem: {
    flex: 1,
    flexShrink: 1,
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#DDFAFF',
    borderColor: '#6f90a8',
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 3,
    alignItems: 'center',
  },
  ProfileSelectionItemSelected: {
    backgroundColor: 'white',
    shadowColor: '#0578BD',
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
  },
  ProfileSelectionItemDisplyName: {
    color: '#000C2E',
    //fontFamily: 'ITC Franklin Gothic Std', <- Font missing?
    fontSize: 18,
    fontWeight: 'bold',
  },
  ProfileSelectionItemProfileImage: {
    width: 64,
    height: 64,
    marginRight: 16,
  },
});
