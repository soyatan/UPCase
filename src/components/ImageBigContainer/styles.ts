import {StyleSheet} from 'react-native';
import {Colors} from '../../Constants/Colors';
import {Families} from '../../Constants/Fonts';
import {height, width} from '../../Constants/Metrics';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: height * 0.05,
    height: height * 0.4,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default styles;
