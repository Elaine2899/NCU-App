import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  avatar: {
    margin: 10,
    width: 60,
    height: 60,
    borderRadius: 30,
    borderBottomWidth: 2,
    borderBottomEndRadius: 10,
    borderEndColor: '#bfbebe',
    backgroundColor: '#bfbfbf',
  },
  bigpic: {
    width: 300,
    height: 300,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E0E0E0',
    aspectRatio: 1,
  },
  CardTimeText: {
    fontSize: 12,
    color: 'black',
  },
  CardDetail: {
    height: '100%',
    width: '100%',
    shadowColor: '#bfbebe',
    marginTop: 10,
    marginBottom: 65,
  },
  DetailTitle: {
    textAlign: 'left',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  name: {
    marginLeft: 45,
    fontSize: 24,
    // fontWeight: 'bold',
    color: '#28527A',
  },
  nameheader: {
    flex: 9,
    alignItems: 'center',
    width: 'auto',
    borderRadius: 50,
    justifyContent: 'center',
  },
  showActivityDetails_container: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    paddingTop: 52.5,
    backgroundColor: 'white',
  },
  imageDotNoHere: {
    color: '#C4C4C4',
    marginHorizontal: 2.5,
  },
  imageDotIsHere: {
    color: '#F4D160',
    marginHorizontal: 2.5,
  },
  sentMessage: {
    borderRadius: 30,
    width: 130,
    height: 38,
    paddingVertical: 4,
    marginVertical: 51,
    backgroundColor: '#28527A',
    marginLeft: Dimensions.get('window').width * 0.3,
  },
  sentButtonText: {
    fontSize: 14,
    textAlign: 'center',
    paddingTop: 5,
    color: '#FBEEAC',
    fontWeight: 'bold',
  },
  shareBox: {
    width: 414,
    height: 380,
    marginTop: 36,

  },
});
