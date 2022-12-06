import React, { useState } from 'react';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text,TextInfo,Image,Description,styles } from './style';


const Card = () => {
 
 return (
    
  <TouchableOpacity  style={styles.wrap}>
    <Image
      source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
    />
    <Description>
      <Text>Douglas</Text>
      <TextInfo>5 meses</TextInfo>
      <TextInfo>YorkShire</TextInfo>

    </Description>
  </TouchableOpacity>
    
   
  );
};

export default Card;


