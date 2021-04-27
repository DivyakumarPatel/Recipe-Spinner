import * as React from 'react';
import { Text, View, TextInput,StyleSheet,TouchableOpacity,Image,Keyboard} from 'react-native';
import styles from './ChangePasswordStyle';
import {COLOR_PRIMARY,COLOR_WHITE,COLOR_SECONDARY} from '../Utility/color';
import  Api from '../Utility/Api';
import * as String from '../Utility/String';
import Toast, {DURATION} from 'react-native-easy-toast';
import {Container,Icon,Header,Left,Right,Body,Title,Button} from 'native-base'
  class ChangePassword extends React.Component {

    constructor(){
    super()
    this.fields = {};
    this.state={
    }
  }

  static navigationOptions = {
    title: 'Change Password',
    headerStyle: { backgroundColor: COLOR_PRIMARY,textColor: COLOR_WHITE},
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
     }else if(!this.fields.password){
       msg = String.PASSWORD_ERROR
     }else if(this.fields.password.length<6){
       msg = String.PASSWORD_LENGTH_ERROR
     }else if(this.fields.password !== this.fields.confirmPassword){
       msg = String.PASSWORD_MATCH_ERROR
     }
       if(msg){
         this.refs.toast.show(msg,2000);
    //    this.refs.toast.show(msg,2000);
       }else{

         Api.SignUp(this.fields).then(response=>{
             if(response.status == 200){
          this.props.navigation.navigate('Home')
         }
         else{
          this.refs.toast.show(response.message,2000)
         }
       })
        // this.refs.toast.show(Api.SignUp(this.fields),2000);
       }
 }

moveToSignIn(){
       this.props.navigation.navigate('ForgotPassword')
   }

  render() {
    return (

      <Container style={styles.container}>

        <View style={styles.SectionStyle}>
          <Image source={require('../../assets/ic_password.png' )} style={styles.ImageStyle} />
          <TextInput style={{flex:1,color:COLOR_PRIMARY,fontSize:15}} placeholder="Current Password" secureTextEntry={true} underlineColorAndroid="transparent" onChangeText={(text)=>this.fields.password=text}/>
        </View>

        <View style={styles.SectionStyle }>
          <Image source={require('../../assets/ic_password.png' )} style={styles.ImageStyle} />
          <TextInput style={{flex:1,color:COLOR_PRIMARY,fontSize:15}} placeholder="New Password" secureTextEntry={true} underlineColorAndroid="transparent" onChangeText={(text)=>this.fields.password=text}/>
        </View>

        <View style={styles.SectionStyle }>
          <Image source={require('../../assets/ic_password.png' )} style={styles.ImageStyle} />
          <TextInput style={{flex:1,color:COLOR_PRIMARY,fontSize:15}} placeholder="Confirm New Password" secureTextEntry={true} underlineColorAndroid="transparent" onChangeText={(text)=>this.fields.confirmPassword=text}/>
        </View>

        <TouchableOpacity onPress={()=>this.validate()} style={styles.signInButton} underlayColor='#fff'>
        <Text style={styles.signInText}> Change Password </Text>
        </TouchableOpacity>
        <Toast
            ref="toast"
            style={{backgroundColor:COLOR_SECONDARY,bottom:40}}
            position='bottom'
            positionValue={50}
            opacity={0.8}
            textStyle={{color:'white'}}/>
      </Container>
    );
  }
}
export default ChangePassword
