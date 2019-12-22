import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList /* TabBarIOS */ } from 'react-native';
import PropTypes from 'prop-types';

import chevronRight from '../../../assets/chevronRight.png';
import styles from './NestedListItemComponentStyle';

const NestedListItemComponent = ({ outageList }) => {
  return (
    <FlatList
        data={outageList}
        renderItem={({ item, index }) =>
          <TouchableOpacity key={index + item.text} style={[styles.viewStyle, styles.addViewStyle]} onPress={() => item.onPress()}>
            <View style={styles.cardContentStyle}>
            {
              Object.keys(item.data).map((key, i) => {
                return (
                  <View key={i + key} style={styles.infoViewStyle}>
                    <Text style={styles.infoHeaderStyle}>
                    {key}
                    </Text>
                    <Text style={styles.infotextstyle}>
                      {item.data[key]}
                    </Text>
                  </View>
                );
              })
            }
            <Image style={styles.arrowStyle} source={chevronRight} />
            </View>
          </TouchableOpacity>
      }
        keyExtractor={() => Math.random().toString()}
      />
  );
};

NestedListItemComponent.propTypes = {
  outageList: PropTypes.arrayOf(PropTypes.shape({
    data: PropTypes.object,
    onPress: PropTypes.func,
  })),
};

NestedListItemComponent.defaultProps = {
  data: {},
  onPress: null,
};

export { NestedListItemComponent };
