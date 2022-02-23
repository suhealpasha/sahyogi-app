import React, {Component} from 'react';
import {
  BackHandler,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableHighlight,
  Image,
  Alert,
  Dimensions,
  AsyncStorage,
  TouchableOpacity,
  Switch,
  TextInput,
  ImageBackground,
} from 'react-native';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';
import RoundCheckbox from 'rn-round-checkbox';
import * as actionTypes from '../../../../Store/action';
import {connect} from 'react-redux';
import TopwearIcon from '../../../utils/components/Icons/topwear';
import BottomwearIcon from '../../../utils/components/Icons/bottomwear';
import SportswearIcon from '../../../utils/components/Icons/sportswear';
import BeltsIcon from '../../../utils/components/Icons/belts';
import IndianwearIcon from '../../../utils/components/Icons/indianwear';
import InnerwearIcon from '../../../utils/components/Icons/innerwear'; 
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import { SliderBox } from "react-native-image-slider-box";
import Subcategories from "../../../utils/components/Subcategories";
import {CheckBox} from 'react-native-elements';
import StepButton from '../../../utils/components/stepButton';
const horizontalMargin = 20;
const slideWidth = Dimensions.get('window').width;


const itemHeight = 69;

class Clothing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: Dimensions.get('window').height,
      width: Dimensions.get('window').width,
      select: null,
      disabled: true,
      checked: false,
      data: [
        {id:1,name: 'Top Wear', icon: 'topWear',checked:false},
        {id:2,name: 'Bottom Wear', icon: 'bottomWear',checked:false},
        {id:3,name: 'Indian & Festival Wear', icon: 'indianWear',checked:false},
        {id:4,name: 'Inner & Sleeper Wear', icon: 'innerWear',checked:false},
        {id:5,name: 'Sports Wear', icon: 'sportsWear',checked:false},
        {id:6,name: 'Belts, Shoes, Socks & More', icon: 'belts',checked:false},
       
      ],
    
    };
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }

  componentDidMount() {
    console.log('Search Bar',this.props.searchbar)
    BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackButtonClick,
    );
  }

  componentWillUnmount() {
    BackHandler.removeEventListener(
      'hardwareBackPress',
      this.handleBackButtonClick,
    );
  }
  handleBackButtonClick() {
    this.props.navigation.goBack(null);
    this.props.onTabClicked('home')
    if(this.props.searchbar){
      this.props.closeSearch();
    }
    return true;
  }

  
  selectHandler = async args => {
    
    
    let items = this.state.data;
    items.forEach(item => {
      if (item.id === args)
      
        if (item.checked === true) {
          
          return (item.checked = false);
        } else {
          
          return (item.checked = true);
        }
    });
    await this.setState({data: items});
    let check = items.every(item => item.checked === false) 
    if(check){
      this.setState({checked:false})
    }
    else{
      this.setState({checked:true})
    }
  };

  render() {
    const styles = StyleSheet.create({
      container:{       
        paddingLeft:16,
        paddingRight:16,
        height:this.state.height > 600 ? this.state.height/2 : this.state.height/3 ,

      },
      bodyContainer: {
        // padding:16
      },
      title: {
        color: '#333333',
        fontSize: 18,
        fontFamily: 'AvenirNext-DemiBold',
        fontWeight: '500',
        padding: 16,
      },
      border: {
        borderBottomWidth: 2,
        borderBottomColor: '#ff7d01',
        width: this.state.width / 2 - 16,
        marginLeft: 16,
        paddingTop: 2,
        paddingBottom: 2,
      },
      label1: {
        fontSize: 16,
        fontFamily: 'AvenirNextLTPro-Regular',
        padding: 16,
        width: 150,
      },
      activeCategoriesMenu: {
        borderWidth:1,
        borderColor:'#05be38',
        width: 95,
        marginRight: 20,
        marginTop: 16,
        backgroundColor: '#ffff',
        height: 120,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
       
        elevation: 1,
        justifyContent: 'center',
      },
      categoriesMenu: {
        borderWidth:1,
        borderColor:'#05be38',
        width: 95,
        marginRight: 20,
        marginTop: 16,
        backgroundColor: '#ffff',
        height: 120,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        borderWidth: 1,
        borderColor: '#e7e7e7',
        elevation: 1,
        justifyContent: 'center',
      },
      header: {
        paddingTop: 10,
        paddingBottom: 10,
      },
      headerMenuText: {
        color: '#333333',
        fontSize: 14,
        fontFamily: 'AvenirNext-Medium',
        textAlign: 'center',
        paddingLeft: 5,
        paddingRight:5,
        paddingTop:5,
        marginBottom:5
      },
      itemContainer:{
        display: 'flex',
        alignItems: 'center',
        paddingTop: 5,
        paddingBottom: 5,
      },
      activeItemContainer:{
        display: 'flex',
        alignItems: 'center',
        paddingTop: 5,
        paddingBottom: 5,
        borderWidth:1,
        borderColor:'#05be38'
      }


    });

  

    return (
     
      <View style={{flex: 1.0, backgroundColor: 'fafcff'}}>       
        <View style={{paddingTop:5,paddingBottom:0}}>
        <ImageBackground style={{
            width: this.state.width,
            height:120,
           
            }}
         resizeMode='cover' source={require('../../../../assets/Images/banner/banner2.png')}/>
       
          </View> 
          <View style={styles.container}>
          <FlatList
            data={this.state.data}
            columnWrapperStyle={{allignItems: 'space-between'}}
            numColumns={3}
            showsVerticalScrollIndicator={false}
            keyExtractor={items => {
              items.region_Id;
            }}
            renderItem={({item}) => {
              return (
                <TouchableNativeFeedback
                      style={item.checked ? styles.activeCategoriesMenu :styles.categoriesMenu}
                      onPress={() => this.selectHandler(item.id)}
                    >
                     <View style={{  position:'absolute',top:0,height:20,display:'flex',alignItems:'flex-end',width:'100%',paddingRight:5,paddingTop:5}}> 
                    {item.checked ? <RoundCheckbox
                            size={20}
                            checked={this.state.checked || item.checked}
                            style={{position:'relative',top:0}}
                            iconColor='#333333'
                            backgroundColor	='#05be38'
                            />
                            : null}
                            </View>
                      <View style={{
                          display: 'flex',
                          alignItems: 'center',
                          paddingTop: 5,
                          paddingBottom: 5,
                          // height:100,
                          
                        }}>
                    
                      <View
                        style={{height:40}}
                        
                        >
                   {item.icon === 'topWear' ? <TopwearIcon /> : null}
                      {item.icon === 'bottomWear' ? <BottomwearIcon />: null}
                      {item.icon === 'belts' ? <BeltsIcon /> : null}
                      {item.icon === 'sportsWear' ? <SportswearIcon /> : null}
                      {item.icon === 'indianWear' ? <IndianwearIcon />: null}
                      {item.icon === 'innerWear' ? <InnerwearIcon /> : null}
                      </View>
                      <View>
                      <Text style={styles.headerMenuText}>{item.name}</Text>
                      </View>
                      </View>
                    </TouchableNativeFeedback>
              );
            }}
          />  
          </View>   
          <StepButton title="Next" disabled={this.state.checked ? false : true} {...this.props} closeSearch={this.props.closeSearch}/>
          
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    active: state.reducer.active,
    bottomTab:state.reducer.bottomTab
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onTabClicked: value =>
      dispatch({type: actionTypes.ACTIVE_TAB, payload: value}),
  }
 
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Clothing);
