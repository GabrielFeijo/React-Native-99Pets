import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Titulo = styled.Text`
    color:#8B8585;
    font-size: 24px;
    font-weight: bold;
    font-family: Montserrat_700Bold; 
    margin-top:20px;

`;
export const Input = styled.TextInput`
    width: 100%;
    font-size:15px;
    font-family: Montserrat_500Medium;  
    color: #8B8585;
    borderBottomColor: #D9D9D9;
    borderBottomWidth: 2px;
    margin: 20px 0;
    padding-bottom: 10px;  
`;



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
