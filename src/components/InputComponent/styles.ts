import {StyleSheet} from 'react-native';
import {Colors} from '../../Constants/Colors';
import {Families} from '../../Constants/Fonts';
import {height, width} from '../../Constants/Metrics';

const styles = StyleSheet.create({
  textInputContainer: {
    height: 40,
    opacity: 0.5,
    paddingHorizontal: 2,
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 15,
  },
  textInputContainerLarge: {
    height: 100,
    opacity: 0.5,
    paddingHorizontal: 2,
    width: '100%',

    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginVertical: 15,
  },

  text: {
    color: Colors.blackMain,

    height: '100%',
    fontWeight: 'bold',
    fontFamily: Families.helveticaMedium,
    fontSize: 14,
    textAlignVertical: 'top',
    flex: 1,
  },
});

export default styles;
