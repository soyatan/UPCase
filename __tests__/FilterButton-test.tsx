import React from 'react';
import {render} from 'react-native-testing-library';
import FilterButton from './../src/components/FilterButton/FilterButton';

it('renders correctly', () => {
  const id = '3';
  const title: string = 'Button';

  const {getByText} = render(
    <FilterButton state={null} setState={null} id={id} title={title} />,
  );
});
