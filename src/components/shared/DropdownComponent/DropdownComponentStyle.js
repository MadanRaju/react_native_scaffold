import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  dropdownContainerStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    width: 200,
    backgroundColor: '#FFFFFF',
  },
  optionView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 1,
    height: 50,
  },
  selectedOptionStyle: {
    padding: 11,
    fontSize: 22,
    color: '#4A4A4A',
  },
  listStyle: {
    backgroundColor: '#FFFFFF',
    borderRadius: 3,
    borderWidth: 0.5,
    // height: 150,
    zIndex: 99999,
  },
  listTextStyle: {
    backgroundColor: '#FFFFFF',
    textAlign: 'center',
    padding: 7,
    fontSize: 20,
    color: '#4A4A4A',
  },
});
