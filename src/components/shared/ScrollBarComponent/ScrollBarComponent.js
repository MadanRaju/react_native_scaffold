import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, ViewPropTypes } from 'react-native';
import { ListItemComponent } from '../../shared';

import styles from './ScrollBarComponentStyle';

const ScrollBarComponent = ({ data, addStyle }) => {
  return (
    <FlatList
      style={[styles.viewStyle, addStyle]}
      data={data}
      renderItem={({ item, index }) => <ListItemComponent item={item} key={index + item} />}
      keyExtractor={() => Math.random().toString()}
    />
  );
};

ScrollBarComponent.propTypes = {
  data: PropTypes.array,
  addStyle: PropTypes.oneOfType([
    PropTypes.object,
    ViewPropTypes.style,
  ]),
};

ScrollBarComponent.defaultProps = {
  data: [],
  addStyle: {},
};

export { ScrollBarComponent };
