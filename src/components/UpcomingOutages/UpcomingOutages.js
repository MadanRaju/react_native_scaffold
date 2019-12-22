import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, FlatList } from 'react-native';

import styles from './UpcomingOutagesStyle';
import commonStyle from '../../CommonStyle';
import {
  // ScrollBarComponent,
  // ListComponent,
  SCardItemComponent,
  DropdownComponent,
  ListItemComponent,
} from '../shared';

class UpcomingOutages extends Component {
  constructor(props) {
    super(props);

    this.emergentHeader = <Text style={[styles.listHeaderTextStyle]}>{'EMERGENT OUTAGES'}</Text>;
    this.plannedHeader = <Text style={[styles.listHeaderTextStyle]}>{'PLANNED OUTAGES'}</Text>;
    this.emptyText = <Text style={[styles.listHeaderTextStyle, styles.noneTextColor]}>{'None'}</Text>;

    this.buildOutages = this.buildOutages.bind(this);
    this.navigateToOutageInfo = this.navigateToOutageInfo.bind(this);
    this.changeDistrict = this.changeDistrict.bind(this);
  }

  navigateToOutageInfo(outage) {
    const { setSelectedUpcomingOutage, navigation } = this.props;
    setSelectedUpcomingOutage(outage);
    // TBD: Instead of outage we might pass outage Id or some other identifier.
    navigation.navigate('OutageInfo', { otherParam: outage.Circuit });
  }

  buildOutages() {
    const { upcomingOutages } = this.props.outages;
    const plannedOutage = [];
    const emergentOutage = [];

    // Load headers for planned and emergent outage
    plannedOutage.push(<SCardItemComponent
        addStyle={[styles.headerLineStyle, styles.plannedOutageHeaderBColor]}
        content={this.plannedHeader}
        key={this.plannedHeader}
      />);

    emergentOutage.push(<SCardItemComponent
        addStyle={[styles.headerLineStyle, styles.emergentOutageHeaderBColor]}
        content={this.emergentHeader}
        key={this.emergentHeader}
      />);

    // Make 2 array for planned and emergent outage
    for (let i = 0; i < upcomingOutages.length; i += 1) {
      if (upcomingOutages[i].IncidentType === 'Planned Outage') {
        const item = {
          text: `${upcomingOutages[i].Circuit} - OAN # ${upcomingOutages[i]['OAN number']}`,
          onPress: () => this.navigateToOutageInfo(upcomingOutages[i]),
          addViewStyle: styles.plannedOutageDetailBColor,
        };
        plannedOutage.push(<ListItemComponent item={item} key={item + i} />);
      } else {
        const SeqNumber = upcomingOutages[i]['Sequence Number'] || 'TBD';
        const item = {
          text: `${upcomingOutages[i].Circuit} - Seq. # ${SeqNumber}`,
          onPress: () => this.navigateToOutageInfo(upcomingOutages[i]),
          addViewStyle: styles.emergentOutageDetailBColor,
        };
        emergentOutage.push(<ListItemComponent item={item} key={item + i} />);
      }
    }

    // If no outage show none
    if (plannedOutage.length <= 1) {
      plannedOutage.push(<SCardItemComponent
        content={this.emptyText}
        addStyle={styles.noneBColor}
        key={this.emptyText + 1}
      />);
    }
    if (emergentOutage.length <= 1) {
      emergentOutage.push(<SCardItemComponent
        content={this.emptyText}
        addStyle={styles.noneBColor}
        key={this.emptyText + 2}
      />);
    }

    return (
      <FlatList
        style={styles.scrollViewStyle}
        data={emergentOutage.concat(plannedOutage)}
        renderItem={({ item }) => item}
        keyExtractor={(item, index) => item + index}
      />
    );
  }

  changeDistrict(district) {
    this.props.setNewSelectedDistrict(district);
  }

  render() {
    return (
      <View style={[commonStyle.viewStyle, styles.screenViewStyle]}>
        <View style={[commonStyle.textViewStyle, styles.addTextViewStyle]}>
          <Text style={[commonStyle.textStyle, styles.addTextStyle]}>Select your assigned outage from the list below</Text>
        </View>
        <View style={styles.dropdownViewStyle}>
          <DropdownComponent
            onChange={this.changeDistrict}
            changeSelected={true}
            arrow={true}
            options={this.props.districts.districtList}
            defaultValue={this.props.districts.selectedDistrict}
          />
        </View>
        {this.buildOutages()}
      </View>
    );
  }
}

UpcomingOutages.propTypes = {
  outages: PropTypes.object,
  navigation: PropTypes.object,
  setSelectedUpcomingOutage: PropTypes.func.isRequired,
  setNewSelectedDistrict: PropTypes.func.isRequired,
  districts: PropTypes.shape({
    districtList: PropTypes.arrayOf(PropTypes.string),
    selectedDistrict: PropTypes.string,
  }),
};

UpcomingOutages.defaultProps = {
  outages: {},
  navigation: {},
  districts: {
    districtList: [],
    selectedDistrict: '',
  },
};

export default UpcomingOutages;
