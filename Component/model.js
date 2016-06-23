/**
 * Created by mymac on 16/2/3.
 */
/**
 * Created by mymac on 15/12/25.
 */
'use strict'

import getNavigationHeader from '../Component/view/navigation-header'
import Collection from './collection'
import React,{Component,View,Text,TouchableOpacity,TouchableHighlight,StyleSheet,Image} from 'react-native';
export default class Model extends Component{
    constructor(props) {
        super(props)
        this.leftButton.handler = ()=>this.props.navigationUtility.go('MyView')
        this.rightButton.handler=()=>this.props.navigationUtility.go('Setting')
    }

    leftButton={
        title:'返回',
        tintColor:'yellow'
    };
    title={
        title:'个人中心',
        tintColor:'yellow'
    }
    rightButton={
        title:'设置',
        tintColor:'yellow'
    }
     _myCollection(){
         /*this.props.navigator.push({component:Collection})*/
         this.props.navigationUtility.go('Collection')
     }
    render(){
        let NavigationHeader=getNavigationHeader(this.leftButton,this.title,this.rightButton)
        return(
            <View style={{flex:1}}>
                {NavigationHeader}
            <View style={styles.container}>

                <View style={styles.style1}>
                    <TouchableHighlight onPress={this._myCollection.bind(this)}>
                        <View style={{alignItems:'center',justifyContent:'center'}}>
                            <Image  style={styles.image1}source={ require('./../Image/shoucang.png')}/>
                            <Text style={styles.color1}>我的收藏</Text>
                        </View>
                    </TouchableHighlight>


                </View>

            </View>
            </View>

        );
    }


}

var styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        flex:1,
        justifyContent:'center',
        padding:10
    },
    style1: {
        borderColor: 'black',
        borderWidth: 1,
        height: 80,
        width:150,
        backgroundColor: 'black',
        borderRadius:10,
        marginLeft:30,
        marginRight:30,
        alignItems:'center',
        justifyContent:'center'

    },
    color1:{
        color:'#949494',
        fontSize:12


    },
    image1:{
        height:30,
        width:30


    }




})
module.exports=Model;