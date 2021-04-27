import { StyleSheet } from 'react-native'
import {COLOR_PRIMARY,COLOR_SECONDARY,COLOR_WHITE,COLOR_GREY} from '../Utility/color'
export default StyleSheet.create({
container: {
flex: 1
},
sendButton:{
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
SectionStyle: {
flexDirection: 'row',
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#fff',
borderWidth: .5,
borderColor: COLOR_SECONDARY,
height: 40,
borderRadius: 5 ,
marginLeft: 40,
marginRight:40,
marginTop:40
},
ImageStyle: {
padding: 10,
margin: 10,
height: 20,
width: 20,
resizeMode : 'stretch',
alignItems: 'center'
},
forgotImageStyle: {
flexGrow:1,
height:null,
width:null,
resizeMode: 'contain'
},
forgotPasswordText:{
color:COLOR_PRIMARY,
textAlign:'center',
paddingLeft : 10,
paddingRight : 10,
fontSize:18,
marginTop:25
},
forgotPasswordDetailText:{
color:COLOR_GREY,
textAlign:'center',
paddingLeft : 10,
paddingRight : 10,
fontSize:18,
marginTop:20,
marginBottom:30
},
sendText:{
color:COLOR_WHITE,
textAlign:'center',
paddingLeft : 10,
paddingRight : 10,
},
footer:{
position: 'absolute', marginBottom:20, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'
}
})
