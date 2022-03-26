import React, {useState, Dispatch, SetStateAction} from 'react';
import {View, Text, TextInput} from 'react-native';

import styles from './styles';

interface InputComponentProps {
  value: string;
  onEndEditing: () => void;
  placeholder: string;
  onChangeText: Dispatch<SetStateAction<string>>;
  numeric?: boolean;
  multiline?: boolean;
}

const InputComponent = ({
  onChangeText,
  placeholder,
  value,
  onEndEditing,
  numeric,
  multiline,
}: InputComponentProps) => {
  const [isFocused, setisFocused] = useState(false);

  const labelStyle: Object = {
    position: 'absolute',
    left: 5,
    top: !isFocused ? 10 : -20,
    fontSize: !isFocused ? 11 : 11,
    color: !isFocused ? '#aaa' : '#000',
  };

  const handleFocus = () => {
    if (!value) {
      setisFocused(true);
    }
  };
  const handleBlur = () => {
    if (!value) {
      setisFocused(false);
    }
  };

  return (
    <View
      style={
        multiline ? styles.textInputContainerLarge : styles.textInputContainer
      }>
      <Text style={labelStyle}>{placeholder}</Text>
      <TextInput
        keyboardType={!numeric ? 'default' : 'numeric'}
        style={styles.text}
        autoCapitalize="none"
        placeholderTextColor={'gray'}
        selectionColor={'black'}
        onChangeText={onChangeText}
        multiline={multiline}
        value={value}
        onEndEditing={onEndEditing}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </View>
  );
};

export default InputComponent;
