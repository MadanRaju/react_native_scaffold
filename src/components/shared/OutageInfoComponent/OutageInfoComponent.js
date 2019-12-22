import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import format from 'date-fns/format';

import styles from './OutageInfoComponentStyle';
// import commonStyle from '../../../CommonStyle';
import {
  SCardItemComponent,
  CardListComponent,
} from '../../shared';

class OutageInfoComponent extends Component {
  constructor(props) {
    super(props);

    this.buildHeaderCardContent = this.buildHeaderCardContent.bind(this);
    this.buildHorizontalCard = this.buildHorizontalCard.bind(this);
    this.buildVerticalCardList = this.buildVerticalCardList.bind(this);
  }

  buildHeaderCardContent(text = 'Planned Outage', startDate, status = '') {
    const outageDate = format(
      new Date(startDate),
      'MMMM D',
    );
    const headerText = text === 'Planned Outage' ? 'Planned Outage' : 'Emergent Outage';

    return (
      <View style={styles.viewHeaderStyle}>
        <Text style={styles.textHeaderStyle}>{headerText}</Text>
        <Text style={styles.textHeaderStyle}>{status} {outageDate}</Text>
      </View>
    );
  }

  buildHorizontalCard(key, value) {
    const data = [
      {
        headerContent: <Text style={styles.textCardHeaderStyle}>{key}</Text>,
        detailContent: <Text style={styles.textCardDetailStyle}>{value}</Text>,
      },
    ];
    return (
      <CardListComponent cardListArray={data} addCardListStyle={styles.addCardListStyle} />
    );
  }

  buildVerticalCardList(data) {
    const dataArray = data.map((row) => {
      const header = Object.keys(row)[0];
      const detail = Object.values(row)[0];

      return ({
        headerContent: <Text style={styles.textCardHeaderStyle}>{header}</Text>,
        detailContent: <Text style={styles.textCardDetailStyle}>{detail}</Text>,
        addStyle: styles.viewSingleCardStyle,
      });
    });
    return (
      <CardListComponent cardListArray={dataArray} addCardListStyle={styles.viewVerticalColumnStyle} />
    );
  }

  render() {
    const {
      District,
      IncidentType,
      Circuit,
      OutageStartDate,
      // OutageEndDate,
      ERT,
      Cause,
      Problem,
      Location,
      Structure,
      // RepairOrder,
    } = this.props.outage;

    const headerColor = IncidentType === 'Planned Outage' ? styles.plannedOutageBColor : styles.emergentOutageBColor;

    const leftData = [
      { Problem },
      { 'Outage Start Time': OutageStartDate },
      { District },
      { 'OAN #': this.props.outage['OAN number'] },
      { 'Seq. #': 'TBD' },
    ];

    const rightData = [
      { Cause },
      { ERT },
      { 'Circuit Name': Circuit },
      { 'Incident #': this.props.outage['Incident Number'] },
      { 'Structure #': Structure },
    ];

    return (
      <View>
        <SCardItemComponent content={this.buildHeaderCardContent(IncidentType, OutageStartDate, this.props.status)} addStyle={headerColor} />
        <View style={styles.viewContainerStyle}>
          <Text style={styles.textTopHeaderStyle}>Outage Information</Text>
          {this.buildHorizontalCard('Location', Location)}
          <View style={styles.viewVerticalCardContainerStyle}>
            {this.buildVerticalCardList(leftData)}
            {this.buildVerticalCardList(rightData)}
          </View>
          {this.buildHorizontalCard('Customers Affected', this.props.outage['Customers Affected'])}
        </View>
      </View>
    );
  }
}

OutageInfoComponent.propTypes = {
  outage: PropTypes.object,
  status: PropTypes.string,
};

OutageInfoComponent.defaultProps = {
  outage: {},
  status: '',
};

export { OutageInfoComponent };
