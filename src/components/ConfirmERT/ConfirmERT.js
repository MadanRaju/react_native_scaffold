import React, { Component } from 'react';
import {
  addHours,
  differenceInMinutes,
  isBefore,
  isToday,
  format,
  isValid,
} from 'date-fns';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';

import { DateTimePickerComponent, TimeRemainingComponent } from '../shared';

import commonStyle from '../../CommonStyle';
import styles from './ConfirmERTStyle';

class ConfirmERT extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chosenDate: new Date(props.outages.selectedUpcomingOutage.ERT),
      maximumDate: addHours(new Date(), 24),
      minimumDate: new Date(props.outages.selectedUpcomingOutage.OutageStartTime),
      minuteInterval: 15,
      delayTime: 15,

    };

    this.arriveHeaderText = 'Confirm or Update ERT';

    this.onDateChange = this.onDateChange.bind(this);
    this.calculateRemainingTime = this.calculateRemainingTime.bind(this);
    this.onPressContinueButton = this.onPressContinueButton.bind(this);
  }

  componentWillMount() {
    const { ERT } = this.props.outages.selectedUpcomingOutage;
    if (isBefore(this.ERT, this.state.minimumDate)) {
      throw new Error('ERT is before current date.');
    }
    this.props.setInitialERT(ERT);
    this.calculateRemainingTime();
  }

  calculateRemainingTime() {
    const { ERT } = this.props.outages.selectedUpcomingOutage;
    // if ERT is further than 2 days, display date as well
    let displayERT;

    const totalRemainingTimeInMinutes = differenceInMinutes(ERT, new Date());
    const remainingHours = Math.abs(Math.floor(totalRemainingTimeInMinutes / 60));
    const remainingMinutes = `0${Math.abs(totalRemainingTimeInMinutes % 60)}`.slice(-2);
    let timeRemaining = `${remainingHours}:${remainingMinutes}`;

    if (!isValid(new Date(ERT))) {
      // console.warn('Missing ERT');
      displayERT = 'Missing ERT - Need Input.';
      timeRemaining = '00:00';
    } else {
      displayERT = isToday(ERT) ?
        `Today ${format(ERT, 'h:mm A')}`
        :
        format(ERT, 'ddd MMM D  h:mm A');
    }

    const timeRemainingDataArray = [
      {
        headerText: 'Initial ERT',
        detailText: displayERT,
      },
      {
        headerText: 'Time Remaining',
        detailText: timeRemaining,
      },
    ];
    this.setState({ timeRemainingDataArray });
  }

  onDateChange(newDate) {
    this.setState({
      chosenDate: newDate,
    });
  }

  onPressContinueButton() {
    if ((differenceInMinutes(this.state.chosenDate, new Date()) < 0)) {
      // console.warn('ERT Cannot be set in the past');
    } else if (differenceInMinutes(this.state.chosenDate, this.props.outages.selectedUpcomingOutage.ERT) !== 0) {
      this.props.setTime('SET_ERT', format(this.state.chosenDate, 'M/DD/YYYY hh:mm:00 A'));
      this.props.navigation.navigate('UpdateERTReason');
    } else if (differenceInMinutes(this.state.chosenDate, this.props.outages.selectedUpcomingOutage.ERT) === 0) {
      this.props.setInitialERT(format(this.state.chosenDate, 'M/DD/YYYY hh:mm:00 A'));
      this.props.navigation.dispatch(NavigationActions.reset({
        index: 0,
        key: null,
        actions: [NavigationActions.navigate({ routeName: 'TimeRemaining' })],
      }));
    } else {
      console.warn(`Problem setting ERT. Selected Date:${this.state.chosenDate}, ERT:${this.props.outages.selectedUpcomingOutage.ERT}`);
    }
  }

  render() {
    return (
      <View style={commonStyle.viewStyle}>
        <View style={styles.addTimeRemainingComponentStyle}>
          <TimeRemainingComponent data={this.state.timeRemainingDataArray} />
        </View>
        <DateTimePickerComponent
          headerText={this.arriveHeaderText}
          chosenDate={this.state.chosenDate}
          maximumDate={this.state.maximumDate}
          minimumDate={this.state.minimumDate}
          minuteInterval={this.state.minuteInterval}
          onDateChange={this.onDateChange}
          onPressContinueButton={this.onPressContinueButton}
        />
      </View>
    );
  }
}

ConfirmERT.propTypes = {
  outages: PropTypes.object,
  navigation: PropTypes.object,
  setInitialERT: PropTypes.func.isRequired,
  setTime: PropTypes.func.isRequired,
};

ConfirmERT.defaultProps = {
  outages: {},
  navigation: {},
};

export default ConfirmERT;
