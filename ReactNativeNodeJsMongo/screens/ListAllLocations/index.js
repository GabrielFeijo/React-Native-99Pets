import React, { useState } from 'react';
import {  View,ScrollView} from 'react-native';
import { styles } from './style';
import { Titulo,Text } from '../ListPets/style';
import { Icon } from 'react-native-elements'
import { NineMenu } from '../Menu'
import {Card2} from '../Card';
import { TouchableOpacity } from 'react-native-gesture-handler';

const AllLocations = (props) => {


 return (
     <>
        <NineMenu/>
        <View  style={styles.wrap}>

        <ScrollView   showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false} > 
            <Titulo>Nossos Pet Shops</Titulo>
            <Text >Estes são os Pet Shops mais bem avaliados do nosso aplicativo. Os Pet Shops passaram por uma série de avaliações para estarem hoje trabalhando conosco.</Text>
              <Card2    
                url={require(`../../assets/images/local1.png`)}
                nome={"Pet Shop 1"}
                info={"Casa Forte"}
                quantidade={5}            
                />        
              <Card2   
                  url={require(`../../assets/images/local2.png`)}
                nome={"Pet Shop 2"}
                info={"Boa Vista"}
                quantidade={5}                 
                />            
              <Card2   
               url={require(`../../assets/images/local3.png`)}
           
                nome={"Pet Shop 3"}
                info={"Prado"}
                quantidade={5}                
                />          
            
          </ScrollView >
        </View>
     </>
   
  );
};

export default AllLocations;


