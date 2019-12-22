import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { LogoTitleComponent } from '../shared';

// import styles from './MyProfileStyle';
import commonStyles from '../../CommonStyle';
import styles from '../HomePage/HomePageStyle';

const hamburgerMenuIcon = require('../../assets/hamburgerMenuIcon.png');

class MyProfile extends Component {
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

  render() {
    return (
      <View style={commonStyles.viewStyle}>
        <Text>Coming Soon</Text>
      </View>
    );
  }
}

MyProfile.propTypes = {
  navigation: PropTypes.object,
};

MyProfile.defaultProps = {
  navigation: {},
};

export default MyProfile;
