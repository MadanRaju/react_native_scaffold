import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import styles from './CardItemComponentStyle';

const CardItemComponent = ({ item }) => {
  return (
    <View style={[styles.viewStyle, item.addStyle]}>
      <View>
        {item.headerContent}
      </View>
      <View>
        {item.detailContent}
      </View>
    </View>
  );
};

CardItemComponent.propTypes = {
  item: PropTypes.object,
};

CardItemComponent.defaultProps = {
  item: {
    headerContent: '',
    detailContent: '',
  },
};

export { CardItemComponent };
