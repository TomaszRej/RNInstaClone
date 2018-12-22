import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Container, Content, Icon, Thumbnail, Body, Header, Left, Right} from 'native-base';
import CardComponent from "../CardComponent";
import pic from '../../assets/me.png';

class HomeTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name='ios-home'
                  style={{color: tintColor, marginTop: 5}}/>
        )
    };

    render() {
        return (
            <Container style={styles.container}>
                <Header>
                    <Left>
                        <Icon name='ios-camera' style={{paddingLeft: 10}}/>
                    </Left>

                    <Body>
                    <Text>Instagram</Text>
                    </Body>
                    <Right>
                        <Icon name='ios-send' style={{paddingRight: 10}}/>
                    </Right>
                </Header>


                <Content>
                    <View style={{height: 100}}>
                        <View style={{
                            flex: 1, flexDirection: 'row',
                            justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 7
                        }}>
                            <Text>Stories</Text>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Icon name='md-play' style={{fontSize: 14}}/>
                                <Text>Watch All</Text>
                            </View>
                        </View>
                        <View style={{flex: 3}}>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{
                                    alignItems: 'center',
                                    paddingStart: 5,
                                    paddingEnd: 5
                                }}
                            >
                                <Thumbnail
                                    style={{marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}
                                    source={pic}
                                />
                                <Thumbnail
                                    style={{marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}
                                    source={pic}
                                />
                                <Thumbnail
                                    style={{marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}
                                    source={pic}
                                />
                                <Thumbnail
                                    style={{marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}
                                    source={pic}
                                />
                                <Thumbnail
                                    style={{marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}
                                    source={pic}
                                />
                                <Thumbnail
                                    style={{marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}
                                    source={pic}
                                />
                                <Thumbnail
                                    style={{marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}
                                    source={pic}
                                />
                                <Thumbnail
                                    style={{marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}
                                    source={pic}
                                />
                            </ScrollView>
                        </View>
                    </View>

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
