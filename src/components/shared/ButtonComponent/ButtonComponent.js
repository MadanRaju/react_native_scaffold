import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, ViewPropTypes } from 'react-native';

import styles from './ButtonComponentStyle';

const ButtonComponent = ({
  addStyle,
  text,
  textStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity style={[styles.buttonStyle, addStyle]} onPress={() => onPress()}>
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

ButtonComponent.propTypes = {
  addStyle: PropTypes.oneOfType([
    PropTypes.object,
    ViewPropTypes.style,
  ]),
  text: PropTypes.string,
  textStyle: PropTypes.oneOfType([
    PropTypes.object,
    Text.propTypes.style,
  ]),
  onPress: PropTypes.func,
};

ButtonComponent.defaultProps = {
  addStyle: {},
  text: '',
  textStyle: {},
  onPress: null // eslint-disable-line
};

export { ButtonComponent };
