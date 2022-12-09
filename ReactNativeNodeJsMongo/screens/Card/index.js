import React, { useState } from 'react';
import {  TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements'
import { Text,TextInfo,Image,Description,styles } from './style';


export const Card = ({ id,nome,info,info2,url }) => {
 
 return (
    
  <TouchableOpacity  style={styles.wrap} >
    <Image
      source={{uri: url}}
    />
    <Description>
      <Text>{nome}</Text>
      <TextInfo>{info}</TextInfo>
      <TextInfo>{info2}</TextInfo>
     

    </Description>
  </TouchableOpacity>
    
   
  );
};

export const Card2 = ({ id,url,nome,info,quantidade }) => {
  let stars = []
  for (let i=0;i<quantidade;i++){
    stars.push(<Icon name='star' type='FontAwesome'  size={30} color="#ffc107" key={"gg"+i}/>)
  }

  return (
     
   <TouchableOpacity  style={styles.wrap} >
     <Image     
       source={url}
     />
     <Description>
       <Text>{nome}</Text>
       <TextInfo>{info}</TextInfo>
       <TextInfo>{stars}</TextInfo>
      
 
     </Description>
   </TouchableOpacity>
     
    
   );
 };


 export const CardEquipe = ({nome,info,info2,url }) => {
 
  return (
     
   <TouchableOpacity  style={styles.wrap} >
     <Image
       source={url}
     />
     <Description>
       <Text>{nome}</Text>
       <TextInfo>{info}</TextInfo>
       <TextInfo>{info2}</TextInfo>
      
 
     </Description>
   </TouchableOpacity>
     
    
   );
 };