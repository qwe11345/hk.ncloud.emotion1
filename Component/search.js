/**
 * Created by mymac on 16/2/17.
 */
'use strict';
var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');
var anotherpage = require('./search-result');


import React, {
    Component,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    ScrollView
} from 'react-native';

var styles = StyleSheet.create({


    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#f7f7f7',
        justifyContent: 'flex-start'

    },
    item: {

        width:60,
        height: 40,
        marginTop: 16,
        marginLeft: 16,
        backgroundColor: 'black'
    },
    font: {
        color: 'white',
        fontSize: 12,
        textAlign: 'center'


    }


});

import emotionSvc from '../services/emotionSvc';
import getNavigationHeader from '../Component/view/navigation-header'

export  default class Search extends Component {
    leftButton = {
        title: '返回',
        tintColor: 'yellow'
    };
    title = {
        title: '筛选',
        tintColor: 'yellow'
    };
    rightButton = {
        title: '完成',
        tintColor: 'yellow'
    }

    constructor(props) {
        super(props);
        this.state = {
            itemActiveChanged: false,
            color1: 'white',

        };

        this.leftButton.handler = ()=>this.props.navigationUtility.go('MyView')
        this.rightButton.handler = ()=> {
            var result = this.tags.filter((item)=>item.active).map((item)=>item.tag);
            this.props.navigationUtility.go('anotherpage',{result:result})

        };

        this.tags = emotionSvc.getAllTags1().map((item)=>({tag: item, active: false}));
    }


    render() {

        var self = this;
        let NavigationHeader = getNavigationHeader(this.leftButton, this.title, this.rightButton)
        return (
            <View style={{flex:1,backgroundColor:'#f7f7f7'}}>

                {NavigationHeader}
                <ScrollView>
                <View style={styles.container}>
                    {
                        this.tags.map(function (item) {
                            var activeColor = {backgroundColor: item.active ? '#d3b001' : '#2e2c22'};
                            return (
                                <View key={item.tag} style={[styles.item, activeColor]}>
                                    <TouchableHighlight style={{flex: 1, justifyContent: 'center'}} onPress={()=> {
                                    item.active = !item.active;
                                    self.setState({itemActiveChanged: !self.state.itemActiveChanged});
                                }}
                                    >
                                        <Text style={[styles.font]}>{item.tag}</Text>
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

module.exports = Search;

