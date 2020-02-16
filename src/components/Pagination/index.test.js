import React from 'react';
import Pagination from '.';
import renderer from 'react-test-renderer';

describe('Pagination component', () => {
  test('Pagination should successfully rendered', () => {
    const component = renderer.create(
      <Pagination  />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
