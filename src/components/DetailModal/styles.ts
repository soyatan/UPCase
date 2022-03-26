import {StyleSheet} from 'react-native';
import {Colors} from '../../Constants/Colors';
import {Families} from '../../Constants/Fonts';
import {height, width} from '../../Constants/Metrics';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    height: height * 0.5,
    backgroundColor: 'red',
    borderTopRightRadius: width * 0.05,
    borderTopLeftRadius: width * 0.05,
  },

  animationContainer: {
    position: 'absolute',
    backgroundColor: Colors.blackMain,
    width: '100%',
    bottom: 0,
    height: height * 0.45,
    borderTopRightRadius: width * 0.05,
    borderTopLeftRadius: width * 0.05,
    padding: 20,
  },
  headerText: {
    fontSize: 22,
    color: Colors.whiteMain,
    fontFamily: Families.avenirBold,
  },
  modalTopContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    marginBottom: 15,
  },
  descriptionText: {
    fontFamily: Families.avenirRegular,
    fontSize: 13,
    paddingTop: 10,
    color: Colors.whiteMain,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
