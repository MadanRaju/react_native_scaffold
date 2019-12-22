import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  horizontalLineStyle: {
    borderColor: '#979797',
    borderWidth: 0.5,
    width: '90%',
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
  },
  listView: {
    top: 10,
    left: 0,
    right: 0,
    bottom: 10,
  },
  rowStyle: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
  },
  listContent: {
    marginLeft: 30,
    alignContent: 'flex-start',
    justifyContent: 'center',
  },
  timeline: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topLine: {
    position: 'absolute',
    top: 0,
    left: 8,
    width: 1,
    bottom: 0,
    flex: 1,
    backgroundColor: 'black',
  },
  bottomLine: {
    position: 'absolute',
    top: 0,
    left: 8,
    width: 1,
    bottom: 0,
    flex: 1,
    backgroundColor: 'black',
  },
  hiddenLine: {
    width: 0,
    height: 0,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 8,
    backgroundColor: 'black',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  displayLineStyle: {
    fontSize: 16,
    alignSelf: 'flex-start',
  },
  displayLogLineStyle: {
    fontSize: 14,
    color: '#9B9B9B',
    alignSelf: 'flex-start',
  },
  greenBackground: {
    backgroundColor: '#417300',
  },
  activityLogHeaderStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 20,
    alignSelf: 'flex-start',
  },
});
