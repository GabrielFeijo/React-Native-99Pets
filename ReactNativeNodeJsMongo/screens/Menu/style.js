import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  flex: {
    flex: 1,
    maxHeight: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
  image: {
    width: 56,
    height: 56,
  },
  boxMenu: {
    width: 230,

    borderRadius: 10,
    backgroundColor: '#FFBD59',
  },
  menu: {
    backgroundColor: '#FFBD59',
    height: 65,
    borderRadius: 10,
    paddingLeft: 10,
  },
  menuText: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 20,
    paddingLeft: 10,
  },
  viewMenu: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
});
