import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import {Icon, Container, Content, Header, Left, Right, Button, Body} from "native-base";
import EntypoIcon from 'react-native-vector-icons/Entypo';
import pic from '../../assets/me.png';

import EditScreen from '../EditScreen';
import ProfileTab from './ProfileTab';
import New from '../New';

import {createAppContainer, createStackNavigator } from 'react-navigation';
class LikesTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name='ios-heart'
                  style={{color: tintColor, marginTop: 5}}/>
        )
    };


    handlePressOnEdit = () => {
        alert('test');
    };

    render() {
        return (

               <AppContainer/>

        );
    }
}
const AppNavigator = createStackNavigator({
    EditScreen,
    New
});

const AppContainer = createAppContainer(AppNavigator);

export default LikesTab;





