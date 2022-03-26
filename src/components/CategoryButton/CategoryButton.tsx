import React, {useState, useEffect} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './styles';
import {capitalizeTheFirstLetterOfEachWord} from '../../Helper/functions';

interface CategoryButtonProps {
  id: string;
  title: String;
  state?: any;
  setState: (id: string) => void;
}

const CategoryButton = ({id, title, state, setState}: CategoryButtonProps) => {
  const [isFocused, setIsFocused] = useState<Boolean>(false);

  useEffect(() => {
    const checkIsFocused = (id: string): void => {
      if (id === state) {
        setIsFocused(true);
      } else {
        setIsFocused(false);
      }
    };
    checkIsFocused(id);
  }, [state]);

  return (
    <TouchableOpacity
      style={isFocused ? styles.focused : styles.unfocused}
      onPress={() => setState(id)}>
      <Text style={isFocused ? styles.textFocused : styles.textUnfocused}>
        {capitalizeTheFirstLetterOfEachWord(title)}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryButton;
