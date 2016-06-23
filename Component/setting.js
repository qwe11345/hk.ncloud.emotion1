/**
 * Created by mymac on 16/2/3.
 */
/**
 * Created by mymac on 16/1/29.
 */
/**
 * Created by mymac on 15/12/25.
 */
'use strict';
import getNavigationHeader from '../Component/view/navigation-header'
import DeviceInfo from 'react-native-device-info'
import React,{Text,View,TouchableHighlight,StyleSheet,Image,ScrollView,Linking,Component} from 'react-native'

var device=DeviceInfo.getModel()+',Version:'+DeviceInfo.getDeviceId()+DeviceInfo.getVersion();

export  default class Setting extends Component{
    leftButton={
        title:'返回',
        tintColor:'yellow'
    }
    title={
        title:'设置',
        tintColor:'yellow'
    }
    constructor(props) {
        super(props)
        this.state = {URI: ''}
        this.leftButton.handler=()=>this.props.navigationUtility.go('Model')
    }
    passAnotherPage(){

       /* this.props.navigator.push({
            component:aboutApplication,
            title:'关于软件'


        })*/


    }
    Gumping(url,name){



        this.props.navigator.push({
            component:name,
            passProps:{
                URI:url
            }

        })



    }
    feedBack(){
        var params = {appGUID: '1aecda99-5f1c-4506-a7fb-286050866658', device: device};
        params = JSON.stringify(params);
        params = encodeURI(params);

        var url = `http://feedback.ncloud.hk/Feedback/index.html?${params}`;
        Linking.openURL(url);
    }
    _openUrl(){
        Linking.openURL('https://itunes.apple.com/us/app/localpass-refine-open-source/id967116516?l=zh&ls=1&mt=8')
    }
    _openUrl1(){
        Linking.openURL('https://itunes.apple.com/cn/app/bei-dou360/id995187654?mt=8&ign-mpt=uo%3D4')
    }
    _openUrl2(){
        Linking.openURL('https://itunes.apple.com/cn/app/ge-ren-suo-shui-ji-suan-qi/id1086826634?l=en&mt=8')
    }
    render(){
        let NavigationHeader = getNavigationHeader(this.leftButton, this.title)
        return(
            <View style={{flex:1}}>
                {NavigationHeader}
            <ScrollView>
                <View style={styles.container}>

                    <View  style={{}}>
                        <TouchableHighlight onPress={this.feedBack.bind(this)}>
                            <View style={styles.view1}>

                                <View style={{alignItems:'center',justifyContent:'center'}}>
                                    <Text style={styles.font1}>意见反馈</Text>
                                </View>
                                <View style={{flex:1}}>

                                </View>
                                <View style={{alignItems:'center',justifyContent:'center'}}>
                                    <Text style={styles.font2}>(@'.'@)</Text>

                                </View>

                            </View>
                        </TouchableHighlight>
                    </View>
                    <TouchableHighlight onPress={()=>{this.props.navigationUtility.go('aboutAppliction')}}>
                        <View style={styles.view1}>
                            <View style={{alignItems:'center',justifyContent:'center'}}>
                                <Text style={styles.font1}>关于软件</Text>
                            </View>
                            <View style={{flex:1}}>

                            </View>
                            <View style={{alignItems:'center',justifyContent:'center'}}>
                                <Text style={styles.font2}>></Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                    <View style={{marginTop:40,height:280}}>
                        <View style={styles.flex1}>
                            <View style={{marginLeft:10}}>
                                <Text style={styles.font}>好软件推荐</Text>
                            </View>
                        </View>
                        <TouchableHighlight onPress={this._openUrl}>
                            <View style={styles.flex2}>
                                <View style={{marginLeft:10,marginTop:6,flex:1}}>
                                    <Image  style={styles.Image1} source={require('../Image/localpass-logo.png')} />
                                </View>
                                <View style={{marginLeft:10,justifyContent:'center',flex:4}} >
                                    <Text style={styles.font}>Localpass</Text>
                                    <Text style={styles.font4}>一款简单的密码管理软件</Text>
                                </View>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={this._openUrl1}>
                            <View style={styles.flex2}>
                                <View style={{marginLeft:10,marginTop:6,flex:1}}>
                                    <Image  style={styles.Image1} source={require('../Image/bd-logo.png')} />
                                </View>
                                <View style={{marginLeft:10,justifyContent:'center',flex:4}} >
                                    <Text style={styles.font}>北斗360</Text>
                                    <Text style={styles.font4}>电动车卫士，为您的电动车保驾护航</Text>
                                </View>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={this._openUrl2}>
                            <View style={styles.flex2}>
                                <View style={{marginLeft:10,marginTop:6,flex:1}}>
                                    <Image  style={styles.Image1} source={require('../Image/gerensuodesui.png')} />
                                </View>
                                <View style={{marginLeft:10,justifyContent:'center',flex:4}} >
                                    <Text style={styles.font}>个人所得税计算器</Text>
                                    <Text style={styles.font4}>轻松计算各种所得税</Text>
                                </View>


                            </View>
                        </TouchableHighlight>

                    </View>

                </View>
            </ScrollView>
            </View>
        )
    }

}

