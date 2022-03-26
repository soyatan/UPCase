import React from 'react';
import {View, Text} from 'react-native';
import {Icon} from '../../Assets/Svgs/icon';

import styles from './styles';
interface InfoContainerProps {
  name: String;
  price: Number;
}

const InfoContainer = ({name, price}: InfoContainerProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <Text numberOfLines={1} style={styles.textDescription}>
          {name}
        </Text>
      </View>
      <View style={styles.bottomRow}>
        <Text numberOfLines={1} style={styles.textDescription}>
          {`$${price.toLocaleString()}`}
        </Text>
        <View style={styles.iconContainer}>
          <Icon name={'Info'} scale={4} />
        </View>
      </View>
    </View>
  );
};

export default InfoContainer;
