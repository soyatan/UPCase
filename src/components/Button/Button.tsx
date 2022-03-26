import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './styles';

interface ButtonProps {
  title: String;
  onPress: () => void;
  color: String;
}

const Button = ({title, onPress, color}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={color === 'Red' ? styles.redButton : styles.grayButton}
      onPress={onPress}>
      <Text style={color === 'Red' ? styles.text : styles.textWhite}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
