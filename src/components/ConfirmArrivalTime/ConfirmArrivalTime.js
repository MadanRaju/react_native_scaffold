import React, { Component } from 'react';
import { addDays, format, isToday } from 'date-fns';
import { View, AppState, PushNotificationIOS } from 'react-native';
import PropTypes from 'prop-types';
import { DateTimePickerComponent, TimeRemainingComponent } from '../shared';

import commonStyle from '../../CommonStyle';
import styles from './ConfirmArrivalTimeStyle';

class ConfirmArrivalTime extends Component {
  constructor(props) {
    super(props);
    const minimumArrivalTime = props.outages.selectedUpcomingOutage.ETA || new Date();
    // const todaysDate = new Date();
    const tomorrowsDate = addDays(minimumArrivalTime, 1);

    this.state = {
      // TBD: chosenDate: todaysDate,
      chosenDate: minimumArrivalTime,
      maximumDate: tomorrowsDate,
      minimumDate: minimumArrivalTime,
      minuteInterval: 15,
      delayTime: 15,
    };

    this.confirmArrivalTimeDataArray = [
      {
        headerText: 'Arrival Time',
        detailText: isToday(this.state.chosenDate) ?
          `Today ${format(this.state.chosenDate, 'h:mm A')}`
          :
          format(this.state.chosenDate, 'ddd MMM D  h:mm A'),
      },
    ];

    this.arriveHeaderText = 'Confirm you have arrived';

    this.onConfirmArrivalTime = this.onConfirmArrivalTime.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.openAlert = this.openAlert.bind(this);
    this.handleAppStateChange = this.handleAppStateChange.bind(this);
  }

  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange);
  }

  handleAppStateChange(appState) {
    if (appState === 'background') {
      // this.openAlert();
      // console.warn('app is in background', this.state.delayTime);
    }
  }

  onDateChange(newDate) {
    this.setState({
      chosenDate: newDate,
    });
  }

  onConfirmArrivalTime() {
    this.props.setTime('SET_ARRIVAL_TIME', this.state.chosenDate);
    this.props.navigation.navigate('ConfirmStartTime');
  }

  openAlert() {
    const alertTime = new Date(Date.now() + (10 * 4000));
    PushNotificationIOS.requestPermissions();
    PushNotificationIOS.scheduleLocalNotification({
      alertBody: 'Hello',
      alertTitle: 'alert',
      fireDate: alertTime,
    });

    // console.log(alertTime);
    // Alert.alert(
    //   'Alert Title',
    //   'My Alert Msg',
    //   [
    //     { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
    //     { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
    //     { text: 'OK', onPress: () => console.log('OK Pressed') },
    //   ],
    //   { cancelable: false },
    // );
  }

  // TBD AndroidDatePicker and Google Maps to be included in the page
  render() {
    return (
      <View style={[commonStyle.viewStyle, styles.screenViewStyle]}>
        <View style={styles.addTimeRemainingComponentStyle}>
          <TimeRemainingComponent data={this.confirmArrivalTimeDataArray} />;
        </View>
        <DateTimePickerComponent
          headerText={this.arriveHeaderText}
          chosenDate={this.state.chosenDate}
          maximumDate={this.state.maximumDate}
          minimumDate={this.state.minimumDate}
          minuteInterval={this.state.minuteInterval}
          onDateChange={this.onDateChange}
          onPressContinueButton={this.onConfirmArrivalTime}
        />
      </View>
    );
  }
}

ConfirmArrivalTime.propTypes = {
  navigation: PropTypes.object,
  outages: PropTypes.shape({
    selectedUpcomingOutage: PropTypes.shape({
      ETA: PropTypes.instanceOf(Date),
    }),
  }),
  setTime: PropTypes.func.isRequired,
};

ConfirmArrivalTime.defaultProps = {
  navigation: {},
  outages: {},
};


export default ConfirmArrivalTime;
