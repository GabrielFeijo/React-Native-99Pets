import styled from 'styled-components/native';
import {  StyleSheet } from "react-native";


export const TextInfo = styled.Text`
  color: black;
  font-size: 16px;
  font-weight: bold;
  font-family: Montserrat_500Medium; 
  margin-top:20px;
  
`;
export const Box = styled.View`
position: absolute;
width: 100%;
height: 100%;
display:flex;
background-color: #00000057;
  
`;
export const ConfirmBox = styled.View`
  background-color: white;
  margin:auto;
  width: 326px ;
 
  padding: 15px 10px;
  border-radius: 16px;
  text-align: center;
  align-items:center;
  
`;
export const TituloBox = styled.Text`
  color:rgba(0, 0, 0, 0.59);
  font-size: 24px;
  font-weight: bold;
  font-family: Montserrat_700Bold; 



  
`;




export const styles = StyleSheet.create({
  root:{
    flex:1,
    alignItems:"center",
    justifyContent:"space-between",
    paddingBottom:40
   
  },
  wrap: {
    maxWidth:350,
    maxHeight:330 
  },
  
  center:{
    textAlign:"center",
    fontSize:16,
    color: "rgba(0, 0, 0, 0.69)"
  },
  botao:{
    width: 225
  }
  
    
});


  
