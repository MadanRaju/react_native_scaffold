import React, { Component } from 'react';
import { View, Text, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import { CardListComponent } from '../../shared';

// import commonStyle from '../../../CommonStyle';
import styles from './TimeRemainingComponentStyle';

class TimeRemainingComponent extends Component {
  constructor(props) {
    super(props);

    this.buildTimeRemainingComponent = this.buildTimeRemainingComponent.bind(this);
  }

  buildTimeRemainingComponent() {
    let data;
    if (Array.isArray(this.props.data)) {
      data = this.props.data.map((dataRow) => {
        return ({
          headerContent: <Text style={[styles.textCardHeaderStyle, dataRow.headerStyle]}>
          {dataRow.headerText}
          </Text>,
          detailContent: <Text style={[styles.textCardDetailStyle, dataRow.detailStyle]}>
          {dataRow.detailText}
          </Text>,
          addStyle: [styles.addTimeRemainingStyle, dataRow.addStyle],
        });
      });
    } else {
      data = {
        headerContent: <Text style={[styles.textCardHeaderStyle, this.props.data.headerStyle]}>
          {this.props.data.headerText}
        </Text>,
        detailContent: <Text style={[styles.textCardDetailStyle, this.props.data.detailStyle]}>
          {this.props.data.detailText}
        </Text>,
        addStyle: [styles.addTimeRemainingStyle, this.props.data.addStyle],
      };
    }

    return (
      <CardListComponent cardListArray={data} addCardListStyle={styles.addCardListStyle} />
    );
  }

  render() {
    return (
      <View style={this.props.addStyle}>
        {this.buildTimeRemainingComponent()}
      </View>
    );
  }
}

TimeRemainingComponent.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  addStyle: PropTypes.oneOfType([
    PropTypes.object,
    ViewPropTypes.style,
  ]),
};

TimeRemainingComponent.defaultProps = {
  data: [],
  addStyle: {},
};

export { TimeRemainingComponent };
