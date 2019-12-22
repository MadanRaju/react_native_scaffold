import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  View,
  Text,
  ImageBackground,
} from 'react-native';
import { NavigationActions } from 'react-navigation';

import styles from './OutageCompleteStyle';
import commonStyles from '../../CommonStyle';
import { SCardItemComponent, ButtonComponent } from '../shared';

const backgroundImage = require('../../assets/backgroundImage.png');
const outageCompleteIcon = require('../../assets/outageCompleteIcon.png');

class OutageComplete extends Component {
  constructor(props) {
    super(props);
    this.thankYouText = 'Thank you for completing this outage.';
    this.successMessage = 'Your information has been successfully recorded.';
    this.buildButtons = this.buildButtons.bind(this);
  }

  buildButtons() {
    const buttonInfo = [
      {
        text: 'Home',
        nextScreen: 'Home',
      },
      {
        text: 'Activity Log',
        nextScreen: 'ActivityLog',
        outage: this.props.outages.selectedUpcomingOutage,
        otherParam: this.props.outages.selectedUpcomingOutage.Circuit,
      },
    ];

    const { navigation } = this.props;

    const goToNextScreen = (item) => {
      if (item.nextScreen === 'Home') {
        this.props.navigation.dispatch(NavigationActions.reset({
          index: 0,
          key: null,
          actions: [NavigationActions.navigate({ routeName: 'Home' })],
        }));
      } else {
        this.props.fetchActivityLog(item.outage.outageId)
          .then(() => {
            navigation.navigate(item.nextScreen, {
              outageType: 'completed',
            });
          })
          .catch((err) => {
            console.error(`
              Error fetching activity log for outage id: ${item.outage.outageId},
              error: ${err}
            `);
            navigation.navigate(item.nextScreen, {
              outageType: 'upcoming',
            });
          });
      }
    };

    return buttonInfo.map((item, index) => {
      return (
        <ButtonComponent
          text={item.text}
          textStyle={styles.addWhiteTextStyle}
          addStyle={styles.continueButton}
          onPress={() => goToNextScreen(item)}
          key={index}
        />
      );
    });
  }

  render() {
    const nextButtonsArray = this.buildButtons();

    return (
      <View style={commonStyles.viewStyle}>
        <ImageBackground source={backgroundImage} style={styles.backgroundImageStyle}>
          <Image source={outageCompleteIcon} style={styles.outageCompleteIconStyle} />
          <View style={[commonStyles.textViewStyle, styles.addTextViewStyle]}>
            <Text style={[commonStyles.textStyle, styles.addTextStyle]}>
              {this.thankYouText}
            </Text>
            <Text style={[commonStyles.textStyle, styles.addTextStyle]}>
              {this.successMessage}
            </Text>
           </View>
        </ImageBackground>
        <SCardItemComponent content={nextButtonsArray} addStyle={styles.addButtonContainerStyle} />
      </View>
    );
  }
}

OutageComplete.propTypes = {
  navigation: PropTypes.object,
  outages: PropTypes.object,
  fetchActivityLog: PropTypes.func,
};

OutageComplete.defaultProps = {
  navigation: {},
  outages: {},
  fetchActivityLog: null,
};

export default OutageComplete;
