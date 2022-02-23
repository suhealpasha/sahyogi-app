import React  , {Component, UseState, UseEffect} from 'react';
import Svg,{Path,LinearGeadient,Stop,Polygon,Polyline,Defs,G,Mask,Circle,Rect,Use,LinearGradient} from 'react-native-svg';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Animated,
    Image,
    Dimensions
  } from 'react-native';
class Heels extends Component{
    constructor(props) {
        super(props);
        this.state = {        
         
        };
      }
    render(){
        return(
            <Svg width="65px" height="40px" viewBox="0 0 48 32" >

            <G id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <G id="Category-Footwear-List" transform="translate(-157.000000, -542.000000)" fillRule="nonzero">
                    <G id="Group-6" transform="translate(129.000000, 519.000000)">
                        <G id="noun_heel_1060982" transform="translate(30.000000, 24.000000)">
                            <Path d="M44.1027779,27.1515758 C44.1027779,27.1477576 44.1027779,27.1439394 44.1027779,27.1406667 L44.1027779,27.124303 L44.1022325,27.124303 C44.101687,26.9219394 44.0629598,26.6617576 43.9140507,26.3961212 L43.9140507,26.3950303 L43.9135052,26.3950303 C43.5578689,25.7584848 42.5787779,25.0941212 40.0282325,25.1301212 C40.0282325,25.1301212 39.6191416,23.2210303 38.0509598,20.2892121 C38.0509598,20.2892121 35.3585961,20.2864848 33.0447779,18.5257576 C33.0431416,18.5252121 33.0415052,18.5246667 33.0404143,18.5235758 C32.2315052,17.9813939 31.5087779,16.9624848 31.5087779,16.9624848 L31.5098689,16.9619394 C31.3467779,16.7393939 31.1907779,16.5026667 31.0445961,16.2484848 C30.4435052,14.8433939 29.9711416,12.5824848 29.6378689,10.5555758 L29.0738689,6.3490303 L29.0504143,6.17557576 C29.0504143,6.17557576 22.2965961,6.94521212 14.2773234,8.92630303 C7.79568704,2.44466667 4.46459613,0.633212121 2.88768704,0.177757576 C2.88714158,0.177757576 2.88659613,0.177757576 2.88659613,0.177757576 C2.78786886,0.149393939 2.70005067,0.128666667 2.61495976,0.110121212 C2.61168704,0.109575758 2.61005067,0.107939394 2.6073234,0.107393939 C1.82514158,-0.134242424 1.00695976,0.107393939 1.00695976,0.107393939 L1.01023249,0.110666667 C0.38841431,0.259030303 0.11241431,0.62230303 0.0131415824,1.00793939 C-0.10358569,1.28284848 0.595687037,2.70157576 0.595687037,2.70157576 C1.38114158,4.1950303 2.83750522,9.46521212 3.61914158,28.0624848 C3.61914158,28.0624848 4.98277795,28.6761212 5.86914158,28.0624848 L5.86914158,11.3573939 C5.86914158,11.3573939 7.71114158,8.84175758 10.2158689,12.4504848 C11.4611416,14.554303 13.7378689,18.8584848 15.5073234,24.7832121 C15.6267779,25.2441212 15.9027779,25.9133939 16.5344143,26.5984848 C16.5513234,26.6235758 19.4951416,31.0733939 33.5684143,29.4506667 L33.5695052,29.4512121 C33.5695052,29.4512121 33.5809598,29.4501212 33.6005961,29.4473939 C33.6115052,29.446303 33.6218689,29.4452121 33.6327779,29.4435758 C34.4460507,29.3492121 43.8278689,28.2512121 44.1038689,27.9255758 L44.1027779,27.1515758 Z" id="Shape" stroke="#333333" strokeWidth="2"></Path>
                            <Path d="M26.7205961,18.9608485 C26.7205961,18.9608485 26.2820507,19.1135758 25.6973234,19.1048485 C25.9645961,19.3208485 26.2193234,19.5995758 26.4260507,19.9579394 C26.4260507,19.9579394 27.3445961,21.4464848 26.3087779,22.2052121 C26.3087779,22.2052121 25.2244143,22.7381212 24.1804143,21.2479394 C24.1804143,21.2479394 23.8973234,20.8726667 23.7287779,20.3070303 C23.6153234,20.5835758 23.4549598,20.8633939 23.2285961,21.1295758 C23.2285961,21.1295758 22.137687,22.4975758 21.0740507,21.7792121 C21.0740507,21.7792121 20.2062325,20.9386667 21.2562325,19.4517576 C21.2562325,19.4517576 21.5404143,19.0175758 22.0624143,18.6553939 C21.6871416,18.6161212 21.2824143,18.5070303 20.877687,18.2801212 C20.877687,18.2801212 19.3269598,17.4717576 19.827687,16.2892121 C19.827687,16.2892121 20.4865961,15.2773939 22.1469598,16.0224848 C22.1469598,16.0224848 22.5391416,16.1828485 22.9509598,16.5406667 C22.8969598,16.224303 22.8887779,15.8757576 22.953687,15.5015758 C22.953687,15.5015758 23.2018689,13.7692121 24.4831416,13.8499394 C24.4831416,13.8499394 25.6564143,14.1346667 25.5047779,15.9488485 C25.5047779,15.9488485 25.4878689,16.3006667 25.3329598,16.746303 C25.5789598,16.6099394 25.8593234,16.4975758 26.1789598,16.4288485 C26.1789598,16.4288485 27.8769598,16.008303 28.2827779,17.2268485 C28.2822325,17.226303 28.4578689,18.4208485 26.7205961,18.9608485 Z" id="Path" fill="#FF7D01"></Path>
                        </G>
                    </G>
                </G>
            </G>
        </Svg>
      )
    }
}

export default Heels;