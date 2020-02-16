import React from 'react';
import Footer from '.';
import renderer from 'react-test-renderer';

describe('Footer component', () => {
  test('Footer should successfully rendered', () => {
    const component = renderer.create(
      <Footer  />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
