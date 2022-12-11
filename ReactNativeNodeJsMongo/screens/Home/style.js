import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Button = styled.TouchableOpacity`
    width: 297px;
    padding: 10px;
    background-color: #FFBD59;
    border-radius: 16px;
    border: none;
    margin:10px auto;
    transition: 0.5s;
}
`;
export const ButtonText = styled.Text`
    color: #FFFFFF;
    text-align:center;
    font-size: 20px;
    font-weight: bold;
    font-family: Montserrat_700Bold;    
   
`;

export const LoginText = styled.Text`
    
    color: #8B8585;
    font-family: Montserrat_500Medium;    
    text-align:center;
  

`;

export const Line = styled.View`
    display: inline;
    width: 50px;
    height: 2px;
    background-color:#D9D9D9;


   
`;

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  logo: {
    width: 180,
    height: 180,
    borderRadius: 100,
  },
  txtLogin: {
    display: 'inline',
    color: '#8B8585',
  },
});

//   .txt-login{
//     display: inline;
//     font-family:'OpenSans-Regular',Arial, Helvetica, sans-serif ;
//     color: #8B8585;
//     line-height: 100%;
