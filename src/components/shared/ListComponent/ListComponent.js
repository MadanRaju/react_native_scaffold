import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import styles from './ListComponentStyle';
import { ListItemComponent } from '../../shared';

const ListComponent = ({ listArray }) => {
  return (
    <View style={styles.viewStyle}>
      {listArray.map((item, index) => <ListItemComponent item={item} key={item + index} />)}
    </View>
  );
};

ListComponent.propTypes = {
  listArray: PropTypes.array,
};

ListComponent.defaultProps = {
  listArray: [],
};

export { ListComponent };
