import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  DrawerItems,
  SafeAreaView,
  NavigationActions,
} from 'react-navigation';

import styles from './DrawerMenuStyle';
import commonStyles from '../../CommonStyle';

class DrawerMenu extends React.Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
  }

  logout() {
    const actionToDispatch = NavigationActions.reset({
      index: 0,
      key: null,
      actions: [NavigationActions.navigate({ routeName: 'Home' })],
    });
    this.props.navigation.dispatch(actionToDispatch);
  }

  render() {
    return (
      <View style={commonStyles.viewStyle}>
        <View style={styles.headerWithNameStyle}>
          <Text style={[commonStyles.textStyle, styles.crewNameStyle]}>
            Chris Emerson
          </Text>
          <Text style={[commonStyles.textStyle, styles.detailTextStyle]}>
            mobile: 909-123-4567
          </Text>
          <Text style={[commonStyles.textStyle, styles.detailTextStyle]}>
            radio: 732142
          </Text>
        </View>
        <ScrollView>
        <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
          <DrawerItems {...this.props} style={styles.listItemStyle} />
        </SafeAreaView>
      </ScrollView>
        <TouchableOpacity onPress={this.logout}>
          <Text style={[commonStyles.textStyle, styles.logoutTextStyle]}>
            Log Out
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

DrawerMenu.propTypes = {
  navigation: PropTypes.object,
};

DrawerMenu.defaultProps = {
  navigation: {},
};

export default DrawerMenu;
