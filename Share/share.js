'use strict';
import {AdMobBanner} from 'react-native-admob';
import React,{
    CameraRoll,
    View, Text, StyleSheet, ScrollView,
    AlertIOS, TouchableHighlight,
    TouchableOpacity,
    NativeAppEventEmitter,
    NativeModules,
    Image,
    Alert,
    Component,
    AsyncStorage,
    Platform
} from 'react-native';

import resolveAssetSource from 'resolveAssetSource';
import getNavigationHeader from '../Component/view/navigation-header';
import emotionSvc from '../services/emotionSvc';
import WechatSvc from '../services/wechat-svc';
var allEmotion = emotionSvc.allEmotions
let appid = 'wxd930ea5d5a258f4f';


class share extends React.Component {
    leftButton = {
        title: '返回',
        tintColor: 'yellow'
    }

    constructor(props) {
        super(props)

        this.state = {

            text1: this.props.stateParams.item.isFavorite ? '已收藏' : '收藏',
            apiVersion: 'waiting...',
            wxAppInstallUrl: 'waiting...',
            isWXAppSupportApi: 'waiting...',
            isWXAppInstalled: 'waiting...',
            imageURL: this.props.stateParams.item.isFavorite ? require('../Image/shoucang-2.png') : require('../Image/shoucang.png')

        }
        if (this.props.stateParams.Id == 1) {
            this.leftButton.handler = ()=> {

                this.props.navigationUtility.go('nextView1', {
                    ItemName: this.props.stateParams.ItemName,
                    Item: this.props.stateParams.Item
                })
            }
        }
        if (this.props.stateParams.Id == 2) {
            this.leftButton.handler = ()=> {

                this.props.navigationUtility.go('anotherpage', {result: this.props.stateParams.result})
            }
        }
        if (this.props.stateParams.Id == 3) {
            this.leftButton.handler = ()=> {

                this.props.navigationUtility.go('Collection')
            }
        }


    }

    _openWXApp(i) {
        /*var uri = resolveAssetSource(this.props.stateParams.itemPath).uri;*/
        var uri='http://192.168.89.101:8083/api/'+this.props.stateParams.itemPath;
        console.log(uri);
        if (i == 1) {
            WechatSvc.shareToTimeline(uri);
        }
        if (i == 2) {
            WechatSvc.shareToSession(uri)
        }

    }

    _collectPhotos(id) {

        var item = this.props.stateParams.item
        if (!item.isFavorite) {
            /* this.setState({color: 'red'})*/
            this.setState({text1: '已收藏'})
            this.setState({imageURL: require('../Image/shoucang-2.png')})
            {/*emotionSvc.addFavoriteEmotion(id).then(()=> {
                console.log(JSON.stringify(item))
            })*/}
            emotionSvc.addFavoriteEmotion1(id).then(()=>{console.log(JSON.stringify(item))})
        }
        else {

            /*  this.setState({color: 'white'})*/
            this.setState({text1: '收藏'})
            this.setState({imageURL: require('../Image/shoucang.png')})
            {/* emotionSvc.removeEmotion(id).then(()=> {

                console.log(item.isFavorite)
            })*/}
             emotionSvc.removeEmotion1(id).then(()=>{console.log(JSON.stringify(item))})
        }


    }

