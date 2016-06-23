/**
 * Created by mymac on 16/3/15.
 */
import React, {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight,
    Image,
    ScrollView

} from 'react-native';
var Dimensions = require('Dimensions');
import getNavigationHeader from '../Component/view/navigation-header'
import emotionSvc from '../services/emotionSvc';
import  share from '../Share/share'

export default class nextView1 extends React.Component {
    leftButton = {
        title: '返回',
        tintColor: 'yellow'
    };

    title = {
        title: this.props.stateParams.ItemName,
        tintColor: 'yellow',

    };

    rightButton = {
        title: '',
        tintColor: 'yellow'
    };

    constructor(props) {

        super(props);


        this.state = {
            name: this.props.stateParams.ItemName,
            isFavorite: this.props.stateParams.Item.isFavorite,
        };

        this.leftButton.handler = ()=>this.props.navigationUtility.go('MyView')

        this.rightButton.handler = function () {
            if (!this.state.isFavorite) {
                emotionSvc.addFavoritePackage1(this.state.name).then(function () {
                    this.setState({isFavorite: true});
                }.bind(this))
            } else {
                emotionSvc.removeFavoritePackage1(this.state.name).then(()=> {
                    this.setState({isFavorite: false});
                })
            }
        }.bind(this);

    }

    _share(itemPath, itemId, item, id) {

        var self = this;
        self.props.navigationUtility.go('share', {
            itemPath: itemPath,
            itemId: itemId,
            item: item,
            ItemName: this.props.stateParams.ItemName,
            Item: this.props.stateParams.Item,
            Id: id
        })
        /*self.props.navigator.push({
         component: share,
         passProps:{itemPath:itemPath,itemId:itemId,item:item},
         })*/
    }

    render() {
        var self = this;
        this.rightButton.title = this.state.isFavorite ? '已收藏' : '收藏';
        let NavigationHeader = getNavigationHeader(this.leftButton, this.title, this.rightButton)
        return (
            <View style={{flex:1,backgroundColor:'#2e2c22'}}>
                {NavigationHeader}
                <ScrollView>
                    <View style={styles.container}>
                        {
                            this.props.stateParams.Item.ListImage.map(function (item) {
                                return (

                                    <View key={item.Id}>
                                        <TouchableHighlight style={{marginTop: 14, marginLeft: 12}}
                                                            onPress={/*()=>self._share()*/ self._share.bind(self,item.ImgPath,item.Id,item,'1')}>
                                            <View>
                                                <Image style={{height:90,width:90}} source={{uri:'http://192.168.89.101:8083/api/' + item.ImgPath}}/>
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
        justifyContent: 'flex-start',
    },
    item: {
        width: Dimensions.get('window').width / 3,
        height: Dimensions.get('window').height / 5,
        /* width: 60,
         height: 80,*/
        /*marginLeft: 20,
         marginRight: 20,*/
        marginTop: 10,
    },
})
