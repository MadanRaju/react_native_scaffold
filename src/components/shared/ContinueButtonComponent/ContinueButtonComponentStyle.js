import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  addButtonContainerStyle: {
    height: 101,
    width: '100%',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    backgroundColor: '#EDEDED',
  },
  continueButton: {
    padding: 20,
    alignSelf: 'center',
    height: 64,
    width: '90%',
    borderColor: '#4A4A4A',
    borderWidth: 1,
    backgroundColor: '#417300',
    shadowOffset: {
      width: 2,
      height: 0,
    },
    shadowColor: 'rgba(0,0,0,0.5)',
  },
  addWhiteTextStyle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
