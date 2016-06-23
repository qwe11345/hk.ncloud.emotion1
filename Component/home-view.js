/**
 * Created by mymac on 15/12/28.
 */
'use strict';

import nextView1 from './../Next/next-view';
var Dimensions = require('Dimensions');
import emotionSvc from '../services/emotionSvc';
import getNavigationHeader from '../Component/view/navigation-header';
import React,{
    Component,
    View,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    StyleSheet,
    Image,
    ScrollView,
    ListView
} from 'react-native';


var allEmotionPackages = emotionSvc.allEmotions;
export default class MyView extends Component {

    leftButton = {
        title: '筛选',
        tintColor: 'yellow'
    };
    title = {
        title: '表情斗图',
        tintColor: 'yellow'
    };
    rightButton = {
        title: '个人中心',
        tintColor: 'yellow'
    };

    /* componentWillMount() {

     fetch('http://192.168.89.101:8083/api/api/package/get-all-package')
     .then(res=>res.json())
     .then(resResult=> {
     console.log(JSON.stringify(resResult.Result))
     this.setState({allEmotion:resResult.Result})
     alert(this.state.allEmotion)
     })
     .catch((error)=> {
     console.log(error)
     }).done();


     }
     */
    async getAllEmotionPackages() {
        try {
            var response = await fetch('http://192.168.89.101:8083/api/api/package/get-all-package');
            var data = await response.json();

            if(data.Id==0) {
                this.setState({allEmotion: data.Result})

            }
        } catch (error) {
            throw error
        }
    }

    constructor(props) {
        var result = [];

        super(props);
        this.state = {
            collection: true, allEmotionsPackages: [], allEmotion:[]
        }

        this.leftButton.handler = ()=>this.props.navigationUtility.go('search', {
            onItemActiveChanged: function (_result) {
                result = _result;
            }
        })
        this.rightButton.handler = ()=>this.props.navigationUtility.go('Model')
        this.getAllEmotionPackages();
    }

    /*_collectPackages(name, emotion) {
     /!*emotionSvc.addFavoritePackage(b)
     console.log(JSON.stringify(emotionSvc.getFavoritePackages()))*!/

     if (!emotion.isFavorite) {
     emotionSvc.addFavoritePackage(name).then(()=> {


     alert('已收藏')
     })
     } else {
     emotionSvc.removeFavoritePackage(name).then(()=> {
     alert('已取消收藏')

     })
     }

     }*/
     componentDidMount(){
         emotionSvc.getAllEmotion(false,(error, data)=>{
             if(!error){
                 console.log('error')
             }
            this.setState({allEmotion:data})
             emotionSvc.loadFavorites1();
         })

     }
    _handleNextButtonPress1(ItemName, Item) {
        var _this = this;
        this.props.navigationUtility.go('nextView1', {Item: Item, ItemName: ItemName})
        /*this.props.navigator.push({
         component: nextView1,
         passProps: {B: c},
         title: b,
         leftButtonTitle: '返回',
         onLeftButtonPress(){
         _this.props.navigator.pop()
         },
         rightButtonTitle: _this.state.collection ? '收藏' : '已收藏',

         onRightButtonPress(){
         _this._collectPackages(b, c)
         }
         })*/

    }


