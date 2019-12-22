import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';

import styles from './ListItemComponentStyle';

const ListItemComponent = ({ item }) => {
  return (
    <TouchableOpacity style={[styles.viewStyle, item.addViewStyle]} onPress={() => item.onPress()}>
      <Text style={[styles.textStyle, item.textStyle]}>
        {item.text}
      </Text>
    </TouchableOpacity>
  );
};

ListItemComponent.propTypes = {
  item: PropTypes.object,
};

ListItemComponent.defaultProps = {
  item: {
    text: '',
  },
};

export { ListItemComponent };
