import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import CategoryButton from '../CategoryButton/CategoryButton';
import {Category} from '../../Types/Types';

interface CategoriesContainerProps {
  onPress: any;
  categories: Category[];
  state: string;
}

const CategoriesContainer = ({
  onPress,
  categories,
  state,
}: CategoriesContainerProps) => {
  return (
    <FlatList
      data={categories}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => (
        <CategoryButton
          setState={onPress}
          state={state}
          id={item.id}
          title={item.name}
        />
      )}
    />
  );
};

export default CategoriesContainer;
