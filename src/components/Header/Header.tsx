import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, TextInput} from 'react-native';
import {Icon} from '../../Assets/Svgs/icon';
import {Category} from '../../Types/Types';
import FilterButton from '../FilterButton/FilterButton';

import styles from './styles';

interface HeaderProps {
  categories: Category[];
  state: any;
  setState: any;
  searchValue: string;
  setSearchValue: any;
  onPress: () => void;
}

const Header = ({
  categories,
  state,
  setState,
  searchValue,
  setSearchValue,
  onPress,
}: HeaderProps) => {
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const setSearchVisible = () => {
    setShowSearch(true);
  };
  const clearSearchBar = () => {
    setShowSearch(false);
    onPress();
  };

  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <Text style={styles.headerText}>UPayments Store</Text>
        {showSearch ? (
          <TextInput
            style={styles.searchInput}
            value={searchValue}
            onChangeText={setSearchValue}
          />
        ) : null}
        {!searchValue && !showSearch ? (
          <TouchableOpacity
            style={styles.searchIcon}
            onPress={setSearchVisible}>
            <Icon name={'Search'} scale={6} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={clearSearchBar} style={styles.searchIcon}>
            <Icon name={'Cancel'} scale={4} />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.filterRow}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={categories}
          extraData={{id: '0', name: 'All'}}
          contentContainerStyle={styles.flatListStyle}
          renderItem={({item}) => (
            <FilterButton
              id={item.id}
              title={item.name}
              state={state}
              setState={setState}
            />
          )}
          horizontal
        />
      </View>
    </View>
  );
};

export default Header;
