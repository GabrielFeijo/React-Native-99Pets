import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Titulo = styled.Text`
  color: black;
  font-size: 24px;
  font-weight: bold;
  font-family: Montserrat_500Medium; 
  margin-top:20px;
`;

export const Text = styled.Text`
  font-family: Montserrat_400Regular; 
  font-weight: 600;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.57);
  margin: 5px;
`;

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
  texto: {
    maxWidth: 350,
  },
});
