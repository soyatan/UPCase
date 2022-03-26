import React from 'react';
import {render} from 'react-native-testing-library';
import CategoryButton from '../src/components/CategoryButton/CategoryButton';

it('renders correctly', () => {
  const id = '3';
  const title: string = 'Button';

  const {getByText} = render(
    <CategoryButton
      state={null}
      setState={id => console.log(id)}
      id={id}
      title={title}
    />,
  );
});
