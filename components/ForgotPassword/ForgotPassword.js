import * as React from 'react';
import { Text, View, TextInput,StyleSheet,Button,TouchableOpacity,Image,ScrollView,KeyboardAvoidingView,Keyboard } from 'react-native';
import styles from './ForgotPasswordStyle';
import Toast, {DURATION} from 'react-native-easy-toast';
import  Api from '../Utility/Api';
import {COLOR_PRIMARY,COLOR_WHITE,COLOR_SECONDARY} from '../Utility/color';
import * as String from '../Utility/String';

class ForgotPassword extends React.Component {

  constructor(){
  super()
  this.fields = {};
  this.state={
  }
}

static navigationOptions = {
  title: '',
  headerStyle: { backgroundColor: COLOR_PRIMARY,shadowColor: '#000',
  shadowOffset: { width: 0, height: 0 },
  shadowOpacity: 0,
  elevation: 0,
  },
  headerTintColor: COLOR_WHITE,
};

validate(){
 Keyboard.dismiss();
 let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
 let msg ='';
  if(!this.fields.email){
    msg = String.EMAIL_ERROR
  }else if(!this.fields.email.match(reg)){
    msg = String.EMAIL_ERROR
  }
    if(msg){
      this.refs.toast.show(msg,2000);
 //    this.refs.toast.show(msg,2000);
    }
  }

moveToLogin(){
this.props.navigation.navigate('Login')
}
   componentWillMount(){
    debugger;
console.log("welcome to sign")
   }

render() {
return (
  <View style={styles.container}>
    <View style={{flex:2,backgroundColor: COLOR_PRIMARY,justifyContent:"center",alignItems:"stretch"}}>
      <Image source={require('./ic_man_forgot_password.png')} style={styles.forgotImageStyle} />
    </View>
    <View style={{flex:3,backgroundColor: COLOR_WHITE}} >
      <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
      <Text style={styles.forgotPasswordDetailText}>Enter your email below to receive your password instructions.</Text>
    <View style={styles.SectionStyle}>
      <Image style={styles.ImageStyle} source={require('./ic_email.png')} />
      <TextInput style={{flex:1,color:COLOR_PRIMARY,fontSize:15,paddingLeft:10}} placeholder="Email" underlineColorAndroid="transparent"  onChangeText={(text)=>this.fields.email=text}/>
    </View>
    <TouchableOpacity style={styles.sendButton} underlayColor='#fff' onPress={()=> this.validate()}>
    <Text style={styles.sendText}> Send </Text>
    </TouchableOpacity>
    </View>
    <Toast
        ref="toast"
        style={{backgroundColor:COLOR_SECONDARY,bottom:40}}
        position='bottom'
        positionValue={50}
        opacity={0.8}
        textStyle={{color:'white'}}/>
</View >

);
}
}

export default ForgotPassword
