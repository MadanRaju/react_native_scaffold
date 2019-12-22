import React from 'react';
import PropTypes from 'prop-types';
import { View, ViewPropTypes } from 'react-native';

import styles from './SCardItemComponentStyle';

const SCardItemComponent = ({ content, addStyle }) => {
  return (
    <View style={[styles.viewStyle, addStyle]}>
      {content}
    </View>
  );
};

SCardItemComponent.propTypes = {
  content: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  addStyle: PropTypes.oneOfType([
    PropTypes.object,
    ViewPropTypes.style,
  ]),
};

SCardItemComponent.defaultProps = {
  content: {},
  addStyle: {},
};

export { SCardItemComponent };
