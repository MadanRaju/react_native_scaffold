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
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    backgroundColor: '#FFFFFF',
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
    backgroundColor: 'rgba(65,115,0,0.2)',
  },
  addCardListStyle: {
    marginBottom: 20,
  },
});
