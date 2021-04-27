import * as React from 'react';
import { Text, View, StyleSheet,Image} from 'react-native';
import {Content,Icon,Left,Header,Container,Button,Body,Title,Right} from "native-base"
import Home from '../Home/Home';
import MyFridge from '../MyFridge/MyFridge';
import MyRecipe from '../MyRecipe/MyRecipe';
import Favourites from '../Favourites/Favourites';
import Settings from '../Settings/Settings'
import Login from '../Login/Login'
import Name from './Name'
import {COLOR_PRIMARY,COLOR_SECONDARY,COLOR_WHITE} from '../Utility/color';
import {DrawerNavigator,DrawerItems } from 'react-navigation';
import {MY_FRIDGE,MY_RECIPE,FAVOURITES,SETTINGS} from '../Utility/String'
import AsyncStorage from '@react-native-async-storage/async-storage';

const CustomDrawerContentComponent =  (props) => {
  

  return(

  <Container>
    <Header style={styles.drawerHeader}>
      <Body style={styles.bodyStyle}>
        <Image
          style={styles.drawerImage}
          source={require('../../assets/ic_user_dummy.png')} />
          <Text style={{marginTop:5, color:COLOR_WHITE}}></Text>
          <Name/>
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props} />
    </Content>
  </Container>
)};

const drawer =  DrawerNavigator({

  	Home: {
    	screen: Home,
			navigationOptions: {
        drawerLabel: 'Home',
            drawerIcon: ({tintColor}) => (
                <Image
                  source={require('../../assets/ic_home.png')}
                  style={[styles.icon,{tintColor: tintColor}]}
                />
              ),
    }
  	},
		MyFridge: {
		    	screen: MyFridge,
          navigationOptions: {
            drawerLabel: MY_FRIDGE,
                 drawerIcon: ({tintColor}) => (
                    <Image
                      source={require('../../assets/refrigerator.png')}
                      style={[styles.icon,{tintColor: tintColor}]}
                    />
                  ),
        }
		 },
     MyRecipe: {
          screen: MyRecipe,
          navigationOptions: {
            drawerLabel: "Admin",
                 drawerIcon: ({tintColor}) => (
                    <Image
                      source={require('../../assets/myRecipe.png')}
                      style={[styles.icon,{tintColor: tintColor}]}
                    />
                  ),
        }
     },
     
     Favourites: {
          screen: Login,
          navigationOptions: {
            drawerLabel: 'Login',
                 drawerIcon: ({tintColor}) => (
                    <Image
                      source={require('../../assets/favourites.png')}
                      style={[styles.icon,{tintColor: tintColor}]}
                    />
                  ),
        }
     },
     Settings: {
          screen: Settings,
          navigationOptions: {
            drawerLabel: SETTINGS,
                 drawerIcon: ({tintColor}) => (
                    <Image
                      source={require('../../assets/ic_settings.png')}
                      style={[styles.icon,{tintColor: tintColor}]}
                    />
                  ),
        }
     },
//      Login: {
//       screen: Login,
//       navigationOptions: {
//         drawerLabel: SETTINGS,
//              drawerIcon: ({tintColor}) => (
//                 <Image
//                   source={require('../../assets/ic_settings.png')}
//                   style={[styles.icon,{tintColor: tintColor}]}
//                 />
//               ),
//     }
//  }

},{
	initialRouteName: 'Home',
	 contentOptions: {
		 activeTintColor: COLOR_SECONDARY,
		 inactiveTintColor: COLOR_PRIMARY,
	 },
	contentComponent: CustomDrawerContentComponent
});

const styles = StyleSheet.create({
  drawerHeader: {
    height: 200,
    backgroundColor: COLOR_PRIMARY,
		paddingTop:20
  },
	bodyStyle:{
		justifyContent: 'center',
	 alignItems: 'center'
 },
  drawerImage: {
    height: 100,
    width: 100,
    borderRadius: 50
  },
  icon:{
    height:30,
    width:30,
  },

});
export default drawer;
