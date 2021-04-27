import * as React from 'react';
import { Text, View, TextInput,StyleSheet,Image,ScrollView,KeyboardAvoidingView,ActivityIndicator,StatusBar } from 'react-native';
import {Container,Content,Icon,Header,Left,Right,Button,Body,Title,Fab} from 'native-base'
import {withNavigation } from 'react-navigation';
import {COLOR_PRIMARY,COLOR_WHITE,COLOR_SECONDARY} from '../Utility/color'

const DrawerHeader= (props) =>{
  return(
 <Header style={{backgroundColor:COLOR_PRIMARY}} >
     
        <Left>
          <Button transparent>
            <Icon name="menu" onPress={()=>props.navigation.toggleDrawer()}/>
          </Button>
        </Left>
        <Body>
          <Title>{props.title}</Title>
        </Body>
        <Right>
        </Right>
         <StatusBar
     backgroundColor='#123456'
     barStyle="light-content"
   />
      </Header>
  );
};;
export default withNavigation(DrawerHeader);
