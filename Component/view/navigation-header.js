/**
 * Created by mymac on 16/3/30.
 */
/**
 * Created by mymac on 16/3/30.
 */
/**
 * Created by mymac on 16/3/30.
 */
import React from  'react-native';
import NavigationBar from 'react-native-navbar'

export default function getNavigation(leftButton, title, rightButton) {
    let props = {tintColor: '#2e2c22'};
    if (leftButton) {
        props.leftButton = leftButton;
    }
    if (title) {
        props.title = title;
    }
    if (rightButton) {
        props.rightButton = rightButton;
    }
    return (<NavigationBar {...props}/>)
}