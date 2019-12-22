import React, { Component } from 'react';
import { View, Text, DatePickerIOS } from 'react-native';
import PropTypes from 'prop-types';

import {
  isPast,
  addMinutes,
  getMinutes,
} from 'date-fns';
import { SCardItemComponent, ContinueButtonComponent } from '../../shared';

import commonStyle from '../../../CommonStyle';
import styles from './DateTimePickerComponentStyle';

class DateTimePickerComponent extends Component {
  constructor(props) {
    super(props);

    this.buildHeaderLine = this.buildHeaderLine.bind(this);
    this.pushForwardDate = this.pushForwardDate.bind(this);
  }

  buildHeaderLine(content, style) {
    return (
      <Text style={[commonStyle.textStyle, style]}>{content}</Text>
    );
  }

  pushForwardDate(date) {
    return addMinutes(date, (15 - Math.floor(getMinutes(date) % 15)));
  }

  // TBD AndroidDatePicker and Google Maps to be included in the page
  render() {
    const {
      headerText,
      chosenDate,
      maximumDate,
      minimumDate,
      minuteInterval,
      onDateChange,
      onPressContinueButton,
    } = this.props;

    const currentDate = isPast(chosenDate) ? this.pushForwardDate(chosenDate) : chosenDate;

    return (
      <View style={[commonStyle.viewStyle, styles.addContainerStyle]}>
        <View style={styles.bottomContainerStyle}>
          <SCardItemComponent content={this.buildHeaderLine(headerText, styles.addWhiteTextStyle)} addStyle={styles.addArriveHeaderStyle} />
          <View style={styles.datePickerContainerStyle}>
            <DatePickerIOS
              date={currentDate}
              onDateChange={onDateChange}
              maximumDate={maximumDate}
              minimumDate={minimumDate}
              minuteInterval={minuteInterval}
            />
          </View>
          <ContinueButtonComponent onPressContinueButton={onPressContinueButton} />
        </View>
      </View>
    );
  }
}

DateTimePickerComponent.propTypes = {
  headerText: PropTypes.string,
  buttonText: PropTypes.object,
  chosenDate: PropTypes.instanceOf(Date).isRequired,
  maximumDate: PropTypes.instanceOf(Date).isRequired,
  minimumDate: PropTypes.instanceOf(Date).isRequired,
  minuteInterval: PropTypes.number,
  onDateChange: PropTypes.func,
  onPressContinueButton: PropTypes.func,
};

DateTimePickerComponent.defaultProps = {
  headerText: '',
  buttonText: {},
  minuteInterval: 1,
  onDateChange: null,
  onPressContinueButton: null,
};

export { DateTimePickerComponent };
