import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  viewHeaderStyle: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
  },
  textHeaderStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4A4A4A',
  },
  viewContainerStyle: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    height: '100%',
  },
  textTopHeaderStyle: {
    marginBottom: 20,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4A4A4A',
  },
  textCardHeaderStyle: {
    color: '#4A4A4A',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textCardDetailStyle: {
    color: '#4A4A4A',
    fontSize: 15,
    fontWeight: 'normal',
  },
  viewVerticalCardContainerStyle: {
    flexDirection: 'row',
  },
  viewVerticalColumnStyle: {
    maxWidth: '50%',
  },
  viewSingleCardStyle: {
    marginBottom: 20,
    maxHeight: 40,
  },
  viewButtonContainerStyles: {
    alignSelf: 'flex-end',
    width: '100%',
  },
  addButtonQuestionStyle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  viewButtonStyle: {
    marginTop: 10,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    flexShrink: 1,
    minHeight: 35,
    minWidth: 81,
    height: 55,
    width: 121,
    maxHeight: 70,
    maxWidth: 162,
    margin: 5,
    borderColor: '#4A4A4A',
    shadowOffset: {
      width: 2,
      height: 0,
    },
    shadowColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButtonStyle: {
    fontSize: 14,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    color: '#4A4A4A',
    textAlign: 'center',
  },
  emergentOutageBColor: {
    backgroundColor: '#FDD475',
  },
  plannedOutageBColor: {
    backgroundColor: 'rgba(65,115,0,0.07)',
  },
});
