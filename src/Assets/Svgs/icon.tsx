import React from 'react';
import {View, Text} from 'react-native';
import {SVGS} from './index';
import {width} from '../../Constants/Metrics';

export const Icon = ({name, scale}) => {
  const VecGr = SVGS[name];
  const size = scale * width * 0.01;
  return (
    <View style={{width: size, height: size}}>
      <VecGr width="100%" height="100%" />
    </View>
  );
};
