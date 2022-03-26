import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {Nav, Product} from '../../Types/Types';
import InfoContainer from '../InfoContainer/InfoContainer';
import styles from './styles';

interface ProductContainerProps {
  product: Product;
}

const ProductContainer = ({product}: ProductContainerProps) => {
  const navigation = useNavigation<Nav>();
  const onPress = () => {
    navigation.navigate('Detail', {id: product.id});
  };
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{uri: product.avatar}}
          style={styles.image}
          resizeMode={'contain'}
        />
      </View>
      <InfoContainer name={product.name} price={product.price} />
    </TouchableOpacity>
  );
};

export default ProductContainer;
