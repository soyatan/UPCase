import React, {SetStateAction, Dispatch} from 'react';
import {render} from 'react-native-testing-library';
import InputComponent from '../src/components/InputComponent/InputComponent';

it('renders correctly', () => {
  const value = 'Test input';
  const onEndEditing = () => console.log('typing finished');
  const placeholder = 'Test input';
  const onChangeText = () => {};

  const {getByText} = render(
    <InputComponent
      value={value}
      onEndEditing={onEndEditing}
      placeholder={placeholder}
      onChangeText={onChangeText}
    />,
  );
});
