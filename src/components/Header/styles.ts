import {StyleSheet} from 'react-native';
import {Colors} from '../../Constants/Colors';
import {Families} from '../../Constants/Fonts';
import {height, width} from '../../Constants/Metrics';

const styles = StyleSheet.create({
  container: {
    height: height * 0.14,
  },
  topRow: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 0,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: width * 0.1,
  },
  searchInput: {
    width: width * 0.3,
    borderBottomWidth: 0.4,
  },
  filterRow: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'row',

    marginBottom: height * 0.01,
  },
  flatListStyle: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },

  headerText: {
    color: Colors.blueTextDark,
    flex: 1,

    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: 'bold',
    textShadowColor: Colors.blackMain,
    textShadowOffset: {width: 1, height: -1},
    textShadowRadius: 10,
    fontFamily: Families.openSansBoldItalic,
    width: width * 0.5,
    letterSpacing: 4,
  },
});

export default styles;
