// import 'react-native';
// import React from 'react';
// import App from '../App';

// // Note: test renderer must be required after react-native.
// import renderer from 'react-test-renderer';

// it('renders correctly', () => {
//   const tree = renderer.create(
//     <App />
//   );
// });

import React, { View, Text, StyleSheet } from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';
// import App from '../src/App';

// Note: test renderer must be required after react-native.

describe('<MyComponent />', () => {
  it('should render stuff', () => {
    // const wrapper = shallow(<App />);
    // expect(wrapper.length).to.equal(1);
    // expect(wrapper.contains(<Text>I wonder if there will be any problems...</Text>)).to.equal(true);
  });
});
