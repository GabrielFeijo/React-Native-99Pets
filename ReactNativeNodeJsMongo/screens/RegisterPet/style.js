import styled from 'styled-components/native';
import {  StyleSheet } from "react-native";

export const Titulo = styled.Text`
  color: black;
  font-size: 24px;
  font-weight: bold;
  font-family: Montserrat_400Regular; 
  margin-top:20px;
`;

export const ViewFoto = styled.TouchableOpacity`
  position: relative;
  width: 190px;
  height: 190px;
  background-color: #8B8585;
  margin: auto;
  border-radius: 16px;
  
  display:flex;
  justify-content:center;
  align-content:center;

`;
export const MainButton = styled.TouchableOpacity`
    display: block;
    width: 297px;
    padding: 10px;
    background-color: #FFBD59;
    border-radius: 16px;
    border: none;
    margin:10px auto;
    transition: 0.5s;
}
`;



export const styles = StyleSheet.create({
    root: {
      flex: 1,     
   
      justifyContent:"space-around",
      alignContent:"space-between",
      alignItems:"center",
     
    },
    center:{
        alignItems:"center",
      
    },
    wrap: {
      flex: 1,     
      justifyContent:"space-around",
      alignContent:"center",   
    },
    image: {
      width: 180,
      height: 180
    },
    desc:{
      color:"white",
      marginTop:10,
      fontSize:20,
      fontFamily: "Montserrat_400Regular",
      textAlign:"center",
    },
     modalView: {
      position: 'absolute',
      bottom: 2,
      width: '100%',
      backgroundColor: 'white',
    },
    modalButtonView: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10,
    },
    
  });

//  width: 130px;
//     font-family: 'OpenSans-Regular',Arial, Helvetica, sans-serif;
//     color: white;
//     margin-top: 10px;