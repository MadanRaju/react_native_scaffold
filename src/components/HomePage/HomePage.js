import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { format } from 'date-fns';

import styles from './HomePageStyle';
import commonStyles from '../../CommonStyle';
import { ListComponent, LogoTitleComponent } from '../shared';

const backgroundImage = require('../../assets/backgroundImage.png');
const hamburgerMenuIcon = require('../../assets/hamburgerMenuIcon.png');

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.buildGreeting = this.buildGreeting.bind(this);
    this.buildMenuItem = this.buildMenuItem.bind(this);
    this.buildDate = this.buildDate.bind(this);
    this.onPress = this.onPress.bind(this);
  }

  componentWillMount() {
    const dummyUserId = 1;
    this.props.fetchDistricts(dummyUserId);
  }

  static navigationOptions({ navigation }) {
    return {
      headerTitle: <LogoTitleComponent />,
      headerLeft: (
        <TouchableOpacity
          style={styles.hamburgerMenuViewStyle}
          onPress={() => navigation.navigate('DrawerToggle')}
        >
          <Image
            source={hamburgerMenuIcon}
            style={styles.hamburgerMenuIconStyle}
          />
        </TouchableOpacity>
      ),
    };
  }

  onPress(nextScreen) {
    this.props.navigation.navigate(nextScreen);
  }

  buildMenuItem() {
    return [
      {
        text: 'Upcoming Outages',
        onPress: () => this.onPress('UpcomingOutages'),
      },
      {
        text: 'My Past Outages',
        onPress: () => this.onPress('PastOutages'),
      },
    ];
  }

  buildGreeting() {
    const currentTime = new Date().getHours();
    switch (true) {
      case (currentTime < 4):
        return 'Good evening';
      case (currentTime < 12):
        return 'Good morning';
      case (currentTime < 18):
        return 'Good afternoon';
      case (currentTime < 22):
        return 'Good evening';
      case (currentTime < 24):
        return 'Good evening';
      default:
        return 'Hello';
    }
  }

  buildDate() {
    const todaysDate = format(
      new Date(),
      'MMMM D, YYYY',
    );
    return todaysDate;
  }

  render() {
    return (
      <View style={commonStyles.viewStyle}>
        <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
          <View style={[commonStyles.textViewStyle, styles.addTextViewStyle]}>
            <Text style={[commonStyles.textStyle, styles.addTextStyle]}>
              {'Hello, Chris.'}
            </Text>
            <Text style={styles.dateStyle}>
              {this.buildDate()}
            </Text>
           </View>
        </ImageBackground>
        <ListComponent listArray={this.buildMenuItem()} />
      </View>
    );
  }
}

HomePage.propTypes = {
  navigation: PropTypes.object,
  fetchDistricts: PropTypes.func,
};

HomePage.defaultProps = {
  navigation: {},
  fetchDistricts: null // eslint-disable-line
};

export default HomePage;
