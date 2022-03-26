import React from 'react';
import {View, Image} from 'react-native';
import styles from './styles';

interface ImageBigContainerProps {
  source: string | URL | any;
}

const ImageBigContainer = ({source}: ImageBigContainerProps) => {
  console.log(source);
  return (
    <View style={styles.container}>
      <Image
        source={{uri: source}}
        resizeMode={'contain'}
        style={styles.image}
      />
    </View>
  );
};

export default ImageBigContainer;
