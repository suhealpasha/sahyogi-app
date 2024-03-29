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
class TrackOrdersIcon extends Component{
    constructor(props) {
        super(props);
        this.state = {        
         
        };
      }
    render(){
        return(
            <Svg width="40px" height="40px" viewBox="0 0 16 22" version="1.1">
           
            <G id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <G id="Profile-Screen" transform="translate(-27.000000, -589.000000)" fillRule="nonzero">
                    <G id="Group-33" transform="translate(15.000000, 589.000000)">
                        <G id="Group-32" transform="translate(13.000000, 0.000000)">
                            <G id="Group" transform="translate(0.000000, 1.000000)">
                                <Path d="M7.23006154,0.230741538 C1.45162769,0.230741538 -1.94530769,6.68615692 1.33158769,11.4461477 L6.97777231,19.6676769 C7.05777538,19.7815231 7.22394154,19.8092031 7.33158769,19.70152 L13.1346985,11.4461477 C16.4300708,6.63688 12.9346892,0.230741538 7.23006154,0.230741538 Z M7.23006154,11.8246031 C4.76548,11.8246031 2.7624,9.82152308 2.7624,7.35074462 C2.7624,4.88920615 4.76548,2.88304615 7.23006154,2.88304615 C9.69776,2.88304615 11.70392,4.88920615 11.70392,7.35074462 C11.70392,9.82152308 9.69776,11.8246031 7.23006154,11.8246031 Z" id="Shape" stroke="#333333" strokeWidth="0.8"></Path>
                                <Path d="M9.59360615,4.92278769 C8.05220308,4.92278769 6.65430154,4.92278769 4.87004923,4.92278769 C4.60138154,4.92278769 4.38357231,5.1406 4.38357231,5.40926462 L4.38357231,9.30097846 C4.38357231,9.56964615 4.60138462,9.78741846 4.87004923,9.78741846 L9.59360615,9.78741846 C9.86223692,9.78741846 10.0800462,9.56964615 10.0800462,9.30097846 L10.0800462,5.40926462 C10.0800462,5.14059692 9.86223692,4.92278769 9.59360615,4.92278769 Z M7.97856,6.88327385 L7.22942462,6.25572 L6.48513231,6.88327385 L6.48513231,5.38432615 L7.97856,5.38432615 L7.97856,6.88327385 Z" id="Shape" fill="#FF7D01"></Path>
                            </G>
                        </G>
                    </G>
                </G>
            </G>
        </Svg>
      )
    }
}

export default TrackOrdersIcon;