import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import Header from '../../components/Header/Header';
import ProductContainer from '../../components/ProductContainer/ProductContainer';
import styles from './styles';
import {Product, Category, Nav} from '../../Types/Types';
import {SafeAreaView} from 'react-native-safe-area-context';
import CreateButton from './../../components/CreateButton/CreateButton';

interface HomeScreenProps {
  navigation: Nav;
}
const HomeScreen = ({navigation}: HomeScreenProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [fetchedProducts, setFetchedProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [activeCategoryFilter, setactiveCategoryFilter] = useState<String>('0');
  const [searchValue, setSearchValue] = useState<string>('');

  const fetchProducts = async () => {
    const data = await fetch(
      'https://62286b649fd6174ca82321f1.mockapi.io/case-study/products',
    );
    const json = await data.json();
    setFetchedProducts(json);
    setProducts(json);
  };
  const fetchCategories = async () => {
    const data = await fetch(
      'https://62286b649fd6174ca82321f1.mockapi.io/case-study/categories',
    );
    const json = await data.json();

    setCategories([
      {id: '0', name: 'All', createdAt: new Date(Date.now())},
      ...json,
    ]);
  };
  const clearSearch = () => {
    setSearchValue('');
  };
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchProducts();
    });

    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  useEffect(() => {
    const filterProducts = () => {
      if (activeCategoryFilter !== '0') {
        const chosenCategory: string | any = categories.find(
          category => category.id === activeCategoryFilter,
        );
        const filteredProducts = fetchedProducts.filter(product => {
          return product.category == chosenCategory.name;
        });
        setProducts(filteredProducts);
      } else setProducts(fetchedProducts);
    };

    filterProducts();
  }, [activeCategoryFilter]);

  useEffect(() => {
    const searchFilterProducts = () => {
      const filteredProducts = fetchedProducts.filter(product => {
        return product.name.toLowerCase().includes(searchValue.toLowerCase());
      });
      setProducts(filteredProducts);
    };

    searchFilterProducts();
  }, [searchValue]);

  const navigateToCreateScreen = () => {
    navigation.navigate('Create');
  };

  return (
    <View style={styles.container}>
      <Header
        categories={categories}
        state={activeCategoryFilter}
        setState={setactiveCategoryFilter}
        setSearchValue={setSearchValue}
        searchValue={searchValue}
        onPress={() => clearSearch()}
      />
      <SafeAreaView style={styles.productsContainer}>
        <FlatList
          data={products}
          renderItem={({item}) => <ProductContainer product={item} />}
          numColumns={2}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>

      <CreateButton onPress={navigateToCreateScreen} />
    </View>
  );
};

export default HomeScreen;
