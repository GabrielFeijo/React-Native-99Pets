import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  loadingScreen: {
    position: 'absolute',

    display: 'flex',
    width: '100%',
    height: '110%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0008',
    opacity: 1,
    zIndex: 9999,
  },
  root: {
    flex: 1,

    justifyContent: 'space-around',
    alignContent: 'space-between',
    alignItems: 'center',
  },
  center: {
    alignItems: 'center',
  },
  wrap: {
    flex: 1,

    justifyContent: 'space-evenly',
    alignContent: 'center',
  },
  image: {
    width: 180,
    height: 180,
  },
});
