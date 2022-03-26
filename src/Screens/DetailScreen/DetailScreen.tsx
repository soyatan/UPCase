import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator} from 'react-native';
import ImageBigContainer from './../../components/ImageBigContainer/ImageBigContainer';
import {Nav, Product} from '../../Types/Types';
import DetailModal from './../../components/DetailModal/DetailModal';
import styles from './styles';
import ConfirmationModal from './../../components/ConfirmationModal/ConfirmationModal';

interface DetailScreenProps {
  route: any;
  navigation: Nav;
}

const DetailScreen = ({route, navigation}: DetailScreenProps) => {
  const [product, setProduct] = useState<Product>();
  const [showDeleteConfirmation, setShowDeleteConfirmation] =
    useState<Boolean>(false);

  const openDeleteModal = () => {
    setShowDeleteConfirmation(true);
  };

  const navigateBack = () => {
    navigation.goBack();
  };
  useEffect(() => {
    const fetchProduct = async () => {
      const data = await fetch(
        `https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/${route.params.id}`,
      );
      const json = await data.json();

      setProduct(json);
    };

    fetchProduct();
  }, []);

  if (!product) {
    return <ActivityIndicator size="small" color="#00ff00" />;
  } else {
    return (
      <View style={styles.container}>
        <ImageBigContainer source={product?.avatar} />
        <DetailModal
          showModal={true}
          product={product}
          onPress={openDeleteModal}
          onPressBack={navigateBack}
        />
        {showDeleteConfirmation ? (
          <ConfirmationModal
            id={product.id}
            setShowModal={setShowDeleteConfirmation}
            showModal={showDeleteConfirmation}
          />
        ) : null}
      </View>
    );
  }
};
export default DetailScreen;