    render() {
        let NavigationHeader = getNavigationHeader(this.leftButton, this.title, this.rightButton)
        var self = this;
        return (
            <View style={{flex:1,backgroundColor:'#f7f7f7'}}>
                {NavigationHeader}
                <ScrollView style={{flex:1,marginBottom:10}}>
                    <View style={styles.style1}>
                        <Image style={{width:14,height:14}} source={require('./../Image/point.png')}/>
                        <Text style={{marginLeft: 5}}>最新上架</Text>
                    </View>

                    <View style={styles.container}>
                        {
                            this.state.allEmotion.map(function(item,index){
                                if(item.GroupTags=='最新上架'){
                                    return (
                                        <TouchableOpacity key={index} underlayColor='#949494'
                                                          onPress={self._handleNextButtonPress1.bind(self,item.PackageName,item)}
                                                          style={{marginTop: 14, marginLeft: 6}}>
                                            <View  style={{backgroundColor:'#2e2c22',borderColor:'#2e2c22',borderWidth:3}}>
                                                <View style={{alignItems:'center',justifyContent:'center',backgroundColor:'white'}}>
                                                    <Image style={{height:90,width:90}} source={{uri:'http://192.168.89.101:8083/api/' + item.ListImage[0].ImgPath}}/>
                                                </View>
                                                <View style={{marginLeft:2,marginTop:6}}>
                                                    <Text style={{fontSize:12,color:'white'}}>{item.PackageName}</Text>
                                                </View>
                                                <View style={{marginLeft:2}}>
                                                    <Text style={{color:'#949494',fontSize:10}}>战斗力:{item.ATK}</Text>
                                                </View>

                                            </View>
                                        </TouchableOpacity>
                                    )
                                }

                            })
                        }
                    </View>

                    <View style={[styles.style1,{marginTop: 20}]}>
                        <Image style={{width:14,height:14}} source={require('./../Image/point.png')}/>
                        <Text style={{marginLeft: 5}}>斗图必备</Text>
                    </View>
                    <View style={styles.container}>
                        {
                            this.state.allEmotion.map(function(item,index){
                                if(item.GroupTags=='斗图必备'){
                                    return (
                                        <TouchableOpacity key={index} underlayColor='#949494'
                                                          onPress={self._handleNextButtonPress1.bind(self,item.PackageName,item)}
                                                          style={{marginTop: 14, marginLeft: 6}}>
                                            <View  style={{backgroundColor:'#2e2c22',borderColor:'#2e2c22',borderWidth:3}}>
                                                <View style={{alignItems:'center',justifyContent:'center',backgroundColor:'white'}}>
                                                    <Image style={{height:90,width:90}} source={{uri:'http://192.168.89.101:8083/api/' + item.ListImage[0].ImgPath}}/>
                                                </View>
                                                <View style={{marginLeft:2,marginTop:6}}>
                                                    <Text style={{fontSize:12,color:'white'}}>{item.PackageName}</Text>
                                                </View>
                                                <View style={{marginLeft:2}}>
                                                    <Text style={{color:'#949494',fontSize:10}}>战斗力:{item.ATK}</Text>
                                                </View>

                                            </View>
                                        </TouchableOpacity>
                                    )
                                }

                            })
                        }
                    </View>

                    <View style={[styles.style1,{marginTop: 20}]}>
                        <Image style={{width:14,height:14}} source={require('./../Image/point.png')}/>
                        <Text style={{marginLeft: 5}}>所有表情包</Text>
                    </View>

                    <View style={styles.container}>
                        {
                            this.state.allEmotion.map(function(item,index){
                                return (
                                    <TouchableOpacity key={index} underlayColor='#949494'
                                                      onPress={self._handleNextButtonPress1.bind(self,item.PackageName,item)}
                                                      style={{marginTop: 14, marginLeft: 6}}>
                                        <View  style={{backgroundColor:'#2e2c22',borderColor:'#2e2c22',borderWidth:3}}>
                                            <View style={{alignItems:'center',justifyContent:'center',backgroundColor:'white'}}>
                                                <Image style={{height:90,width:90}} source={{uri:'http://192.168.89.101:8083/api/' + item.ListImage[0].ImgPath}}/>
                                            </View>
                                            <View style={{marginLeft:2,marginTop:6}}>
                                                <Text style={{fontSize:12,color:'white'}}>{item.PackageName}</Text>
                                            </View>
                                            <View style={{marginLeft:2}}>
                                                <Text style={{color:'#949494',fontSize:10}}>战斗力:{item.ATK}</Text>
                                            </View>

                                        </View>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>

                </ScrollView>

            </View>
        );
    }
};
var styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',

    },
    item: {

        backgroundColor: '#2e2c22',
        borderColor: '#2e2c22',
        borderWidth: 3,

        width: Dimensions.get('window').width / 3 - 10,
        height: Dimensions.get('window').height / 5,
        borderRadius: 2


    },
    font1: {
        marginTop: 10,
        flex: 1,


    },
    buttonText: {
        borderWidth: 2,

        borderRadius: 10,
        borderColor: '#949494',
        color: 'red'


    },
    style1: {
        marginTop: 14,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,


    },

    style2: {
        flex: 1,
        alignItems: 'center',
        marginLeft: 10
    },
    style3: {
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 3,
        height: 100,
        width: 86

    },
    text1: {
        marginLeft: -16,
        fontSize: 14
    },
    text2: {
        marginLeft: -24,
        fontSize: 10
    }


})

module.exports = MyView;

