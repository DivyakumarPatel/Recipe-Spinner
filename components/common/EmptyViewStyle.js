import { StyleSheet } from 'react-native'
import {COLOR_PRIMARY,COLOR_SECONDARY,COLOR_WHITE} from '../Utility/color'
export default StyleSheet.create({
container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  },
  emptyImageStyle:{
    height: 150,
    width: 150,
  },
  textStyle:{
    fontSize: 16,
    marginTop: 15,
  },
  button:{
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
  buttonText:{
      color:COLOR_WHITE,
      textAlign:'center',
      paddingLeft : 10,
      paddingRight : 10
  },
});