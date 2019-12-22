import React, { Component } from 'react';
import {
  differenceInMinutes,
  // differenceInDays,
  isToday,
  format,
  isValid,
} from 'date-fns';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';

import { DateTimePickerComponent, TimeRemainingComponent } from '../shared';

import commonStyle from '../../CommonStyle';
import styles from './ConfirmALUStyle';

class ConfirmALU extends Component {
  constructor(props) {
    super(props);

    const todaysDate = new Date();

    this.state = {
      chosenDate: todaysDate,
      maximumDate: todaysDate,
      minimumDate: new Date(props.outages.selectedUpcomingOutage.OutageStartDate),
      minuteInterval: 15,
      delayTime: 15,
    };

    this.arriveHeaderText = 'Confirm ALU';

    this.onDateChange = this.onDateChange.bind(this);
    this.calculateTimeRemaining = this.calculateTimeRemaining.bind(this);
    this.onConfirmALU = this.onConfirmALU.bind(this);
  }

  componentWillMount() {
    this.calculateTimeRemaining();
  }

  onDateChange(newDate) {
    this.setState({
      chosenDate: newDate,
    });
  }

  calculateTimeRemaining() {
    const { ERT } = this.props.outages.selectedUpcomingOutage;
    // let displayERT = format(ERT, 'ddd MMM D  h:mm A');
    let displayERT = isToday(ERT) ?
      `Today ${format(ERT, 'h:mm A')}`
      :
      format(ERT, 'ddd MMM D  h:mm A');
    const totalRemainingTimeInMinutes = differenceInMinutes(ERT, new Date());
    const remainingHours = Math.abs(Math.floor(totalRemainingTimeInMinutes / 60));
    const remainingMinutes = `0${Math.abs(totalRemainingTimeInMinutes % 60)}`.slice(-2);
    let timeRemaining = `${remainingHours}:${remainingMinutes}`;

    if (!isValid(new Date(ERT))) {
      // console.warn('Missing ERT');
      displayERT = 'Error: Missing ERT';
      timeRemaining = '00:00';
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

  onConfirmALU() {
    this.props.confirmALU(format(new Date(), 'ddd MMM D  h:mm A'));
    this.props.navigation.dispatch(NavigationActions.reset({
      index: 0,
      key: null,
      actions: [NavigationActions.navigate({ routeName: 'OutageComplete' })],
    }));
  }

  render() {
    return (
      <View style={commonStyle.viewStyle}>
        <View style={styles.addTimeRemainingComponentStyle}>
          <TimeRemainingComponent data={this.state.timeRemainingDataArray} />;
        </View>
        <DateTimePickerComponent
          headerText={this.arriveHeaderText}
          chosenDate={this.state.chosenDate}
          maximumDate={this.state.maximumDate}
          minimumDate={this.state.minimumDate}
          minuteInterval={this.state.minuteInterval}
          onDateChange={this.onDateChange}
          onPressContinueButton={this.onConfirmALU}
        />
      </View>
    );
  }
}

ConfirmALU.propTypes = {
  outages: PropTypes.object,
  navigation: PropTypes.object,
  confirmALU: PropTypes.func.isRequired,
};

ConfirmALU.defaultProps = {
  outages: {},
  navigation: {},
};

export default ConfirmALU;
