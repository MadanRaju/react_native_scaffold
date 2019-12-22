import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  addTimeRemainingComponentStyle: {
    height: '80%',
    justifyContent: 'center',
    alignContent: 'center',
  },
  addButtonContainerStyle: {
    height: 101,
    width: '100%',
    alignSelf: 'flex-end',
    justifyContent: 'space-evenly',
    backgroundColor: '#EDEDED',
  },
  continueButton: {
    // padding: '3%',
    alignSelf: 'center',
    height: 64,
    width: '37%',
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
  },
  modalViewStyle: {
    height: '60%',
    width: '90%',
    padding: 20,
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignContent: 'center',
    borderColor: '#4A4A4A',
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowColor: 'rgba(0,0,0,0.5)',
    // box-shadow: inset 0 -1px 0 1px rgba(0,0,0,0.5), 0 3px 5px 0 rgba(0,0,0,0.16);}
  },
  modalViewComponentStyle: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'transparent',
  },
  modalHeaderTextStyle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  modalDetailTextStyle: {
    fontSize: 18,
    fontWeight: 'normal',
  },
  modalButtonTextStyle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  modalYesButtonStyle: {
    height: 51,
    backgroundColor: '#FDD475',
    justifyContent: 'center',
  },
  modalNoButtonStyle: {
    height: 51,
    justifyContent: 'center',
  },
  imageStyle: {
    width: 28,
    height: 23,
  },
  handOffButtonViewStyle: {
    paddingRight: 17,
  },
  buttonsViewStyle: {
    height: '30%',
    justifyContent: 'space-between',
  },
});
