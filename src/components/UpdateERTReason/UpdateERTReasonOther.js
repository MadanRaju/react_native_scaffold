import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextInput } from 'react-native';

import styles from './UpdateERTReasonOtherStyle';
import commonStyle from '../../CommonStyle';
import { ContinueButtonComponent } from '../shared';

class UpdateERTReasonOther extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otherReason: 'Your notes here',
    };

    this.addERTReasonOther = this.addERTReasonOther.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
  }

  addERTReasonOther() {
    const updatedReason = {
      newERT: this.props.outages.selectedUpcomingOutage.ERT,
      reason: 'Other',
      explanation: this.state.otherReason,
    };
    this.props.updateERTWithReason(updatedReason);
    this.props.navigation.navigate('TimeRemaining');
  }

  onChangeText(otherReason) {
    this.setState({
      otherReason,
    });
  }

  render() {
    return (
      <View style={commonStyle.viewStyle}>
        <View style={styles.viewStyle}>
          <View style={[commonStyle.textViewStyle, styles.addHeaderTextContainerStyle]}>
            <Text style={[commonStyle.textStyle, styles.addHeaderTextStyle]}>Reason: Other</Text>
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
          <ContinueButtonComponent onPressContinueButton={this.addERTReasonOther} />
        </View>
      </View>
    );
  }
}

UpdateERTReasonOther.propTypes = {
  outages: PropTypes.object,
  navigation: PropTypes.object,
  updateERTWithReason: PropTypes.func.isRequired,
};

UpdateERTReasonOther.defaultProps = {
  outages: {},
  navigation: {},
};

export default UpdateERTReasonOther;
