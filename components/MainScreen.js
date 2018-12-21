/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { Icon } from 'native-base';
import { createBottomTabNavigator } from 'react-navigation';
import { createAppContainer} from 'react-navigation';
import HomeTab from "./AppTabNavigator/HomeTab";
import SearchTab from "./AppTabNavigator/SearchTab";
import AddMediaTab from "./AppTabNavigator/AddMediaTab";
import LikesTab from "./AppTabNavigator/LikesTab";
import ProfileTab from "./AppTabNavigator/ProfileTab";

class MainScreen extends Component{
   static navigationOptions = {
       headerLeft: <Icon name='ios-camera' style={{paddingLeft: 15}}/>,
       title: 'Instagram',
       headerRight: <Icon name='ios-send' style={{paddingRight: 15}}/>
   };
    render() {
        return (
            <AppTabContainer/>
        );
    }
}
export default MainScreen;

const AppTabNavigator = createBottomTabNavigator({
    HomeTab: {
        screen: HomeTab
    },
    SearchTab: {
        screen: SearchTab
    },
    AddMediaTab: {
        screen: AddMediaTab
    },
    LikesTab: {
        screen: LikesTab
    },
    ProfileTab: {
        screen: ProfileTab
    },
},{
    tabBarOptions: {
        showLabel: false,
        //showIcon: true,
        activeTintColor: '#000',
        inactiveTintColor: '#d1cece'
    }
});

const AppTabContainer = createAppContainer(AppTabNavigator);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

});
