import {StyleSheet} from 'react-native';
import {Colors} from '../../Constants/Colors';
import {Families} from '../../Constants/Fonts';
import {height, width} from '../../Constants/Metrics';

const styles = StyleSheet.create({
  addButton: {
    borderWidth: 3,
    height: width * 0.1,
    width: width * 0.1,
    backgroundColor: Colors.whiteMain,
    borderRadius: width * 0.5,
    marginHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
});

export default styles;
