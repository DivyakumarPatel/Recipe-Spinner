import React,{Component} from 'react';
import {View,Text,Image,TouchableOpacity} from 'react-native';
import Card from './CardSection'
import {COLOR_PRIMARY,COLOR_WHITE} from '../Utility/color';
import { withNavigation } from 'react-navigation';
import HeartButton from '../Home/HeartButton';

const RecipeList= (props) =>{
  return(
    <TouchableOpacity onPress={()=>props.navigation.navigate('RecipeDetail',{data:props.data})}>
    <Card>
    <View style={{width:'100%'}} >
      <View style={{position: 'absolute',
            right: 12,
            top: 7,
            zIndex: 2}}>
            <HeartButton />
        </View>
    <Image style= {{
                    height: 200,
                    width: '100%',
                    alignItems: 'center',
                    resizeMode : 'cover',
                  }}
      source={{uri:props.data.image}}/>

    <Text style={{color: COLOR_PRIMARY,
                  fontSize: 16,
                  paddingTop: 5,
                  paddingLeft: 15,
                  fontWeight: '600',
                  paddingRight: 15}}>
      {props.data.title}</Text>
    </View>
    </Card>
    </TouchableOpacity>
  );
};;
export default withNavigation(RecipeList);
