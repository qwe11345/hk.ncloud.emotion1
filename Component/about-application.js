/**
 * Created by mymac on 16/2/22.
 */

'use strict';
import getNavigationHeader from '../Component/view/navigation-header';
var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');
import React,{Component,View,Text,TouchableOpacity,TouchableHighlight,StyleSheet,Image} from 'react-native';
export  default class aboutApplication extends Component {
    leftButton = {
        title: '返回',
        tintColor: 'yellow'
    };

    constructor(props) {
        super(props)
        this.leftButton.handler = ()=>this.props.navigationUtility.go('Setting')

    }

    render() {
        let NavigationHeader = getNavigationHeader(this.leftButton, this.title)
        return (
            <View style={{flex:1}}>
                {NavigationHeader}
                <View style={styles.container}>
                    <View style={{flex:1.5,marginTop:68,alignItems:'center',justifyContent:'center'}}>
                        <Image resizeMode='cover' source={ require('../Image/photos.png')}/>
                    </View>
                    <View style={{flex:3,alignItems:'center'}}>
                        <Text style={{fontSize:18,color:'#fff13f'}}>各位父老乡亲!</Text>
                        <Text style={{marginTop:20,fontSize:14,color:'yellow'}}>表情包爱好者</Text>
                        <Text style={{fontSize:14,color:'#fff13f'}}>本软件主要用于广大表情爱好者交流</Text>
                        <Text style={{fontSize:14,color:'#fff13f'}}>丰富大家的聊天对话</Text>
                        <Text style={{fontSize:14,color:'#fff13f'}}>目的给大家带来欢乐</Text>
                        <Text style={{marginTop:20,fontSize:14,color:'yellow'}}>我们不生产图</Text>
                        <Text style={{fontSize:14,color:'#fff13f'}}>我们只是网络图的搬运工</Text>
                        <Text style={{marginTop:20,fontSize:14,color:'#fff13f'}}>谢谢大家支持</Text>

                    </View>

                </View>
            </View>
        )
    }


}
/*var aboutApplication = React.createClass({

 render: function () {
 return (
 <View style={styles.container}>
 <View style={{flex:1.5,marginTop:68,alignItems:'center',justifyContent:'center'}}>
 <Image resizeMode='cover'   source={ require('../Image/photos.png')}/>
 </View>
 <View style={{flex:3,alignItems:'center'}}>
 <Text style={{fontSize:18,color:'#fff13f'}}>各位父老乡亲!</Text>
 <Text style={{marginTop:20,fontSize:14,color:'yellow'}}>表情包爱好者</Text>
 <Text style={{fontSize:14,color:'#fff13f'}}>本软件主要用于广大表情爱好者交流</Text>
 <Text style={{fontSize:14,color:'#fff13f'}}>丰富大家的聊天对话</Text>
 <Text style={{fontSize:14,color:'#fff13f'}}>目的给大家带来欢乐</Text>
 <Text style={{marginTop:20,fontSize:14,color:'yellow'}}>我们不生产图</Text>
 <Text style={{fontSize:14,color:'#fff13f'}}>我们只是网络图的搬运工</Text>
 <Text style={{marginTop:20,fontSize:14,color:'#fff13f'}}>谢谢大家支持</Text>

 </View>

 </View>



 )


 }


 });*/
var styles = StyleSheet.create({
    container: {

        flex: 1,
        backgroundColor: 'black'

    }


})
module.exports = aboutApplication;
