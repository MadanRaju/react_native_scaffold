import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
// import FontAwesome, { Icons } from 'react-native-fontawesome';
import chevronDown from '../../../assets/chevronDown.png';

import helpers from './DropdownComponentHelpers';
import styles from './DropdownComponentStyle';

class DropdownComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: props.options,
      changeSelected: props.changeSelected || true,
      defaultValue: props.defaultValue,
      dropdownOpen: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.changeSelectedOption = this.changeSelectedOption.bind(this);
  }

  toggleMenu() {
    const openState = this.state.dropdownOpen;
    this.setState({
      dropdownOpen: !openState,
    });
  }

  changeSelectedOption(option) {
    if (option !== this.state.defaultValue && this.props.changeSelected && this.props.onChange) {
      this.setState({
        defaultValue: option,
        dropdownOpen: false,
      });
      this.props.onChange(option);
    }
  }

  render() {
    const optionList = helpers.renderList(this.state.options, this.changeSelectedOption, styles.listTextStyle);

    return (
      <TouchableOpacity
        style={[styles.dropdownContainerStyle, this.props.addDropdownStyle]}
        onPress={this.toggleMenu}
        >
        <View>
          <View style={styles.optionView}>
            <Text style={styles.selectedOptionStyle}>
            {this.state.defaultValue}
            </Text>
            <Image source={chevronDown}/>
          </View>
          { this.state.dropdownOpen &&
            <ScrollView style={[styles.listStyle, this.props.addDropdownListStyle]}>
              {optionList}
            </ScrollView>
          }
        </View>
      </TouchableOpacity>
    );
  }
}

export { DropdownComponent };

DropdownComponent.propTypes = {
  options: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.shape({}),
  ])),
  onChange: PropTypes.func.isRequired,
  defaultValue: PropTypes.string,
  arrow: PropTypes.bool,
  changeSelected: PropTypes.bool,
  addDropdownStyle: PropTypes.oneOfType([
    PropTypes.object,
    ViewPropTypes.style,
  ]),
  addDropdownListStyle: PropTypes.oneOfType([
    PropTypes.object,
    ViewPropTypes.style,
  ]),
};

DropdownComponent.defaultProps = {
  options: [],
  onChange: null,
  defaultValue: null,
  arrow: true,
  changeSelected: true,
  addDropdownStyle: {},
  addDropdownListStyle: {},
};
