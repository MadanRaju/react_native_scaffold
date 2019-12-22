import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  addTextViewStyle: {
    height: '35%',
    width: '70%',
    justifyContent: 'space-between',
  },
  addTextStyle: {
    fontWeight: '500',
    fontSize: 24,
    textAlign: 'center',
  },
  backgroundImageStyle: {
    flex: 1,
    // resizeMode: 'cover',
    width: null,
    height: null,
  },
  addButtonContainerStyle: {
    height: 101,
    width: '100%',
    alignSelf: 'flex-end',
    justifyContent: 'space-evenly',
    backgroundColor: '#EDEDED',
  },
  continueButton: {
    alignSelf: 'center',
    height: 64,
    width: '40%',
    borderColor: '#4A4A4A',
    borderWidth: 1,
    backgroundColor: '#417300',
    shadowOffset: {
      width: 2,
      height: 0,
    },
    shadowColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
  },
  addWhiteTextStyle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    alignContent: 'center',
  },
  outageCompleteIconStyle: {
    height: 89,
    width: 89,
    alignSelf: 'center',
    marginTop: '12%',
    marginBottom: '12%',
  },
});
