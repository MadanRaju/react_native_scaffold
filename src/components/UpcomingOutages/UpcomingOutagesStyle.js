import { StyleSheet } from 'react-native';
// import { isAbsolute } from 'path';

export default StyleSheet.create({
  screenViewStyle: {
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'space-between',
  },
  dropdownViewStyle: {
    marginTop: 90,
    marginBottom: 100,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    maxWidth: '80%',
    position: 'absolute',
    zIndex: 99999,
    backgroundColor: '#FFFFFF',
  },
  scrollViewStyle: {
    marginTop: 60,
    width: '100%',
  },
  listHeaderTextStyle: {
    alignSelf: 'center',
    fontSize: 19,
    color: '#4A4A4A',
    fontWeight: 'bold',
  },
  noneBColor: {
    backgroundColor: '#DBD9DB',
  },
  noneTextColor: {
    color: '#a4a4a4',
  },
  addTextViewStyle: {
    marginTop: 20,
    marginBottom: 30,
    maxWidth: '80%',
    alignSelf: 'center',
  },
  addTextStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  headerLineStyle: {
    borderTopWidth: 1,
    borderColor: '#4A4A4A',
  },
  emergentOutageHeaderBColor: {
    // marginTop: 55,
    backgroundColor: '#FDD475',
  },
  emergentOutageDetailBColor: {
    height: 87,
    backgroundColor: '#fef6e3',
  },
  plannedOutageHeaderBColor: {
    backgroundColor: 'rgba(65,115,0,0.4)',
  },
  plannedOutageDetailBColor: {
    height: 87,
    backgroundColor: 'rgba(65,115,0,0.1)',
  },
});
