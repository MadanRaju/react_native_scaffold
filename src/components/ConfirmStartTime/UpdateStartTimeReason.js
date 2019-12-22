import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextInput } from 'react-native';

import styles from './UpdateStartTimeReasonStyle';
import commonStyle from '../../CommonStyle';
import { ContinueButtonComponent } from '../shared';

class UpdateStartTimeReason extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updateReason: 'Your notes here',
    };

    this.onConfirmOrUpdateStartTime = this.onConfirmOrUpdateStartTime.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
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

  onConfirmOrUpdateStartTime() {
    this.props.addUpdatedStartTime({
      newStartTime: this.props.outages.selectedUpcomingOutage.currentStartTime,
      reason: this.state.updateReason,
    });
    this.props.navigation.navigate('ConfirmERT');
  }

  onChangeText(updateReason) {
    this.setState({
      updateReason,
    });
  }

  render() {
    return (
      <View style={commonStyle.viewStyle}>
        <View style={styles.viewStyle}>
          <View style={[commonStyle.textViewStyle, styles.addHeaderTextContainerStyle]}>
            <Text style={[commonStyle.textStyle, styles.addHeaderTextStyle]}>Outage Start Time Notes</Text>
          </View>
          <View style={styles.textInputViewStyle}>
            <TextInput
            style={styles.textInputStyle}
            onChangeText={this.onChangeText}
            multiline={true}
            numberOfLines={4}
            blurOnSubmit={true}
            returnKeyType={'done'}
            placeholder={this.state.text}
            />
          </View>
        </View>
        <View>
          <ContinueButtonComponent onPressContinueButton={this.onConfirmOrUpdateStartTime} />
        </View>
      </View>
    );
  }
}

UpdateStartTimeReason.propTypes = {
  navigation: PropTypes.object,
  addUpdatedStartTime: PropTypes.func.isRequired,
  outages: PropTypes.shape({
    selectedUpcomingOutage: PropTypes.shape({
      currentStartTime: PropTypes.instanceOf(Date).isRequired,
    }),
  }),
};

UpdateStartTimeReason.defaultProps = {
  outages: {},
  navigation: {},
};

export default UpdateStartTimeReason;
