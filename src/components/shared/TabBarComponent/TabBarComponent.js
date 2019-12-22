import React, { Component } from 'react';
import { View, Text, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

import { ButtonComponent } from '../../shared';
import commonStyle from '../../../CommonStyle';


class TabBarComponent extends Component {
  constructor(props) {
    super(props);
    this.buildButtonList = this.buildButtonList.bind(this);
  }

  buildButtonList(tabOption, index) {
    const { tabStyle } = this.props;
    const textStyle = [tabStyle.tabOptionTextStyle];
    const buttonStyle = [tabStyle.tabButtonStyle];
    if (this.props.activeTab === tabOption) {
      textStyle.push(tabStyle.activeOptionTextStyle);
      buttonStyle.push(tabStyle.activeTabButtonStyle);
    } else {
      textStyle.push(commonStyle.textStyle);
    }

    return <ButtonComponent
      text={tabOption}
      key={tabOption + index}
      addStyle={buttonStyle}
      textStyle={textStyle}
      onPress={() => this.props.onClickTab(tabOption)}
    />;
  }

  render() {
    return (
      <View style={[this.props.tabStyle.tabBarStyle]}>
        {this.props.tabBarOptionsArray.map(this.buildButtonList)}
      </View>
    );
  }
}

TabBarComponent.propTypes = {
  tabBarOptionsArray: PropTypes.array,
  onClickTab: PropTypes.func,
  tabStyle: PropTypes.shape({
    tabBarStyle: ViewPropTypes.style,
    tabOptionTextStyle: Text.propTypes.style,
    tabButtonStyle: ViewPropTypes.style,
    activeTabButtonStyle: ViewPropTypes.style,
    activeOptionTextStyle: Text.propTypes.style,
  }),
  activeTab: PropTypes.string,
};

TabBarComponent.defaultProps = {};

export { TabBarComponent };
