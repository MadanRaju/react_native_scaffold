import React, { Component } from 'react';
import { FlatList, View, Text, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { NavigationActions } from 'react-navigation';

import commonStyle from '../../CommonStyle';
import styles from './ActivityLogStyle';

import { OutageInfoComponent, ContinueButtonComponent } from '../shared';

class ActivityLog extends Component {
  constructor(props) {
    super(props);

    this.goBackHome = this.goBackHome.bind(this);
    this.renderRow = this.renderRow.bind(this);
  }

  static navigationOptions({ navigation }) {
    const { params } = navigation.state;
    return {
      title: params ? params.otherParam : 'Outage Info',
    };
  }

  renderRow(rowData, incidentType, row, backgroundColor, activityLength) {
    const topLineStyle = row === 0 ? [styles.topLine, styles.hiddenLine] : styles.topLine;
    const bottomLineStyle = row === activityLength - 1 ? [styles.bottomLine, styles.hiddenLine] : styles.bottomLine;
    let displayFirstLine = '';

    if (rowData.action === 'Accepted Outage') {
      displayFirstLine = `Chris Emerson accepted ${incidentType}`;
    } else {
      displayFirstLine = `${rowData.action} of ${format(rowData.value, 'hh:mm')}`;
    }

    const displayOptionalReasonLine = rowData.reason ? `Reason: ${rowData.reason}` : null;
    const displayLogLine = `${format(rowData.timeOfAction, 'MM/DD/YYYY')} at ${format(rowData.timeOfAction, 'hh:mm')}`;

    const backgroundColorStyle = backgroundColor ? styles.greenBackground : {};

    return (
      <View style={styles.rowStyle}>
        <View style={styles.timeline}>
          <View style={[topLineStyle, backgroundColorStyle]} />
          <View style={[styles.dot, backgroundColorStyle]} />
          <View style={[bottomLineStyle, backgroundColorStyle]} />
        </View>
        <View style={styles.listContent}>
          <Text style={[commonStyle.textStyle, styles.displayLineStyle]}>{displayFirstLine}</Text>
          {displayOptionalReasonLine ? <Text style={[commonStyle.textStyle, styles.displayLineStyle]}>{displayOptionalReasonLine}</Text> : null}
          <Text style={[commonStyle.textStyle, styles.displayLogLineStyle]}>{displayLogLine}</Text>
        </View>
      </View>
    );
  }

  goBackHome() {
    this.props.navigation.dispatch(NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Home' })],
    }));
  }

  render() {
    const { outageType } = this.props.navigation.state.params;
    const outage = outageType === 'completed' ?
      this.props.outages.selectedUpcomingOutage : this.props.outages.selectedPastOutage;

    let timelineBackgroundColor = false;
    let currentUser = '';

    return (
      <View style={commonStyle.viewStyle}>
        <ScrollView>
          <OutageInfoComponent outage={outage} status={'Completed'}/>
          <View style={styles.horizontalLineStyle}>
          </View>
          <View>
            <Text style={[commonStyle.textStyle, styles.activityLogHeaderStyle]}>Activity Log</Text>
          </View>
          <View style={styles.container}>
            <FlatList style={styles.listView}
              data={outage.activityLog}
              renderItem={({ item, index }) => {
                if (item.user !== currentUser) {
                  timelineBackgroundColor = !timelineBackgroundColor;
                  currentUser = item.user;
                }
                return this.renderRow(item, outage.IncidentType, index, timelineBackgroundColor, outage.length);
              }}
              keyExtractor={(item, index) => item + index}
            />
          </View>
          <ContinueButtonComponent
            content={'BACK TO HOME'}
            onPressContinueButton={this.goBackHome}
          />
        </ScrollView>
      </View>
    );
  }
}

ActivityLog.propTypes = {
  navigation: PropTypes.object,
  outages: PropTypes.shape({
    selectedUpcomingOutage: PropTypes.object,
    selectedPastOutage: PropTypes.object,
  }),
};

ActivityLog.defaultProps = {
  navigation: {},
  outages: {},
};


export default ActivityLog;
