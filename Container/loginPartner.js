import React, {Component} from 'react';
import {
  BackHandler,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  Alert,
  Dimensions,
  AsyncStorage,
  TouchableOpacity,
  Switch,
  TextInput,
} from 'react-native';
import {Input, ThemeConsumer} from 'react-native-elements';

import {KeyboardAwareView} from 'react-native-keyboard-aware-view';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import NextButton from '../Components/utils/nextButton';
import {NavigationActions} from 'react-navigation';
import BackButton from '../Components/utils/backButton';
import Icon from 'react-native-vector-icons/Octicons';
import Logo from '../Components/utils/logo';
import * as actionTypes from '../Store/action';
import {connect} from 'react-redux';
import axios from 'axios';
import Spinner from 'react-native-loading-spinner-overlay';
import * as api from '../assets/api/api';
import Button from '../Components/utils/components/button';
import {Label} from 'native-base';
import {HelperText} from 'react-native-paper';
import DeviceInfo from 'react-native-device-info';

class LoginPartner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: Dimensions.get('window').height,
      userName:null,
      password:null,
      invalidUserName:false,
      invalidPassword:false,
      invalidCredentials:false,
      editable: false 
    };
  }

  componentDidMount() {
    console.log("Device Manufacturer", DeviceInfo.getManufacturer()); 
    setTimeout(() => { this.setState({ editable: true }) }, 100);
}

  componentWillUnmount() {}
 
  login = async() =>{  
    
    if(this.state.userName === 'test@test.com' && this.state.password === 'Test@123'){
      await AsyncStorage.setItem('sahyogiLogin', '1');
      this.props.setLogin()
     
    }
    if(this.state.userName !== 'test@test.com' || this.state.password !== 'Test@123' ){
      this.setState({invalidCredentials:true})
    }
   else{
     this.setState({invalidCredentials:false})
   }
  }

  render() {
    const styles = StyleSheet.create({
      container: {
        flexDirection: 'column',
        backgroundColor: '#ffff',
        height: this.state.height,
        padding: 16,
      },
      title: {
        color: '#333333',
        fontFamily: 'AvenirNextFont',
        fontSize: 20,
        fontWeight:'bold',
      },
      text: {
        color: '#999999',
        fontFamily: 'AvenirNextFont',
        fontSize: 14,
        marginTop: 5,
      },
      label: {
        fontWeight: '600',
        paddingTop: 10,

        color: '#333333',
        fontFamily: 'AvenirNextFont',
        fontWeight: '500',
        fontSize: 14,
      },
      input: {
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#dddddd',
        fontSize: 14,
        fontFamily: 'AvenirNextFont',
        marginBottom: 10,
        padding:0
      },
      forgot: {
        textAlign: 'right',
        paddingTop: 10,
        color: '#ff7d01',
        fontSize: 12,
        fontFamily: 'AvenirNextFont',
        fontWeight: '500',
      },
    });

    return (
      <KeyboardAwareScrollView style={styles.container}>
        <Text style={styles.title}>Log As Partner</Text>
        <Text style={styles.text}>Log in to your account</Text>
        <View style={{marginTop: 20, display: 'flex', flexDirection: 'column'}}>
          <Text style={styles.label}>Username or Email</Text>
          <TextInput style={styles.input}
           placeholder="Enter your username"
           editable={this.state.editable} 
           caretHidden={DeviceInfo.getManufacturer() === 'xiaomi' ? true : false}
          //  onBlur={this.validateEmail}
           onChangeText={e=>{this.setState({userName:e,invalidCredentials:false})}}/>
          {/* <HelperText type="error" visible={this.state.invalidUserName } style={{textAlign:'center'}}>
             {this.state.invalidUserName === true ? 'Invalid Username or Email' : false }
            </HelperText> */}
          <TouchableOpacity>
            <Text style={styles.label}>Password</Text>
          </TouchableOpacity>
          <TextInput
          caretHidden={DeviceInfo.getManufacturer() === 'xiaomi' ? true : false}
            style={styles.input}
            placeholder="Enter password"
            secureTextEntry={true}
            onChangeText={e=>{this.setState({password:e,invalidCredentials:false})}}
            // onBlur={this.validatePassword}
        
          />
           <HelperText type="error" visible={this.state.invalidCredentials } style={{textAlign:'center'}}>
             {this.state.invalidCredentials=== true ? 'Invalid credentials!' : false }
            </HelperText>
          <Text style={styles.forgot}>Forgot Password?</Text>
          <Button title="Log As Partner" disabled={this.state.userName !== null && this.state.password !== null ? false : true} {...this.props} onLogin={()=>this.login()}/>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

export default LoginPartner;
