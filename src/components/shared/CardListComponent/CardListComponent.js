import React from 'react';
import PropTypes from 'prop-types';
import { View, ViewPropTypes } from 'react-native';

import styles from './CardListComponentStyle';
import { CardItemComponent } from '../../shared';

const CardListComponent = ({ cardListArray, addCardListStyle }) => {
  return (
    <View style={[styles.viewStyle, addCardListStyle]}>
      { Array.isArray(cardListArray) ?
        cardListArray.map((item, index) => <CardItemComponent item={item} key={item + index} />)
        :
        <CardItemComponent item={cardListArray} key={cardListArray + 0} />
      }
    </View>
  );
};

CardListComponent.propTypes = {
  cardListArray: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  addCardListStyle: PropTypes.oneOfType([
    PropTypes.object,
    ViewPropTypes.style,
  ]),
};

CardListComponent.defaultProps = {
  cardListArray: [],
  addCardListStyle: {},
};

export { CardListComponent };
