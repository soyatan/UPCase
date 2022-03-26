import {StyleSheet} from 'react-native';
import {Colors} from '../../Constants/Colors';
import {Families} from '../../Constants/Fonts';
import {height, width} from '../../Constants/Metrics';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.blackMain,
    width: '100%',
    height: height * 0.07,
    borderRadius: 10,
    padding: 4,
  },
  topRow: {flex: 1},
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  textDescription: {
    color: Colors.whiteMain,
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: Families.helveticaMedium,
  },
  iconContainer: {
    width: width * 0.07,
    height: '100%',
    alignItems: 'center',

    justifyContent: 'center',
    borderRadius: 8,
  },
});

export default styles;
