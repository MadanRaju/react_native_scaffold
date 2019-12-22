import React, { Component } from 'react';
import { addDays, format, isToday } from 'date-fns';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import { DateTimePickerComponent, TimeRemainingComponent } from '../shared';

import commonStyle from '../../CommonStyle';
import styles from './ConfirmETAStyle';

class ConfirmETA extends Component {
  constructor(props) {
    super(props);

    const todaysDate = new Date();
    const ETA = props.outages.selectedUpcomingOutage.ETA || todaysDate;
    const tomorrowsDate = addDays(todaysDate, 1);

    this.state = {
      chosenDate: ETA,
      maximumDate: tomorrowsDate,
      minimumDate: todaysDate,
      minuteInterval: 15,
    };

    this.confirmETADataArray = [
      {
        headerText: 'Current ETA',
        detailText: isToday(this.state.chosenDate) ?
          `Today ${format(this.state.chosenDate, 'h:mm A')}`
          :
          format(this.state.chosenDate, 'ddd MMM D  h:mm A'),
      },
    ];
    this.arriveHeaderText = 'When will you arrive?';
    this.onDateChange = this.onDateChange.bind(this);
    this.onConfirmETA = this.onConfirmETA.bind(this);
  }

  onDateChange(newDate) {
    this.setState({
      chosenDate: newDate,
    });
  }

  onConfirmETA() {
    this.props.setTime('SET_ETA', this.state.chosenDate);
    this.props.navigation.navigate('ConfirmArrivalTime');
  }

  // TBD AndroidDatePicker and Google Maps to be included in the page
  render() {
    return (
      <View style={[commonStyle.viewStyle, styles.screenViewStyle]}>
        <View style={styles.addTimeRemainingComponentStyle}>
          <TimeRemainingComponent data={this.confirmETADataArray} />;
        </View>
        <DateTimePickerComponent
          headerText={this.arriveHeaderText}
          chosenDate={this.state.chosenDate}
          maximumDate={this.state.maximumDate}
          minimumDate={this.state.minimumDate}
          minuteInterval={this.state.minuteInterval}
          onDateChange={this.onDateChange}
          onPressContinueButton={this.onConfirmETA}
        />
      </View>
    );
  }
}

ConfirmETA.propTypes = {
  navigation: PropTypes.object,
  outages: PropTypes.shape({
    selectedUpcomingOutage: PropTypes.shape({
      ETA: PropTypes.instanceOf(Date),
    }),
  }),
  setTime: PropTypes.func.isRequired,
};

ConfirmETA.defaultProps = {
  navigation: {},
  outages: {},
};

export default ConfirmETA;
