import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import styles from './UpdateERTReasonStyle';
import commonStyle from '../../CommonStyle';
import { ScrollBarComponent, ContinueButtonComponent, ListItemComponent } from '../shared';

class UpdateERTReason extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedReason: '',
      selectedMap: {
        selected: (new Map()),
      },
    };

    this.reasonList = [
      'Access Issues',
      'Weather',
      'Special Equipment Needed',
      'Additional Personnel Needed',
      'Extensive Damage',
      'Patrol Required',
      'Other',
    ];

    this.buildReasonList = this.buildReasonList.bind(this);
    this.addERTUpdateReason = this.addERTUpdateReason.bind(this);
    this.selectERTUpdateReason = this.selectERTUpdateReason.bind(this);
  }

  selectERTUpdateReason(reason) {
    this.setState({
      selectedReason: reason,
    });
  }

  addERTUpdateReason() {
    if (this.state.selectedReason === 'Other') {
      return this.props.navigation.navigate('UpdateERTReasonOther');
    }
    const updatedReason = {
      newERT: this.props.outages.selectedUpcomingOutage.ERT,
      reason: this.state.selectedReason,
      explanation: '',
    };
    this.props.updateERTWithReason(updatedReason);
    return this.props.navigation.navigate('TimeRemaining');
  }

  buildReasonList() {
    const selectedStyle = {
      backgroundColor: 'rgba(65,115,0,0.1)',
    };
    const data = this.reasonList.map((reason) => {
      return ({
        text: reason,
        onPress: () => this.selectERTUpdateReason(reason),
        addViewStyle: reason === this.state.selectedReason ? selectedStyle : null,
      });
    });
    return <ScrollBarComponent data={data} />;
  }

  renderItem({ item, index }) {
    return <ListItemComponent item={item} key={index} />;
  }


  render() {
    return (
      <View style={commonStyle.viewStyle}>
        <View style={[commonStyle.textViewStyle, styles.addHeaderTextContainerStyle]}>
          <Text style={[commonStyle.textStyle, styles.addHeaderTextStyle]}>Reason for updating the ERT</Text>
        </View>
        {this.buildReasonList()}
        <View>
          <ContinueButtonComponent onPressContinueButton={() => this.addERTUpdateReason()} />
        </View>
      </View>
    );
  }
}

UpdateERTReason.propTypes = {
  outages: PropTypes.object,
  navigation: PropTypes.object,
  updateERTWithReason: PropTypes.func.isRequired,
};

UpdateERTReason.defaultProps = {
  outages: {},
  navigation: {},
};

export default UpdateERTReason;
