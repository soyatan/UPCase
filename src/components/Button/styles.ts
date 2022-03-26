import {StyleSheet} from 'react-native';
import {Colors} from '../../Constants/Colors';
import {Families} from '../../Constants/Fonts';
import {height, width} from '../../Constants/Metrics';

const styles = StyleSheet.create({
  redButton: {
    borderWidth: 1,
    height: height * 0.05,
    width: width * 0.26,
    backgroundColor: Colors.redText,
    borderRadius: 6,
    marginHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
    marginTop: 15,
  },
  grayButton: {
    borderWidth: 1,
    height: height * 0.05,
    width: width * 0.26,
    backgroundColor: Colors.blackMain,
    borderRadius: 6,
    marginHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
    marginTop: 15,
  },

  text: {
    color: Colors.blackMain,
    fontWeight: 'bold',
    fontFamily: Families.helveticaMedium,
    fontSize: 14,
    textAlign: 'center',
  },
  textWhite: {
    color: Colors.whiteMain,
    fontWeight: 'bold',
    fontFamily: Families.helveticaMedium,
    fontSize: 14,
    textAlign: 'center',
  },
});

export default styles;
