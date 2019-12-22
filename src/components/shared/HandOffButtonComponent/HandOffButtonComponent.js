import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, ViewPropTypes } from 'react-native';

const HandOffButtonComponent = ({ addStyle, content, onPress }) => {
  return (
    <TouchableOpacity style={addStyle} onPress={() => onPress()}>
      { content }
    </TouchableOpacity>
  );
};

HandOffButtonComponent.propTypes = {
  addStyle: PropTypes.oneOfType([
    PropTypes.object,
    ViewPropTypes.style,
  ]),
  content: PropTypes.object,
  onPress: PropTypes.func,
};

HandOffButtonComponent.defaultProps = {
  addStyle: {},
  content: {},
  onPress: null // eslint-disable-line
};

export { HandOffButtonComponent };