    _dowLoad() {

        if (Platform.OS === 'android') {
            var uri='http://192.168.89.101:8083/api/'+this.props.stateParams.itemPath;
            NativeModules.WeChat.saveImageResourceIntoAlbum(uri, (error, filePath)=> {
                if (error) {
                    Alert.alert(
                        '',
                        '保存到相册失败',
                        [
                            {text: '确定', onPress: () => console.log(error)},

                        ]
                    );
                } else {
                    /*alert('保存到相册成功' + filePath);*/
                    Alert.alert(
                        '',
                        '保存到相册成功',
                        [
                            {text: '确定', onPress: () => console.log()},

                        ]
                    )
                }
            });
        } else {
            var uri = 'http://192.168.89.101:8083/api/'+this.props.stateParams.itemPath;
            CameraRoll.saveImageWithTag(uri).then(
                function (success) {
                    Alert.alert(
                        '',
                        '保存到相册成功',
                        [
                            {text: '确定', onPress: () => console.log(success)},

                        ]
                    )
                },
                function (error) {
                    Alert.alert(
                        '',
                        '保存到相册失败',
                        [
                            {text: '确定', onPress: () => console.log(error)},

                        ]
                    )
                }
            )
        }
    }

    _adUnitId() {
        var Id;
        if (Platform.OS === 'ios') {
            Id = 'ca-app-pub-4203187352317613/2108541689'
        } else {
            Id = 'ca-app-pub-4203187352317613/9492207688'
        }
        return Id;
    }

    render() {
        var self = this;
        var adUnitId = self._adUnitId();
        let NavigationHeader = getNavigationHeader(this.leftButton, this.title, this.rightButton)
        return (

            <View style={{flex:1,backgroundColor:'#2e2c22'}}>
                {NavigationHeader}
                <View style={{flex:4,alignItems:'center',justifyContent:'center'}}>
                    <Image resizeMode='contain' style={{height:180,width:280}}

                           source={{uri:'http://192.168.89.101:8083/api/'+this.props.stateParams.itemPath}}/>
                </View>
                <View style={{flexDirection:'row',marginBottom:20}}>

                    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                        <TouchableHighlight onPress={self._openWXApp.bind(self,1)}>
                            <View style={{alignItems:'center',justifyContent:'center'}}>
                                <Image resizeMode={'contain'} style={{width:40,height:40}}
                                       source={require('../Image/pengyouquan.png')}/>
                                <Text style={{color:'white',fontSize:10}}>分享到朋友圈</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                        <TouchableHighlight onPress={self._openWXApp.bind(self,2)}>
                            <View style={{alignItems:'center',justifyContent:'center'}}>
                                <Image resizeMode={'contain'} style={{width:40,height:40}}
                                       source={require('../Image/weixin.png')}/>
                                <Text style={{color:'white',fontSize:10}}>分享到讨论组</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                        <TouchableHighlight onPress={self._dowLoad.bind(self)}>
                            <View style={{alignItems:'center',justifyContent:'center'}}>
                                <Image style={{width:40,height:40}} source={require('../Image/xiazai.png')}/>
                                <Text style={{color:'white',fontSize:10}}>保存到相册</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                        <TouchableHighlight onPress={self._collectPhotos.bind(self,self.props.stateParams.itemId)}>
                            <View style={{alignItems:'center',justifyContent:'center'}}>
                                <Image resizeMode={'contain'} style={{width:40,height:40}}
                                       source={this.state.imageURL}/>

                                <Text style={{color:'white',fontSize:10}}>{self.state.text1}</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={{alignItems:'center'}}>
                    <AdMobBanner bannerSize='banner' adUnitID={adUnitId}/>
                </View>
            </View>
        );
    }
}

let styles = StyleSheet.create({
    wrapper: {
        flex: 1,

        marginTop: 80,
        alignItems: 'center',
        justifyContent: 'center'


    },
    pageTitle: {
        paddingBottom: 40
    },
    button: {
        width: 80,
        height: 40,
        marginBottom: 10,
        borderRadius: 6,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonTitle: {
        fontSize: 12,
        color: '#fff'
    },
    Image: {

        height: 100,
        width: 100
    },
    Image1: {
        height: 50,
        width: 50

    },
    color1: {
        color: '#949494',
        fontSize: 12


    },
    slider1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#09BBD9'

    },
    slider2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#09BBD9'

    },
    slider3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#09BBD9'

    },
    slider4: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#09BBD9'

    }
});

module.exports = share;

