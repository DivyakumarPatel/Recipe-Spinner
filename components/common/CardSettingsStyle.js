import { StyleSheet } from 'react-native'
import {COLOR_PRIMARY,COLOR_SECONDARY,COLOR_WHITE} from '../Utility/color'
export default StyleSheet.create({
  ArroweStyle: {
    position:'absolute',
    right:0,
    height: 20,
    width: 10,
    marginRight: 15,
},
CardStyle:{
  marginLeft:0,
  marginRight:0,
  marginTop:-7,
  padding:0,
},
ImageStyle: {
  padding: 10,
  margin: 10,
  height: 25,
  width: 25,
  resizeMode : 'stretch',
  alignItems: 'center'
  },
  CardTitleStyle:{
    color: COLOR_PRIMARY,
    fontSize: 17,
    paddingLeft: 5,
  },
})
