import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  viewStyle: {
    width: '100%',
    justifyContent: 'center',
    borderTopColor: '#4A4A4A',
    borderTopWidth: 1,
    height: 70,
    backgroundColor: 'rgba(65, 115, 0, 0.07)',
  },
  textStyle: {
    alignSelf: 'center',
    fontSize: 19,
    color: '#4A4A4A',
    fontWeight: 'bold',
  },
  cardviewstyle: {
    borderTopColor: '#4A4A4A',
    borderTopWidth: 1,
    display: 'flex',
    justifyContent: 'space-around',
  },
  infoHeaderStyle: {
    fontWeight: 'bold',
    marginBottom: 3,
    fontSize: 13,
  },
  cardContentStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginLeft: 13,
    marginRight: 13,
  },
  infoViewStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
  },
  infotextstyle: {
    fontSize: 12,
  },
  arrowStyle: {
    marginTop: 8,
  },
});
