import React from 'react';
import {View, Text} from 'react-native';
import {Icon} from '../../Assets/Svgs/icon';
import {Nav} from '../../Types/Types';

import styles from './styles';
import Button from './../Button/Button';
import {deleteProduct} from '../../Helper/functions';
import {useNavigation} from '@react-navigation/native';

interface ConfirmationModalProps {
  id: string;
  setShowModal: any;
}

const ConfirmationModal = ({id, setShowModal}: ConfirmationModalProps) => {
  const navigation = useNavigation<Nav>();

  const deleteProductFromDatabase = async () => {
    const response = await deleteProduct(id);
    if (response) {
      navigation.navigate('Home');
    }
  };

  const closeDeleteModal = () => {
    setShowModal(false);
  };
  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <Icon name={'Trash'} scale={22} />
        <View style={styles.textContainer}>
          <Text style={styles.textQuestion}>
            Are you sure you want to delete this product?
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button title={'CANCEL'} color={'Gray'} onPress={closeDeleteModal} />
          <Button
            title={'DELETE'}
            color={'Red'}
            onPress={deleteProductFromDatabase}
          />
        </View>
      </View>
    </View>
  );
};

export default ConfirmationModal;
