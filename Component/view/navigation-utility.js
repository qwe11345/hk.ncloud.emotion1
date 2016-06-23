/**
 * Created by mymac on 16/3/30.
 */
/**
 * Created by mymac on 16/3/30.
 */
/**
 * Created by mymac on 16/3/29.
 */
/**
 * Created by betree on 16/3/17.
 */
import React from 'react-native';
import {StateUtils} from 'NavigationExperimental';

export default class NavigationUtility {

    /**
     * NavigationUtility类的构造函数, 需要路由配置表和默认路由两个参数.
     * @param routeConfig
     *  路由配置表, 结构形如: { home: HomeView, products: ProductsView, about: AboutView }
     *  每一个键值对表示一个路由界面, 其中键表示路由名称, 值表示界面视图.
     * @param defaultRouteName
     *  默认视图名称, 字符串. 比如: 'home'
     */
    constructor(routeConfig, defaultRouteName) {
        this.routeConfig = routeConfig;
        this.defaultRouteName = defaultRouteName;

        let initialRoute = {key: 'root', index: 0};
        initialRoute.children = Object.keys(this.routeConfig).map((key)=> {
            return {key}
        });
        this.initialRoute = initialRoute;
    }

    /**
     * 跳转到指定的界面
     * @param routeName
     *  路由名称, 即路由配置表中的键, 如 'home', 'products', 'about' 等.
     * @param stateParams
     *  传递到路由视图的参数, 任意类型, 在视图中可以通过 this.props.stateParams 获得改参数.
     */
    go(routeName, stateParams) {
        this.onNavigate && this.onNavigate({type: routeName, stateParams});
    }

    /**
     * 路由筛选器, 请把该函数绑定到实例之后, 直接传递给NavigationRootContainer.
     * 例如: var reducer = xxx.reducer.bind(xxx)
     * @param previousState
     *  无需关心
     * @param action
     *  无需关心
     * @returns {*}
     */
    reducer(previousState, action) {
        let actionType = action && action.type;
        if (!actionType) {
            return previousState || StateUtils.jumpTo(this.initialRoute, this.defaultRouteName);
        }

        let nextStateIndex = StateUtils.indexOf(previousState, actionType);
        if (nextStateIndex === null) {
            return previousState || StateUtils.jumpTo(this.initialRoute, this.defaultRouteName);
        }

        let nextState = StateUtils.jumpToIndex(previousState, nextStateIndex);
        nextState.children[nextState.index].stateParams = action.stateParams;
        return nextState;
    }

    /**
     * 呈现当前视图, 请把该函数绑定到实例之后, 直接传递给NavigationRootContainer.
     * 例如: var renderNavigation = xxx.renderNavigation.bind(xxx)
     * @param navigationState
     *  无需关心
     * @param onNavigate
     *  无需关心
     * @returns {*}
     */
    renderNavigation(navigationState, onNavigate) {
        this.onNavigate = onNavigate;

        var state = navigationState.children[navigationState.index];
        let IndividualView = this.routeConfig[state.key];
        if (!IndividualView) {
            return null;
        }

        return (<IndividualView navigationUtility={this} stateParams={state.stateParams}/>);
    }
}

