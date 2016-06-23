'use strict';
import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    ScrollView
} from 'react-native';
import nextView1 from './../Next/next-view';
import  share from '../Share/share';
import getNavigationHeader from '../Component/view/navigation-header';
import emotionSvc from '../services/emotionSvc';
class Collection extends Component {
    leftButton = {
        title: '返回',
        tintColor: 'yellow'
    }
    title={
        title:'个人收藏',
        tintColor:'yellow'
    }
    constructor(props) {
        super(props)
        this.leftButton.handler = ()=>this.props.navigationUtility.go('Model')

    }
    _share(itemPath, itemId, item,id) {
        var self = this;

        self.props.navigationUtility.go('share',{itemPath:itemPath,itemId:itemId,item:item,Id:id})
        /*self.props.navigator.push({
            leftButtonTitle:'返回',
            onLeftButtonPress:function(){
                nav.pop();
            },
            component: share,
            passProps: {itemPath: itemPath, itemId: itemId, item: item}

        })*/

    }


    _jump(ItemName,Item){
        var self=this;
        self.props.navigationUtility.go('nextView1',{ItemName:ItemName,Item:Item})
      /*self.props.navigator.push({
          leftButtonTitle:'返回',
          onLeftButtonPress:function(){
              nav.pop();
          },
          component:nextView1,
          passProps:{B:b}
        })*/

    }
    render() {
        var self=this;
        let NavigationHeader=getNavigationHeader(this.leftButton,this.title,this.rightButton)
        return (
           <View style={{flex:1}}>
               {NavigationHeader}
           <ScrollView>
                <View style={styles.style1}>
                    <Image style={{width:14,height:14}} source={require('./../Image/point.png')}/>
                    <Text style={{marginLeft: 5}}>收藏的表情</Text>

                </View>

               <View style={styles.container}>
                   {
                       emotionSvc.getPhotos1().map(function(item,index){
                           return(

                               <View key={index} style={{marginTop:14,marginLeft:12}}>
                                  <TouchableHighlight onPress={self._share.bind(self,item.ImgPath,item.Id,item,3)}  >
                                  <Image style={styles.Image} source={{uri:'http://192.168.89.101:8083/api/'+item.ImgPath}}/>
                                  </TouchableHighlight>
                               </View>
                           )
                       })
                   }
               </View>
               <View style={styles.style2}>
                   <Image style={{width:14,height:14}} source={require('./../Image/point.png')}/>
                   <Text style={{marginLeft: 5}}>收藏的表情包</Text>
               </View>
               <View style={styles.container}>
                   {
                       emotionSvc.getPackages1().map(function(item,index){
                           return(

                               <View key={index} >
                                   <TouchableHighlight onPress={self._jump.bind(self,item.PackageName,item)} style={{marginTop: 14, marginLeft: 12}}>
                                   <View >
                                   <Image style={styles.Image} source={{uri:'http://192.168.89.101:8083/api/' + item.ListImage[0].ImgPath}}/>
                                   </View>
                                   </TouchableHighlight>
                               </View>
                           )
                       })
                   }
               </View>

       </ScrollView>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    Image: {

        height: 80,
        width: 80
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent:'flex-start',


    },
    style1: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
        marginTop:20



    },
    style2:{
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
        marginTop:20
    },
    item: {
        width: 60,
        height: 60,
        margin: 20,
        marginRight: 10


    },


});
module.exports = Collection;