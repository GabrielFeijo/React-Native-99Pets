import styled from 'styled-components/native';
import {  StyleSheet } from "react-native";


export const Text = styled.Text`
  font-family: Montserrat_400Regular; 
  font-weight: 600;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.57);
  margin: 5px;
`;



export const styles = StyleSheet.create({
  root:{
    flex:1,
    alignItems:"center",
    justifyContent:"space-between",
    paddingBottom:40
   
  },
  wrap: {
    minWidth:350,
    maxHeight:240 
  }   
    
});


  
