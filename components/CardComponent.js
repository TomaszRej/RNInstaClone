import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Icon, Card, CardItem, Thumbnail, Body, Left, Right, Button} from 'native-base';

import pic from '../assets/me.png';
import postedPic from '../assets/postedPic.png';


class CardComponent extends Component {

    render() {
        return (
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={pic}/>
                        <Body>
                        <Text>Tomek</Text>
                        <Text note>Sep 17, 2018</Text>
                        </Body>

                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image source={postedPic} style={{width: null, height: 200, flex: 1}}/>
                </CardItem>
                <CardItem style={{height: 45}}>
                    <Left>
                        <Button transparent>
                            <Icon name='ios-heart'
                            style={{color:'black'}}/>
                        </Button>
                        <Button transparent>
                            <Icon name='ios-chatbubbles'
                                  style={{color:'black'}}/>
                        </Button>
                        <Button transparent>
                            <Icon name='ios-send'
                                  style={{color:'black'}}/>
                        </Button>
                    </Left>
                </CardItem>
                <CardItem>
                    <Text>{this.props.likes}</Text>
                </CardItem>
                <CardItem>
                    <Body>
                    <Text>
                        <Text style={{fontWeight: '900'}}>Tomek{' '}</Text>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolores iste minus necessitatibus odit, perferendis quidem quos ratione reprehenderit unde?
                    </Text>
                    </Body>
                </CardItem>
            </Card>
        );
    }
}

export default CardComponent;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});
