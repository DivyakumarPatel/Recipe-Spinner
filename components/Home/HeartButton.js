import * as React from 'react';
import {PropTypes} from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import COLOR_SECONDARY from '../Utility/color';
import{
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default class HeartButton extends React.Component{
  constructor(props){
    super(props);
    this.state = {addedToFavorite : false};
   // this.addToFavorite = this.addToFavorite.bind(this);
  }

  addToFavorite(){
    this.setState({
      addedToFavorite: !this.state.addedToFavorite
    });
  }

  render(){
    const {addedToFavorite}=this.state;
    return (
      <TouchableOpacity
        onPress={()=>this.addToFavorite()}
      >
        <View>
          <Icon name={addedToFavorite ? 'heart' : 'heart-o'}
          size={28}
          color={'#D94A52'}/>
        </View>
      </TouchableOpacity>
    );
  }
}
