import React, { Component } from 'react';
import { View, Text /* TabBarIOS */ } from 'react-native';
import { Calendar } from 'react-native-calendars';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

import { TabBarComponent, DropdownComponent } from '../shared';
import styles from './PastOutagesStyle';

import themes from './PastOutagesCalendarTheme';
import commonStyle from '../../CommonStyle';

import { NestedListItemComponent } from '../shared/NestedListItemComponent/NestedListItemComponent';

class PastOutages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'Search by Date',
      selectedDate: format(new Date(), 'YYYY-MM-DD'),
      markedOutageDates: {},
      selectedCircuit: '',
    };
    this.todaysDate = format(new Date(), 'YYYY-MM-DD');
    this.tabOptions = ['Search by Date', 'Search by Circuit Name'];
    this.changeSearchByOption = this.changeSearchByOption.bind(this);
    this.changeCircuit = this.changeCircuit.bind(this);
    this.buildOutages = this.buildOutages.bind(this);
    this.navigateToOutageInfo = this.navigateToOutageInfo.bind(this);
    this.selectDay = this.selectDay.bind(this);
    this.generatePastOutagesMapping = this.generatePastOutagesMapping.bind(this);
  }

  componentDidMount() {
    if (!this.props.outages.pastOutages.length) {
      this.props.fetchPastOutages(this.props.districts.homeDistrict, new Date());
    }
    this.generatePastOutagesMapping();
  }

  changeSearchByOption(selectedOption) {
    this.setState({
      activeTab: selectedOption,
    });
  }

  changeCircuit(circuit) {
    this.setState({
      selectedCircuit: circuit,
    });
  }

  buildOutages() {
    const { outages } = this.props;
    const districtOutageByDay = outages.pastOutages
      .filter((outage) => {
        // TODO: NEED TO OPTIMIZE THIS - USE MAPPING TO CUT TIME DOWN TO O(1)
        if (this.state.activeTab === 'Search by Date') {
          return format(outage.OutageStartDate, 'YYYY-MM-DD') === this.state.selectedDate;
        }
        return outage.Circuit.toLowerCase() === this.state.selectedCircuit.toLowerCase();
      })
      .map((outage) => {
        const OANNumber = outage['OAN number'];
        const outageDate = format(outage.OutageEndDate, 'MMM D, YYYY');
        const { selectedCircuit } = this.state;
        return {
          data: {
            Circuit: selectedCircuit,
            Date: outageDate,
            'OAN #': OANNumber,
          },
          onPress: () => this.navigateToOutageInfo(outage),
        };
      });
    if (districtOutageByDay.length === 0) {
      return null;
    }
    return (
      <NestedListItemComponent
        outageList={districtOutageByDay}
      />
    );
  }

  navigateToOutageInfo(outage) {
    const { setSelectedPastOutage, navigation } = this.props;
    setSelectedPastOutage(outage);
    navigation.navigate('ActivityLog', {
      outageType: 'past',
      otherParam: outage.Circuit,
    });
  }

  selectDay(date) {
    this.setState({
      selectedDate: date.dateString,
    });
  }

  generatePastOutagesMapping() {
    const markedOutages = {};
    this.props.outages.pastOutages.forEach((outage) => {
      // TODO: NEED TO ADD LOGIC TO ACCOUNT FOR MULTI-DAY OUTAGES
      const formattedStartDate = format(outage.OutageStartDate, 'YYYY-MM-DD');
      markedOutages[formattedStartDate] = { customStyles: themes.hasOutages };
    });

    markedOutages[this.todaysDate] = { customStyles: themes.todaysDate };

    this.setState({
      markedOutageDates: markedOutages,
      selectedCircuit: this.props.outages.circuitList[0],
    });
  }

  render() {
    const cardListStyle = this.state.activeTab === 'Search by Date' ? styles.calendarCardListStyle : styles.cardListStyle;

    return (
      <View style={[commonStyle.viewStyle, styles.pastOutagesView]}>
        <View style={styles.barView}>
          <TabBarComponent
            tabBarOptionsArray={this.tabOptions}
            tabStyle={styles}
            onClickTab={this.changeSearchByOption}
            fullWidth={true}
            activeTab={this.state.activeTab}
          />
        </View>
        <View style={styles.calendarDropdownView}>
          {this.state.activeTab === 'Search by Date' ?
            <View>
              <Calendar
                style={styles.calendarStyle}
                theme={themes.calendar}
                markingType={'custom'}
                markedDates={{
                  ...this.state.markedOutageDates,
                  [this.state.selectedDate]: { selected: true, customStyles: themes.selectedAddStyle },
                }}
                onDayPress={this.selectDay}
              />
              <View style={styles.calendarInfoRow}>
                <View style={styles.outageCompleteSquare}>
                </View>
                <Text>{'Outages You Have Completed'}</Text>
              </View>
            </View>
            :
            <View style={styles.dropdownViewStyle}>
              <DropdownComponent
                onChange={this.changeCircuit}
                addDropdownListStyle={styles.dropdownListStyle}
                changeSelected={true}
                arrow={true}
                options={this.props.outages.circuitList}
                defaultValue={this.props.outages.circuitList[0]}
              />
            </View>
          }
        </View>
        <View style={cardListStyle}>
          {this.buildOutages()}
        </View>
      </View>
    );
  }
}

PastOutages.propTypes = {
  outages: PropTypes.object,
  navigation: PropTypes.object,
  districts: PropTypes.shape({
    districtList: PropTypes.arrayOf(PropTypes.string),
    selectedDistrict: PropTypes.string,
    homeDistrict: PropTypes.string,
  }),
  setNewSelectedDistrict: PropTypes.func.isRequired,
  fetchPastOutages: PropTypes.func.isRequired,
  setSelectedPastOutage: PropTypes.func.isRequired,
  fetchActivityLog: PropTypes.func.isRequired,
};

PastOutages.defaultProps = {
  outages: {},
  navigation: {},
  districts: {
    districtList: [],
    selectedDistrict: '',
  },
};

export default PastOutages;
