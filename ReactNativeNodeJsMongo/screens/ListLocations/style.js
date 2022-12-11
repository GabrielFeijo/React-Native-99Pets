import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
    alignItems: 'center',
  },
  icone: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  textIcone: {
    fontSize: 18,
    fontFamily: 'Montserrat_500Medium',
  },
});
