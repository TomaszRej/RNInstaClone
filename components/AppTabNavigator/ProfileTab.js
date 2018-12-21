import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Icon} from "native-base";


class ProfileTab extends Component{
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name='ios-person'
                  style={{color:tintColor,marginTop:5}}/>
        )
    };
    render(){
        return (
            <View style={styles.container}>
                <Text>Profile Tab</Text>
            </View>
        );
    }
}
export default ProfileTab;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});