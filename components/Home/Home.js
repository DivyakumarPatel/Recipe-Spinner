import * as React from 'react';
import { Text, View, TextInput,Dimensions,TouchableOpacity,StyleSheet,Image,ScrollView,KeyboardAvoidingView,ActivityIndicator,StatusBar, } from 'react-native';
// import styles from './HomeStyle';
import {COLOR_PRIMARY,COLOR_WHITE} from '../Utility/color'
import {HOME} from '../Utility/String'
import RecipeList from '../common/RecipeList';
import DrawerHeader from '../common/DrawerHeader';
import AsyncStorage from '@react-native-async-storage/async-storage';
import  Api from '../Utility/Api';
import {Container,Content,Icon,Header,Left,Right,Button,Body,Title,Fab} from 'native-base'
import { createStackNavigator ,DrawerNavigator } from 'react-navigation';
import {
  BarChart
} from "react-native-chart-kit";
// import { TouchableOpacity } from 'react-native-gesture-handler';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
class Chart extends React.Component {

   static navigationOptions={
     header:null
   }

    constructor(props){
    super(props);
    this.state ={ isLoading: true,recipe:[],list:[],bars:[],values:[]}
  }


   componentWillMount(){
      
      Api.recipe().then((responseJson) => {
        this.setState({
          recipe: responseJson,
					isLoading: true,
        }, function(){

        });
      })
      .catch((error) =>{
        console.error(error);
      });
}


renderRecipeList(){
 return this.state.recipe.map(recipe => <RecipeList key={recipe.title}  data ={recipe} style={{padding:5}}/>);
}

openDetailActivity(recipe){
	this.props.navigation.navigate('RecipeDetail', {
         itemId: 84,
         otherParam: '',
       })
}
componentDidMount(){
  this.getData();
}
getData = async () => {
  try {
    const value = await AsyncStorage.getItem('@storage_Key')
    if(value !== null) {
      // value previously stored
      this.setState({list:JSON.parse(value)})
var array=[];
      JSON.parse(value).map(item=>{
        Object.keys(item.recipe).map(key=>{
          array.push(item.recipe[key]);
        })
      })
      // console.log(array.sort())
    var unique= [...new Set(array.sort())];
    var value_Array=[];
    unique.map((item,i)=>{
      var count=array.sort().filter(elem => elem === array.sort()[i]).length;
      value_Array.push(count);

    })
      // console.log(value_Array)
  this.setState({bars:unique})
  this.setState({values:value_Array})
      const countsSorted = Object.entries(array).sort(([_, a], [__, b]) => a - b);
      console.log(countsSorted)
      console.log(value)
    }
  } catch(e) {
    // error reading value
  }
}
postData2= async (obj) => {
  // console.log(obj)
  
  
  fetch('http://192.168.1.8:3000/postdata', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj)
  }).then((response) => response.json())
      .then((json) => {
        console.log(json)
        // return json.foo;
      })
      .catch((error) => {
        console.error(error);
      });
  
    }
storeData = async (value) => {
  try {

    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('@storage_Key', jsonValue)
  
    // this.setState({name:''});
    // this.setState({recipe:{}})
    // this.props.navigation.navigate('MyFridge');
    //   getData();
    // console.log(c)
  } catch (e) {
    // saving error
  }
}
  render(){
    const chartConfig = {
      // backgroundGradientFrom: "#1E2923",
      // backgroundGradientFromOpacity: 0,
      // backgroundGradientTo: "#08130D",
      // backgroundGradientToOpacity: 0.5,
      fillShadowGradient: 'blue',
fillShadowGradientOpacity: 1,
      color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
      strokeWidth: 2, // optional, default 3
      barPercentage: 0.5,
      useShadowColorFromDataset: false // optional
    };
    const data = {
      labels: this.state.bars,
      datasets: [
        {
          data:this.state.values
        }
      ]
    };
		if (this.state.isLoading){
      return(
      
        <Container style={{ flex: 1,}}>
          <StatusBar
     backgroundColor={COLOR_PRIMARY}
     barStyle="light-content"
   />
  <Image 
        style={{flex:1,
          width: windowWidth, 
        height:windowHeight, 
        position:'absolute',
        top:0,
        left:0,
        
        }}
         source={require('../../assets/unnamed.jpg')}/>
        <DrawerHeader title={'My Recipes'}/>
       
        <Content style={{ flex: 1
     
        }}>
       
        <ScrollView style={{
          
        }}>
        <Text style={{fontWeight:'bold',color:"white"}}>Recipes</Text>
  
   
  {this.state.list.map((item,i)=>{
    var key2=0.0;
  return(  
<View style={{width:'100%',backgroundColor:'white',padding:10,display:'flex',alignItems:'flex-start',justifyContent:"center",paddingLeft:10,margin:5}}
>

    <Text style={{fontWeight:'bold'}}>{i+1}. {item.name}</Text>
    {Object.keys(item.recipe).map((key, index)=>{
      key2=Number(key2)+Number(key);
      return(<Text style={{fontWeight:'normal',paddingLeft:10}}>{index+1}. {item.recipe[key]} - {key}</Text>)
    })}
<Text>Total Calories - {key2}</Text>
<TouchableOpacity onPress={()=>{
  let array=this.state.list;
  array.splice(i, 1);
this.setState({list:array})
this.postData2(array);
this.storeData(array);
this.getData();
}} style={{backgroundColor:'red',padding:5,margin:10,float:'right'}}><Text style={{fontWeight:'normal',color:"white"}}>Delete</Text></TouchableOpacity>
</View>
 )
})}
<View style={{width:'100%',display:"flex",flexDirection:'row',justifyContent:"center"}}>


     <BarChart
  // style={graphStyle}
  style={{width:'100%'}}
  data={data}
  width={windowWidth}
  height={windowWidth}
  // yAxisLabel="$"
  chartConfig={chartConfig}
  verticalLabelRotation={30}
/> 
</View>

        {this.renderRecipeList()}
        </ScrollView>
      		</Content>
					<Fab
            active={true}
            direction="up"
            containerStyle={{}}
            style={{ backgroundColor: '#123456', marginBottom:50, }}
            position="bottomRight"
            onPress={() => this.props.navigation.navigate('MyFridge')}>
            <Icon name="add" />
          </Fab>
      	</Container>

      );
		}
		else{
			return(
        
        <Container>
        <DrawerHeader />
    
        <Content>
					<ActivityIndicator size="large"    color ={COLOR_SECONDARY}  style={{
	          position: 'absolute' ,
	          left:0,
	          right:0,
	          top:0,
	          bottom:0

	        }}/>
      		</Content>
					<Fab
            active={true}
            direction="up"
            containerStyle={{}}
            style={{ backgroundColor: '#123456', marginBottom:50, }}
            position="bottomRight"
            onPress={() => this.props.navigation.navigate('MyFridge')}>
            <Icon name="share" />
          </Fab>
      	</Container>

      );
		}
  }
}



export default Chart
