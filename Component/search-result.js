/**
 * Created by mymac on 16/2/17.
 */
'use strict';

var another = require('./search-result');
import emotionSvc from '../services/emotionSvc';
import  share from '../Share/share'
import getNavigationHeader from '../Component/view/navigation-header';
import React, {
    Component,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Image,
    ScrollView
} from 'react-native';

var styles = StyleSheet.create({


    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#F5FCFF',
        marginTop: 60,

    },
    item: {
        width: 80,
        height: 40,
        margin: 13,
        backgroundColor: 'black'
    },
    font: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center'


    }


});


class anotherPage extends Component {
    leftButton = {
        title: '返回',
        tintColor: 'yellow'
    }
    constructor(props){
        super(props)
        this.leftButton.handler=()=>{this.props.navigationUtility.go('search')}

    }
    _share(itemPath, itemId, item,id) {

        /*var self = this;
        self.props.navigator.push({
            component: share,
            passProps: {itemPath: itemPath, itemId: itemId, item: item},
            leftButtonTitle: '返回',
            onLeftButtonPress: function () {
                self.props.navigator.pop()
            }
        })
       console.log(itemId)*/
        var self=this;
        self.props.navigationUtility.go('share',{item:item,result:this.props.stateParams.result,Id:id,itemPath:itemPath,itemId:itemId})

    }

    render() {

        var conditions = this.props.stateParams.result;
        var filterEmotion1 = emotionSvc.filterEmotions1(conditions);
        var self = this;
        let NavigationHeader = getNavigationHeader(this.leftButton, this.title, this.rightButton)
        return (
            <View style={{flex:1}}>
                {NavigationHeader}
            <ScrollView style={{}}>
                <View style={styles.container}>
                    {
                        filterEmotion1.map(function (item,index) {

                            return (
                                <View key={index} >
                                    <TouchableHighlight style={{marginTop: 14, marginLeft: 12}} onPress={self._share.bind(self,item.ImgPath,item.Id,item,'2')}>
                                        <View
                                            style={{backgroundColor: '#2e2c22', borderColor: '#2e2c22', borderWidth: 3,}}>
                                            <Image resizeMode='cover' style={{height:80,width:80}} source={{uri:'http://192.168.89.101:8083/api/' + item.ImgPath}}/>
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
var styles = StyleSheet.create({
    container: {


        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start'


    },
    item: {
        width: 60,
        height: 80,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10


    },
})

module.exports = anotherPage;

