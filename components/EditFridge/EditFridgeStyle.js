import { StyleSheet } from 'react-native'
import {COLOR_PRIMARY,COLOR_SECONDARY,COLOR_WHITE,COLOR_GREY} from '../Utility/color'
export default StyleSheet.create({
  container: {
      flex: 1
  },
  category:{
  paddingTop:10,
  paddingBottom:10,
  backgroundColor: COLOR_SECONDARY,
},
subCategoryStyle:{
  borderWidth: 1,
  borderColor: '#123456',
  backgroundColor: '#123456',
  marginLeft:15,
  marginTop:10
},
subCategorySelectedStyle:{
  borderWidth: 1,
  borderColor: '#D94A52',
  color:'#ffffff',
  backgroundColor: '#D94A52',
  marginLeft:15,
  marginTop:10
},
categoryText:{
  color:'#123456',
  fontSize: 17,
  paddingLeft:15,
  marginTop:12,
  marginBottom:12,
},
separator:{
  borderBottomColor: COLOR_GREY,
  borderBottomWidth: 0.5,
},
viewStyle:{
  backgroundColor: COLOR_WHITE,
},
labelStyle:{
  color: COLOR_WHITE,
},
footer:{
  flexDirection: 'row',position: 'absolute',
   paddingBottom:15, left: 0, 
   paddingTop:15,
   height:60,
   right: 0, bottom: 0, 
   justifyContent: 'center', alignItems: 'center',
   backgroundColor:COLOR_SECONDARY
  },
})
