import React from 'react';
import {View, Text} from 'react-native';
import {SVGS} from './index';
import {width} from '../../Constants/Metrics';

interface IconProps {
  name: string;
  scale: number;
}
export const Icon = ({name, scale}: IconProps) => {
  const VecGr = SVGS[name].default;
  const size = scale * width * 0.01;
  return (
    <View style={{width: size, height: size}}>
      <VecGr width="100%" height="100%" />
    </View>
  );
};
