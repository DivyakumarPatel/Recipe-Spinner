import * as React from 'react';
import { Text, View, TextInput,StyleSheet,TouchableOpacity,ScrollView,StatusBar} from 'react-native';
import {Container,Content,Icon,Header,Left,Right,Button,Body,Title,Fab} from 'native-base'
import {MY_FRIDGE} from '../Utility/String'
import styles from './EditFridgeStyle';
import {COLOR_PRIMARY,COLOR_WHITE,COLOR_SECONDARY,COLOR_GREY} from '../Utility/color'
import DrawerHeader from '../common/DrawerHeader';
import { TagSelect } from 'react-native-tag-select';
import Accordion from 'react-native-collapsible/Accordion';
    const data = {
  "fruits" : [
    {
      "id":1,
      "label" : "Apple",
      "image" : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/265px-Red_Apple.jpg",
      "price" : 35
    }
  ],

  "vegetables" : [
    {
      "id":6,
      "label" : "Tomato",
      "image" : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/265px-Red_Apple.jpg",
      "price" : 35
    }
  ],  "Grocery" : [
    {
      "id":5,
      "label" : "Tomato",
      "image" : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/265px-Red_Apple.jpg",
      "price" : 35
    }
  ]
}

const SECTIONS = [];
Object.keys(data).forEach(function(key) {
var tifOptions = {}
    tifOptions.title =key;
    tifOptions.content =data[key];
    SECTIONS.push(tifOptions)
})

class EditFridge extends React.Component {

  static navigationOptions = {
    title: 'Add',
    headerStyle: { backgroundColor: COLOR_PRIMARY,shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    elevation: 0,
    },
    headerTintColor: COLOR_WHITE,
  };

state = {
    activeSections: [],
    value:data
  };

  _renderHeader = section => {
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.categoryText}>{section.title}</Text>
        <View style={styles.separator}/>
      </View>
    );
  };

  _renderContent = section => {
    const {checked}=this.state;
    return (
      <View style={styles.viewStyle}>
          <TagSelect
          itemStyle={styles.subCategoryStyle}
          itemLabelStyle={styles.labelStyle}
          itemStyleSelected={styles.subCategorySelectedStyle}
          data={section.content}
          ref={(tag) => {
            this.tag = tag;
          }}/>

          <View style={styles.separator}/>
        </View>
    );
  };

  _updateSections = activeSections => {
    this.setState({ activeSections });
  };

  render() {
    //console.log(this.tag);
    return (
      <Container>
        <StatusBar
     backgroundColor={COLOR_PRIMARY}
     barStyle="light-content"
   />
        <ScrollView style={{marginBottom:60}}>
      <Accordion
        sections={SECTIONS}
        activeSections={this.state.activeSections}
        renderSectionTitle={this._renderSectionTitle}
        renderHeader={this._renderHeader}
        renderContent={this._renderContent}
        onChange={this._updateSections}
      />
      </ScrollView>

       <View style={styles.footer}>
            <Text style={{ color: COLOR_WHITE ,justifyContent: 'space-around',fontSize:20}}>Save</Text>
           </View>
      </Container>
    );
  }
}

export default EditFridge
