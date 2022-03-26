import React, {useRef, useEffect} from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Icon} from '../../Assets/Svgs/icon';
import {Product} from '../../Types/Types';
import styles from './styles';

interface DetailModalProps {
  product: Product;
  showModal: Boolean;
  onPress: () => void;
  onPressBack: () => void;
}

const DetailModal = ({
  product,
  showModal,
  onPress,
  onPressBack,
}: DetailModalProps) => {
  const index = useRef(new Animated.Value(0)).current;
  const modalTranslationY = index.interpolate({
    inputRange: [0, 1],
    outputRange: [800, 1],
  });
  useEffect(() => {
    Animated.timing(index, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, [showModal]);

  return (
    <LinearGradient
      colors={['#000000', '#776D6D', '#ffffff']}
      start={{x: 1, y: 1}}
      end={{x: 1, y: 0}}
      style={styles.container}>
      <Animated.View
        style={[
          styles.animationContainer,
          {transform: [{translateY: modalTranslationY}]},
        ]}>
        <View style={styles.modalTopContainer}>
          <Text style={styles.headerText}>{product.name}</Text>
          <Text style={styles.headerText}>{`$${product.price}`}</Text>
          <TouchableOpacity style={styles.iconContainer} onPress={onPressBack}>
            <Icon name={'Back'} scale={7} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer} onPress={onPress}>
            <Icon name={'Trash'} scale={7} />
          </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.descriptionText}>{product.description}</Text>
        </ScrollView>
      </Animated.View>
    </LinearGradient>
  );
};

export default DetailModal;
