import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import {
  addDays,
  format,
  differenceInMinutes,
  isToday,
} from 'date-fns';
import {
  DateTimePickerComponent,
  TimeRemainingComponent,
  ListItemComponent,
} from '../shared';

import commonStyle from '../../CommonStyle';
import styles from './ConfirmStartTimeStyle';

class ConfirmStartTime extends Component {
  constructor(props) {
    super(props);

    const { arrivalTime } = this.props.outages.selectedUpcomingOutage;

    this.state = {
      chosenDate: new Date(arrivalTime),
      maximumDate: addDays(arrivalTime, 2),
      minimumDate: new Date(arrivalTime),
      minuteInterval: 15,
      delayTime: 15,
      displayNotesButton: false,
    };

    this.arriveHeaderText = 'Confirm or Update Outage Start Time';
    this.onDateChange = this.onDateChange.bind(this);
    this.buildStartTimeContainer = this.buildStartTimeContainer.bind(this);
    this.onPressContinueButton = this.onPressContinueButton.bind(this);
    this.onPressNotesButton = this.onPressNotesButton.bind(this);
  }

  static navigationOptions() {
    return {
      headerTitleStyle: {
        fontSize: 14,
        fontWeight: 'bold',
        alignSelf: 'center',
      },
    };
  }

  onDateChange(newDate) {
    this.setState({
      chosenDate: newDate,
      displayNotesButton: true,
    });
  }

  buildStartTimeContainer() {
    const startTime = isToday(this.state.chosenDate) ?
      `Today ${format(this.state.chosenDate, 'h:mm A')}`
      :
      format(this.state.chosenDate, 'ddd MMM D  h:mm A');
    return <TimeRemainingComponent data={{
      headerText: 'Outage Start Time',
      detailText: startTime,
    }} />;
  }

  onPressContinueButton() {
    const { chosenDate } = this.state;
    // const { OutageStartDate } = this.props.outages.selectedUpcomingOutage;
    const diffMin = (differenceInMinutes(chosenDate, new Date()));

    if (diffMin > 0) {
      this.props.setTime('SET_CURRENT_START_TIME', chosenDate);
      this.props.navigation.navigate('ConfirmERT');
      this.setState({
        displayNotesButton: false,
      });
    }
  }

  onPressNotesButton() {
    this.props.setTime('SET_CURRENT_START_TIME', this.state.chosenDate);
    this.props.navigation.navigate('UpdateStartTimeReason');
  }

  render() {
    return (
      <View style={commonStyle.viewStyle}>
        <View style={styles.addTimeRemainingComponentStyle}>
          {this.buildStartTimeContainer()}
          { this.state.displayNotesButton &&
            <ListItemComponent
              item={{
                onPress: this.onPressNotesButton,
                text: 'Add Notes',
                textStyle: styles.addNotesTextStyle,
                addViewStyle: styles.notesButtonStyle,
              }}
            />
          }
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

ConfirmStartTime.propTypes = {
  outages: PropTypes.object,
  navigation: PropTypes.object,
  setTime: PropTypes.func.isRequired,
};

ConfirmStartTime.defaultProps = {
  outages: {},
  navigation: {},
};

export default ConfirmStartTime;
