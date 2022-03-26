import {StyleSheet} from 'react-native';
import {Colors} from '../../Constants/Colors';
import {Families} from '../../Constants/Fonts';
import {height, width} from '../../Constants/Metrics';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 15,
  },
  indicator: {
    position: 'absolute',
    top: 180,
    alignSelf: 'center',
  },
  text: {
    fontFamily: Families.avenirRegular,
    fontSize: 15,
    color: Colors.blackMain,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  errorMessage: {
    color: 'red',
    marginBottom: 10,
    fontWeight: 'bold',
    fontFamily: Families.avenirBold,
  },
  buttonContainer: {
    alignSelf: 'center',
    marginBottom: 15,
  },
});

export default styles;
