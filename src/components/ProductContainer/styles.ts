import {StyleSheet} from 'react-native';
import {Colors} from '../../Constants/Colors';
import {Families} from '../../Constants/Fonts';
import {height, width} from '../../Constants/Metrics';

const styles = StyleSheet.create({
  container: {
    height: height * 0.3,
    borderRadius: 10,
    flex: 1 / 2,
    justifyContent: 'space-between',
    backgroundColor: Colors.whiteMain,
    alignItems: 'center',

    margin: width * 0.025,
  },
  topRow: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 15,

    alignItems: 'center',
  },
  filterRow: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'row',

    marginBottom: height * 0.01,
  },
  headerText: {
    color: Colors.blueTextDark,
    flex: 1,

    fontSize: 24,
    fontStyle: 'italic',
    fontWeight: 'bold',
    textShadowColor: Colors.blackMain,
    textShadowOffset: {width: 1, height: -1},
    textShadowRadius: 10,
    fontFamily: Families.openSansBoldItalic,
    width: width * 0.5,
    letterSpacing: 4,
  },
  imageContainer: {
    height: height * 0.2,
    width: '100%',

    borderRadius: 10,
    paddingTop: height * 0.01,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default styles;
