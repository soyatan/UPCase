import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Icon} from '../../Assets/Svgs/icon';

import styles from './styles';

interface ButtonProps {
  onPress: () => void;
}

const CreateButton = ({onPress}: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.addButton} onPress={onPress}>
      <Icon name={'Plus'} scale={5} />
    </TouchableOpacity>
  );
};

export default CreateButton;
