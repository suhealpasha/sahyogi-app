import React, {Component} from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  AppRegistry,
  navigation,
  AsyncStorage,
} from 'react-native';
import * as actionTypes from '../../../Store/action';
import {connect} from 'react-redux';

class ActionButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const styles = StyleSheet.create({
      button: {
        textAlign:'center',
        backgroundColor:'#ff7d01',
        padding:16,
       alignItems:'center',
       flex:1,
       justifyContent:'center',
      position:'absolute',
      bottom:0,
      width:'100%'
      },
      buttonText: {
        fontWeight:'600',
        fontSize:16,
        textAlign:'center',
        fontFamily: 'AvenirNextFont',
        color:'#ffffff',
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOffset: {
          width: 0,
          height: -5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 6.27,
        elevation: 10,
      },
    });
    let buttonName=this.props.buttonText
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={this.props.buttonText = 'Edit' ? ()=>{this.props.onEditClicked(true)} :null}
      >
        {/* <Text style={styles.buttonText}>{this.props.buttonText}</Text> */}
        <Text style={styles.buttonText}>{buttonName}</Text>
      </TouchableOpacity>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onEditClicked: value =>
      dispatch({type: actionTypes.EDIT_CUSTOMER_INFO, payload: value}),
   
};
}

export default connect(
  null,
  mapDispatchToProps,
)(ActionButton);
