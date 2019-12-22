import React from 'react';
import PropTypes from 'prop-types';
import { Image, ViewPropTypes } from 'react-native';

import styles from './LogoTitleComponentStyle';

const LogoImage = require('../../../assets/sceLogo.png');

const LogoTitleComponent = ({ addStyle }) => {
  return (
    <Image
      source={LogoImage}
      style={[styles.imageStyle, addStyle]}
    />
  );
};

LogoTitleComponent.propTypes = {
  addStyle: PropTypes.oneOfType([
    PropTypes.object,
    ViewPropTypes.style,
  ]),
};

LogoTitleComponent.defaultProps = {
  addStyle: {},
};

export { LogoTitleComponent };
