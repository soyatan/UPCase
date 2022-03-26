import React from 'react';
import {render} from 'react-native-testing-library';
import ImageBigContainer from '../src/components/ImageBigContainer/ImageBigContainer';

it('renders correctly', () => {
  const source: string =
    ' https://www.ubuy.com.tr/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzFJVlRNYTVKUUwuX0FDX1NMMTUwMF8uanBn.jpg';

  const {getByText} = render(<ImageBigContainer source={source} />);
});
