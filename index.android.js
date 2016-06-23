'use strict';
import aboutApplication from './Component/about-application';
import anotherpage from './Component/search-result';
import Collection from './Component/collection';
import Model from './Component/model';
import MyView from './Component/home-view';
import nextView1 from './Next/next-view';
import search from './Component/search';
import Setting from  './Component/setting';
import emotionSvc from './services/emotionSvc';
import WechatSvc from './services/wechat-svc';
import share from './Share/share';
import React, {
    AppRegistry,
    Component,
    View,
    Text,
    NavigatorIOS,
    TouchableHighlight,
    StyleSheet
} from 'react-native';
var routeConfig = {
    aboutAppliction: aboutApplication,
    anotherpage: anotherpage,
    Collection: Collection,
    Model: Model,
    MyView: MyView,
    nextView1: nextView1,
    search: search,
    Setting: Setting,
    share: share
}
import NavigationUtility from './Component/view/navigation-utility';
var navigationUtility = new NavigationUtility(routeConfig, 'MyView');
var reducer = navigationUtility.reducer.bind(navigationUtility);
var renderNavigation = navigationUtility.renderNavigation.bind(navigationUtility);
import {RootContainer} from 'NavigationExperimental';
class Emotion extends Component {

    render() {
        return (
            <RootContainer reducer={reducer} renderNavigation={renderNavigation}/>
        )
    }
}

/*emotionSvc.loadFavorites();*/
WechatSvc.initialize();
AppRegistry.registerComponent('Emotion', () => Emotion);