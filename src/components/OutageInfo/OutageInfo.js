import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, ScrollView } from 'react-native';

import styles from './OutageInfoStyle';
import commonStyle from '../../CommonStyle';
import {
  ButtonComponent,
  OutageInfoComponent,
} from '../shared';

class OutageInfo extends Component {
  constructor(props) {
    super(props);

    this.buildButton = this.buildButton.bind(this);
    this.confirmToWorkOutage = this.confirmToWorkOutage.bind(this);
  }

  static navigationOptions({ navigation }) {
    const { params } = navigation.state;

    return {
      title: params ? params.otherParam : 'Outage Info',
    };
  }

  confirmToWorkOutage() {
    // navigator.geolocation.getCurrentPosition((position) => { // eslint-disable-line no-undef
    //   this.props.calculateSetDefaultETA(position)
    //     .then(() => {
    //       this.props.navigation.navigate('ConfirmETA');
    //     });
    // });
    this.props.navigation.navigate('ConfirmETA');
  }

  buildButton(text = '', style) {
    const content = <Text style={styles.textButtonStyle}>{text}</Text>;
    const yesNavigation = this.confirmToWorkOutage;
    const noNavigation = () => this.props.navigation.goBack();
    const onPress = text === 'YES' ? yesNavigation : noNavigation;

    return (
      <ButtonComponent content={content} addStyle={style} onPress={onPress} />
    );
  }

  render() {
    const outage = this.props.outages.selectedUpcomingOutage;

    return (
      <View style={commonStyle.viewStyle}>
        <ScrollView>
          <OutageInfoComponent outage={outage} />
          <View style={styles.viewButtonContainerStyles}>
            <Text style={[commonStyle.textStyle, styles.addButtonQuestionStyle]}>
              Are you going to work this outage?
            </Text>
            <View style={styles.viewButtonStyle}>
              <ButtonComponent
                text='NO'
                textStyle={styles.textButtonStyle}
                onPress={() => this.props.navigation.goBack()}
                addStyle={styles.buttonStyle}
              />
              <ButtonComponent
                text='YES'
                textStyle={styles.textButtonStyle}
                onPress={this.confirmToWorkOutage}
                addStyle={styles.buttonStyle}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

OutageInfo.propTypes = {
  outages: PropTypes.object,
  navigation: PropTypes.object,
  calculateSetDefaultETA: PropTypes.func,
};

OutageInfo.defaultProps = {
  outages: {},
  navigation: {},
  calculateSetDefaultETA: null,
};

export default OutageInfo;
