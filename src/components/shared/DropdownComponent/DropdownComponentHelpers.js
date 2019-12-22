import React from 'react';
import { Text } from 'react-native';

export default class dropdownHelpers {
  static renderList(options, changeFunction, listTextStyle) {
    return options.map((inputOption) => {
      // const initialTab = !index ? index : -1;
      const isObject = typeof inputOption === 'object';
      const option = inputOption !== null ? inputOption : '';
      const optionValue = isObject ? option.value : option;
      let displayValue = isObject && option.displayValue ? option.displayValue : option;
      if (!displayValue) {
        // happens if option is object but no displayValue
        if (option && option.value) displayValue = option.value;
      }
      return (
        <Text
          style={listTextStyle}
          key={optionValue}
          onPress={() => changeFunction(optionValue)}
        >
          {displayValue}
        </Text>
      );
    });
  }
}
