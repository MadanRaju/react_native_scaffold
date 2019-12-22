const theme = {
  calendar: {
    arrowColor: '#417300',
    /* Override default styles for selected days */
    'stylesheet.day.single': {
      selected: {
        backgroundColor: 'rgba(65, 115, 0, 0.6)',
        borderRadius: 0,
        borderColor: '#417300',
        borderWidth: 1,
      },
      selectedText: {
        color: '#FFFFFF',
      },
    },
  },
  todaysDate: {
    container: {
      borderColor: '#E3E2E2',
      borderRadius: 15,
      borderWidth: 1,
      backgroundColor: '#FFFFFF',
    },
    text: {
      color: '#4A4A4A',
      fontWeight: 'bold',
    },
  },
  hasOutages: {
    container: {
      borderRadius: 0,
      borderWidth: 0,
      backgroundColor: 'rgba(65, 115, 0, 0.3)',
    },
  },
};

export default theme;
