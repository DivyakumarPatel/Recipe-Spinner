import * as React from 'react';
import { Text, View, TextInput,StyleSheet,Button,TouchableOpacity,Image,KeyboardAvoidingView,Keyboard, Dimensions} from 'react-native';
// import styles from './SignInStyle';
import Toast, {DURATION} from 'react-native-easy-toast';
import  Api from '../Utility/Api';
import {COLOR_PRIMARY,COLOR_WHITE,COLOR_SECONDARY} from '../Utility/color';
import * as String from '../Utility/String';
import AsyncStorage from '@react-native-async-storage/async-storage';
class SignIn extends React.Component {

  constructor(){
  super()
  this.fields = {};
  this.state={users:[],msg:"",admin:"User"
  }
}

static navigationOptions = {
  title: 'Sign In',
  headerStyle: { backgroundColor: COLOR_PRIMARY,shadowColor: COLOR_PRIMARY,
  shadowOffset: { width: 0, height: 0 },
  shadowOpacity: 0,
  elevation: 0,
  },
  headerTintColor: COLOR_WHITE,
};

moveToForgotPassword(){
  this.props.navigation.navigate('ForgotPassword', {
         itemId: 86,
         otherParam: '',
       })
}

validate= async () =>{
 Keyboard.dismiss();
 let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
 let msg ='';
  if(!this.fields.email){
    msg = String.EMAIL_ERROR
  }else if(!this.fields.email.match(reg)){
    msg = String.EMAIL_ERROR
  }else if(!this.fields.password){
    msg = String.PASSWORD_ERROR
  }
    if(msg){
      this.refs.toast.show(msg,2000);
 //    this.refs.toast.show(msg,2000);
    }
    else{
      // this.moveToHome()
      // console.log(this.fields.email)
      // console.log(this.fields.password)
      // console.log(this.state.users)

      const filteredArray = this.state.users.filter( user => user.email == this.fields.email && user.password ==this.fields.password);
console.log(filteredArray);
console.log(filteredArray.length)
if(this.fields.email=="admin@user.com" && this.fields.password=="123456"){
  // this.props.navigation.navigate('MyFridge');
  await AsyncStorage.setItem('@admin', this.fields.email)
  this.props.navigation.navigate('Home', {
  })
  // console.log("hello")
}

if(filteredArray.length>0){
   await AsyncStorage.setItem('@admin', this.fields.email)
  this.setState({msg:"Login Successfull"});
  Api.SignUp(this.fields)

  this.props.navigation.navigate('Home', {
 })



}else{
  this.setState({msg:"Login Failed"})
}
      //    Api.Login(this.fields)
      //    .then(response=>{
      //        if(response.status == 200){
      //     this.moveToHome()
      //    }
      //    else{

      //     this.refs.toast.show(response.message,2000)
      //    }
      //  })


        // this.refs.toast.show(Api.SignUp(this.fields),2000);
       }

  }

  componentDidMount(){
    this.getData();
  }
   getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@admin')
      if(value !== null) {
        // return value
        // value previously stored
        this.setState({admin:value})
        console.log(value)
      }else{
        // this.setState({allRecipe:[]})
        // return null
      }
    } catch(e) {
      console.log(e)
      // error reading value
    }
  }
moveToHome(){
this.props.navigation.navigate('Home')
}

render() {
return (

    <View>
 <Text style={{color:'white'}}>{this.state.admin}</Text>
 </View>
);
}
}

export default SignIn
