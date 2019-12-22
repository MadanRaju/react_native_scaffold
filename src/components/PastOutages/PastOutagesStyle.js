import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  pastOutagesView: {
    justifyContent: 'flex-start',
  },
  barView: {
    marginTop: '8%',
  },
  calendarDropdownView: {
    width: '80%',
    alignSelf: 'center',
    marginTop: '6%',
  },
  dropdownViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    maxWidth: '80%',
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    zIndex: 9999,
  },
  dropdownListStyle: {
    zIndex: 99999,
  },
  calendarInfoRow: {
    borderTopWidth: 1,
    borderColor: '#B3C799',
    marginTop: '5%',
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  outageCompleteSquare: {
    width: 20,
    height: 20,
    backgroundColor: '#B3C799',
    marginRight: 8,
  },
  tabBarStyle: {
    display: 'flex',
    flexDirection: 'row',
    borderColor: '#4A4A4A',
    borderWidth: 1,
    width: '100%',
    height: 53,
  },
  cardListStyle: {
    marginTop: '20%',
    zIndex: -1,
    height: '78%',
  },
  calendarCardListStyle: {
    height: '20%',
  },
  cardViewStyle: {
    height: 70,
    backgroundColor: 'rgba(65, 115, 0, 0.07)',
    fontSize: 16,
  },
  tabButtonStyle: {
    flex: 1,
    borderWidth: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabOptionTextStyle: {
    fontWeight: 'bold',
  },
  activeTabButtonStyle: {
    backgroundColor: '#417300',
  },
  activeOptionTextStyle: {
    color: 'white',
    fontWeight: '800',
  },
});
