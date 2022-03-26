import {StyleSheet} from 'react-native';
import {Colors} from '../../Constants/Colors';
import {Families} from '../../Constants/Fonts';
import {height, width} from '../../Constants/Metrics';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    opacity: 0.8,
    backgroundColor: Colors.blackMain,
    borderRadius: width * 0.05,
    position: 'absolute',
  },
  modal: {
    position: 'absolute',
    alignSelf: 'center',
    width: '70%',
    bottom: height * 0.2,
    height: height * 0.5,
    backgroundColor: Colors.whiteMain,
    borderRadius: width * 0.05,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 20,
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 15,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  textQuestion: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: Families.avenirBold,
    textAlignVertical: 'center',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingBottom: 15,
  },
});

export default styles;
