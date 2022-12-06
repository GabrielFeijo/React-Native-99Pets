import styled from 'styled-components/native';
import {  StyleSheet } from "react-native";

export const Titulo = styled.Text`
  color: black;
  font-size: 24px;
  font-weight: bold;
  font-family: Montserrat_400Regular; 
  margin-top:20px;
`;

export const Text = styled.Text`
  font-family: Montserrat_700Bold; 
  font-weight: 700;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.57);
  
`;

export const TextInfo = styled.Text`
  font-family: Montserrat_500Medium; 
  font-size:16px;
  color: rgba(0, 0, 0, 0.57);
  margin-top: 5px ;
  
`;
export const Image = styled.Image`
  width: 164px;
  height: 200px;
  border-radius: 16px;
`;
export const Description = styled.View`
  height: 150px;
  borderTopRightRadius: 16px;
  borderBottomRightRadius: 16px;
  position: relative;
  padding: 5px; 
  background-color: white;
  flex: 1;
  justify-content: center;
`;



export const styles = StyleSheet.create({
     wrap: {
      flex: 1,  
      flexWrap:"wrap",
      justifyContent:"center",
   
      flexDirection:"row",
      alignItems:"center",
      marginVertical:10
      

      
    },

   
   
    
  });

