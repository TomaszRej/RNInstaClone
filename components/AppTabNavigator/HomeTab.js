import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Content, Icon } from 'native-base';
import CardComponent from "../CardComponent";



class HomeTab extends Component{
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name='ios-home'
                  style={{color:tintColor, marginTop:5}}/>
        )
    };

    render(){
        return (
<Container style={styles.container}>
    <Content>
        <CardComponent likes={101}/>
        <CardComponent likes={3401}/>
        <CardComponent likes={23001}/>
    </Content>
</Container>
        );
    }
}
export default HomeTab;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});
