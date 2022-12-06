import React, { useState } from 'react';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import { Icon } from 'react-native-elements'
import {  View,Text,Image} from 'react-native';
import { styles } from './style';

export const NineMenu = () => {
    const [visible, setVisible] = useState(false);

    const hideMenu = () => setVisible(false);
  
    const showMenu = () => setVisible(true);
    return(
        <View  style={styles.flex}> 
        <Menu
           visible={visible}
           anchor={<Text onPress={showMenu}>   <Icon name='menu' type='feather'  size={30} /></Text>}
           onRequestClose={hideMenu}
           style={styles.boxMenu} 
           
         >
           <MenuItem onPress={hideMenu} style={styles.menu} >
              <View style={styles.viewMenu}>
                <Icon name='person' type='simplelineicons'  size={35} />
                <Text style={styles.menuText}>Meu Perfil</Text>
              </View>
            </MenuItem>
           <MenuDivider />
           <MenuItem onPress={hideMenu} style={styles.menu}>
             <View style={styles.viewMenu}>
               <Icon name='guide-dog' type='foundation'  size={35} />
                <Text style={styles.menuText}>Meus Animais</Text>
              </View>
             </MenuItem>
           <MenuDivider />
           <MenuItem onPress={hideMenu} style={styles.menu}>
              <View style={styles.viewMenu}>
                <Icon name='shop' type='entypo'  size={35} />
                <Text style={styles.menuText}>Pet Shops</Text>
              </View>
            </MenuItem>
           <MenuDivider />
           <MenuItem onPress={hideMenu} style={styles.menu}>
              <View style={styles.viewMenu}>
                <Icon name='people' type='simplelineicons'  size={35} />
                <Text style={styles.menuText}>Equipe</Text>
              </View>                
            </MenuItem>
         </Menu>
         <Image
             style={styles.image}
             source={require('../../assets/images/mini.png')}
           />
           <Icon name='logout' type='simplelineicons'  size={30} />
      </View>
    )
 
}