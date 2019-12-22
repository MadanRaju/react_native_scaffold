import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

import enzyme, { shallow /* , mount, render */} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { expect } from 'chai';
import sinon from 'sinon';
// import renderer from 'react-test-renderer';

import { Dropdown } from '../src/components/shared/Dropdown/Dropdown';
import helpers from '../src/components/shared/Dropdown/DropdownHelpers';

enzyme.configure({ adapter: new Adapter() });

describe('Dropdown helpers', () => {
  test('Populate list should accept an array of strings', () => {
    const testArray = ['option1', 'option2', 'option3', 'option4', 'option5'];
    const list = helpers.renderList(testArray);
    expect(list).to.have.length(5);
  });

  test('Populate list should accept an array of numbers', () => {
    const testArray = [1, 2, 3, 4, 5];
    const list = helpers.renderList(testArray);
    expect(list).to.have.length(5);
  });

  test('Populate list should handle invalid inputs', () => {
    const testArray = [[], {}, undefined, null, 'a', 1, 'b'];
    const list = helpers.renderList(testArray);
    expect(list).to.have.length(7);
  });

  test('Populate list should handle empty arrays', () => {
    const testArray = [];
    const list = helpers.renderList(testArray);
    expect(list).to.have.length(0);
  });
});

describe('DropdownComponent', () => {
  const dropdownStyles = {
    dropdownContainer: {},
    selectedOption: {},
    optionList: {},
    optionListText: {},
  };

  test('Should render a dropdown component', () => {
    const wrapper = shallow(<Dropdown
      options={['option 1', 'option 2', 'option 3']}
      onChange={sinon.spy()}
      dropdownStyles={dropdownStyles}
      />);
    expect(wrapper).to.have.length(1);
  });

  test('Should render dropdown when options are empty', () => {
    const wrapper = shallow(<Dropdown
        options={[]}
        onChange={sinon.spy()}
        dropdownStyles={dropdownStyles}
      />);
    expect(wrapper).to.have.length(1);
  });
});

