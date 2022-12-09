import React, { useState,useEffect  } from 'react';
import {  View,ScrollView, Alert} from 'react-native';
import { Titulo,Text,styles } from './style';
import { Icon } from 'react-native-elements'
import { NineMenu } from '../Menu'
import {Card} from '../Card';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useIsFocused } from '@react-navigation/native';
let organizado = []
const PhotoPet = (props) => {
  const [pets, setPets] = useState(false);
  const  userid  = props.route.params.usuario

  const isFocused = useIsFocused();

  useEffect(() => {
    setPets(false)
    fetchData(userid)
  }, [isFocused]);

 

  const fetchData = (id) => {
 
    fetch('https://99-pets-api.gabrielfeijo.repl.co/myPets?userid='+id)
      .then((res) => res.json())
      .then((results) => {
        organizado = []        
        for (let i=0;i<results.length;i++){
          organizado.push(results[i])
        }
        setPets(organizado)
        console.log(organizado)
        })
      .catch((err) => {
        Alert.alert('Algo deu errado!');
      });
  };

 return (
     <>
        <NineMenu/>
        <View  style={styles.wrap} >

        <ScrollView   showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false} > 
            <Titulo>Qual pet vamos cuidar hoje?</Titulo>
            <Text >Se o seu pet não estiver na lista, pode adicioná-lo clicando no botão abaixo.</Text>

            {pets ? (pets.map((pet) =>                        
                <TouchableOpacity  onPress={() => { props.navigation.navigate("ServicePet",pet._id)}} key={pet._id+"gg"}> 
                <Card    
                  nome={pet.nome}
                  info={pet.idade}
                  info2={pet.raca}   
                  url={pet.picture}         
                  />
              </TouchableOpacity>                   
            ) ) : (
              <Card    
              nome={"Sem registro de Pets"}
              info={""}
              info2={""}   
              url={"https://i.imgur.com/4LSmGYF.png"}         
              />
            )}
     
        
                    
            <TouchableOpacity style={styles.icone} onPress={() => { props.navigation.navigate("CadastroPet",userid)}}>
              <Icon name='pluscircleo' type='antdesign'/> 
              <Text style={styles.textIcone}>Adicionar novo pet</Text>
            </TouchableOpacity>
          </ScrollView >
        </View>
     </>
   
  );
};

export default PhotoPet;


