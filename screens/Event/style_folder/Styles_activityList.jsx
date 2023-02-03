import { StyleSheet, Dimensions, Platform } from 'react-native';
import size from '../../../controller/ModifySize';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    paddingTop: 53,
    backgroundColor: '#fafafa',
  },
  horizontalArea: {
    borderWidth: 1,
    backgroundColor: 'black',
  },
  horizontal: {
    flex: 1,
    height: Platform.OS === 'android'
      ? 246
      : (size.isIphoneX() ? Dimensions.get('window').width * 0.8 - 10 : 300),
    flexDirection: 'row',
  },
  Card2: {
    marginTop: 10,
    height: Platform.OS === 'android'
      ? Dimensions.get('window').width * 0.6
      : (size.isIphoneX() ? Dimensions.get('window').height * 0.35 - 10 : Dimensions.get('window').height * 0.35),
    width: Platform.OS === 'android'
      ? Dimensions.get('window').width * 0.43
      : (size.isIphoneX() ? Dimensions.get('window').width * 0.55 - 10 : Dimensions.get('window').width * 0.55),
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: -4,
    },
    elevation: 4,
    backgroundColor: 'white',
    marginLeft: Dimensions.get('window').width * 0.06,
    marginRight: -Dimensions.get('window').width * 0.0094,
  },
  CardTitle: {
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    color: '#28527A',
    marginTop: -5,
    fontSize: 14,
  },
  CardDetails: {
    marginLeft: 7,
    flexDirection: 'row',
    marginBottom: 2,
  },
  CardText: {
    fontSize: 12,
    color: 'rgba(40, 82, 122, 0.65)',
    marginTop: -3,
  },
  more: {
    width: 'auto',
    height: 35,
    paddingTop: 10,
    marginTop: Platform.OS === 'android'
      ? 20
      : (size.isIphoneX() ? Dimensions.get('window').width * 0.02 - 10 : Dimensions.get('window').height * 0.001),
    flexDirection: 'row',
  },
  pic: {
    // width: PixelRatio.getPixelSizeForLayoutSize(76),
    // height: PixelRatio.getPixelSizeForLayoutSize(76),
    backgroundColor: '#E0E0E0',
    aspectRatio: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  SearchBar: {
    backgroundColor: '#E5EBF1',
    borderRadius: 18,
    width: Dimensions.get('window').width * 0.7,
    marginLeft: Dimensions.get('window').width * 0.05,
    height: 36,
  },
  searchIcon: {
    marginLeft: Dimensions.get('window').width * 0.08,
    marginTop: 6,
  },
  searchtextBox: {
    marginLeft: Dimensions.get('window').width * 0.15,
    marginTop: 6,
    width: '100%',
  },
  searchtext: {
    color: '#28527A',
    fontSize: 18,
  },
  readDot: {
    marginLeft: -2.5,
  },
  showMore: {
    color: '#28527a',
    marginLeft: Platform.OS === 'android'
      ? Dimensions.get('window').width * 0.54
      : (size.isIphoneX() ? Dimensions.get('window').width * 0.4 - 10 : Dimensions.get('window').width * 0.4),
  },
});
