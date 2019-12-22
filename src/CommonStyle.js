import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  viewStyle: {
    display: 'flex',
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
    borderTopColor: '#4A4A4A',
    borderTopWidth: 1,
  },
  textViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  textStyle: {
    color: '#4A4A4A',
    alignSelf: 'center',
  },
});
