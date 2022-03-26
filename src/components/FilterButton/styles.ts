import {StyleSheet} from 'react-native';
import {Colors} from '../../Constants/Colors';
import {Families} from '../../Constants/Fonts';
import {height, width} from '../../Constants/Metrics';

const styles = StyleSheet.create({
  unfocused: {
    borderWidth: 1,
    height: height * 0.05,
    backgroundColor: Colors.blackMain,
    borderRadius: 6,
    marginHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  focused: {
    borderWidth: 1,
    height: height * 0.06,
    backgroundColor: Colors.whiteMain,
    borderRadius: 6,
    marginHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  textFocused: {
    color: Colors.blackMain,
    fontWeight: 'bold',
    fontFamily: Families.helveticaMedium,
    fontSize: 16,
  },
  textUnfocused: {
    color: Colors.whiteMain,
    fontFamily: Families.helveticaMedium,
    fontSize: 14,
  },
});

export default styles;
