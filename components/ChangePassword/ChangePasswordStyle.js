import { StyleSheet } from 'react-native'
import {COLOR_PRIMARY,COLOR_SECONDARY,COLOR_WHITE} from '../Utility/color'
export default StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor:COLOR_WHITE
  },
   loginScreenButton:{
    marginRight:40,
    marginLeft:40,
   marginTop:20,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor: COLOR_SECONDARY,
    borderRadius:5,
    borderWidth: 1,
    borderColor: '#fff'
  },
  loginText:{
      color:COLOR_WHITE,
      textAlign:'center',
      paddingLeft : 10,
      paddingRight : 10
  },  
  SectionStyle: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fff',
  borderWidth: .5,
  borderColor: COLOR_SECONDARY,
  height: 45,
  borderRadius: 5 ,
  marginLeft: 40,
  marginRight:40,
  marginTop:25
  },
  ImageStyle: {
  padding: 10,
  margin: 10,
  height: 20,
  width: 20,
  resizeMode : 'stretch',
  alignItems: 'center'
  },
   signInButton:{
    marginRight:40,
    marginLeft:40,
   marginTop:25,
    paddingTop:15,
    paddingBottom:15,
    backgroundColor: COLOR_SECONDARY,
    borderRadius:5,
    borderWidth: 1,
    borderColor: '#fff'
  },
  signInText:{
      color:COLOR_WHITE,
      textAlign:'center',
      paddingLeft : 10,
      paddingRight : 10,
  }
})