/*var {
    Text,
    View,
    TouchableHighlight,
    StyleSheet,
    Image,
    ScrollView,
    Linking


    }=React;

var Setting=React.createClass({
    getInitialState(){
        return{
            URI:''
        }
    },
    passAnotherPage:function(){
        this.props.navigator.push({
            component:Ab,
            title:'关于软件'


        })


    },

    Gumping:function(url,name){



            this.props.navigator.push({
                component:name,
                passProps:{
                    URI:url
                }

            })



    },
    _openUrl(){
        Linking.openURL('https://itunes.apple.com/us/app/localpass-refine-open-source/id967116516?l=zh&ls=1&mt=8')
    },
    _openUrl1(){
       Linking.openURL('https://itunes.apple.com/cn/app/bei-dou360/id995187654?mt=8&ign-mpt=uo%3D4')
    },
    _openUrl2(){
       Linking.openURL('https://itunes.apple.com/cn/app/ge-ren-suo-shui-ji-suan-qi/id1086826634?l=en&mt=8')
    },
    /!*GumpingFirst:function(){
        this.props.navigator.push({
            component:jump1


        })


    },
    GumpingSeacond:function(){
        this.props.navigator.push({
            component:jump2


        })


    }*!/
    render:function(){
        return(
            <ScrollView>
          <View style={styles.container}>

              <View  style={{}}>
              <TouchableHighlight onPress={this.Gumping.bind(this,'http://feedback.ncloud.hk:8083/Feedback/#/seedOpinion?appGUID=1aecda99-5f1c-4506-a7fb-286050866658&deviceType=' +device+device1+device2+'',jump)}>
              <View style={styles.view1}>

                  <View style={{alignItems:'center',justifyContent:'center'}}>
                      <Text style={styles.font1}>意见反馈</Text>
                  </View>
                  <View style={{flex:1}}>

                  </View>
                  <View style={{alignItems:'center',justifyContent:'center'}}>
                      <Text style={styles.font2}>(@'.'@)</Text>

                  </View>

              </View>
              </TouchableHighlight>
              </View>
              <TouchableHighlight onPress={this.passAnotherPage}>
              <View style={styles.view1}>
                  <View style={{alignItems:'center',justifyContent:'center'}}>
                      <Text style={styles.font1}>关于软件</Text>
                  </View>
                  <View style={{flex:1}}>

                  </View>
                  <View style={{alignItems:'center',justifyContent:'center'}}>
                      <Text style={styles.font2}>></Text>
                  </View>
              </View>
              </TouchableHighlight>
              <View style={{marginTop:40,height:280}}>
                  <View style={styles.flex1}>
                        <View style={{marginLeft:10}}>
                        <Text style={styles.font}>好软件推荐</Text>
                        </View>
                  </View>
                  <TouchableHighlight onPress={this._openUrl}>
                      <View style={styles.flex2}>
                          <View style={{marginLeft:10,marginTop:6,flex:1}}>
                              <Image  style={styles.Image1} source={require('../Image/localpass-logo.png')} />
                          </View>
                          <View style={{marginLeft:10,justifyContent:'center',flex:4}} >
                              <Text style={styles.font}>Localpass</Text>
                              <Text style={styles.font4}>一款简单的密码管理软件</Text>
                          </View>
                      </View>
                  </TouchableHighlight>
                  <TouchableHighlight onPress={this._openUrl1}>
                  <View style={styles.flex2}>
                      <View style={{marginLeft:10,marginTop:6,flex:1}}>
                          <Image  style={styles.Image1} source={require('../Image/bd-logo.png')} />
                      </View>
                      <View style={{marginLeft:10,justifyContent:'center',flex:4}} >
                          <Text style={styles.font}>北斗360</Text>
                          <Text style={styles.font4}>电动车卫士，为您的电动车保驾护航</Text>
                      </View>
                  </View>
                  </TouchableHighlight>
                  <TouchableHighlight onPress={this._openUrl2}>
                  <View style={styles.flex2}>
                      <View style={{marginLeft:10,marginTop:6,flex:1}}>
                          <Image  style={styles.Image1} source={require('../Image/gerensuodesui.png')} />
                      </View>
                      <View style={{marginLeft:10,justifyContent:'center',flex:4}} >
                          <Text style={styles.font}>个人所得税计算器</Text>
                          <Text style={styles.font4}>轻松计算各种所得税</Text>
                      </View>


                  </View>
                  </TouchableHighlight>

              </View>

          </View>
            </ScrollView>

        );
    }





});*/
var styles=StyleSheet.create({
    container:{

        flex:1,
        backgroundColor:'#F7F7F7'
    },
    flex1:{
        flex:1,
        backgroundColor:'#FFFFFF',
        justifyContent:'center'

    },
    flex2:{

        flex:1,
        backgroundColor:'#FFFFFF',
        justifyContent:'center',
        flexDirection:'row',

        height:76




    },
    flex3:{
        marginTop:20,
        flex:1,
        backgroundColor:'#FFFFFF',
        justifyContent:'center',
        flexDirection:'row'



    },
    view:{

        backgroundColor:'#FFFFFF',
        height:40,
        justifyContent:'center',
        flexDirection:'row'



    },
    view1:{
        borderColor:'#F5F5F5',
        backgroundColor:'#FFFFFF',
        height:40,
        borderWidth:1,

        justifyContent:'center',
        flexDirection:'row'


    },
    font:{
        fontSize:14



    },
    font1:{
        fontSize:14,
        marginLeft:10,
        textAlign:'center'


    },
    font2:{
        fontSize:14,
        textAlign:'center',
        marginRight:10,
        flexDirection:'row'


    },
    font3:{
        fontSize:14,
        textAlign:'center',
        marginRight:10,
        color:'#949494'



    },
    font4:{
        fontSize:14,
        color:'#949494'


    },
    Image1:{

        borderRadius:18,








    }

})
module.exports=Setting;
/*
<TouchableHighlight  onPress={this.Gumping}>
    <View style={styles.flex2}>


        <View style={{marginLeft:10,marginTop:4,flex:1,alignItems:'center',justifyContent:'center'}}>
            <Image  style={styles.Image1} source={require('../Image/localpass-logo.png')} />
        </View>
        <View style={{marginLeft:10,justifyContent:'center',flex:4}} >
            <Text style={styles.font}>Localpass</Text>
            <Text style={styles.font4}>一款简单的密码管理软件</Text>
        </View>


    </View>
</TouchableHighlight>*/
