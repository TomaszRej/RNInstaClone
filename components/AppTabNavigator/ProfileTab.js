import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import {Icon, Container, Content, Header, Left, Right, Button, Body} from "native-base";
import EntypoIcon from 'react-native-vector-icons/Entypo';
import pic from '../../assets/me.png';

var images = [pic, pic, pic, pic, pic, pic, pic, pic, pic, pic];
var {width, height} = Dimensions.get('window');

class ProfileTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name='ios-person'
                  style={{color: tintColor, marginTop: 5}}/>
        )
    };

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
        }
    }

    segmentClicked = (index) => {
        this.setState({
            activeIndex: index
        })
    };
    renderSectionOne = () => {
        return images.map((image, index) => {
            return (
                <View key={index}
                      style={[{width: (width) / 3}, {height: (width) / 3}, {marginBottom: 2}, index % 3 !== 0 ? {paddingLeft: 2} : {paddingLeft: 0}]}>

                    <Image style={{flex: 1, width: undefined, height: undefined}} source={image}/>

                </View>
            )
        })
    };

    renderSection = () => {
        if (this.state.activeIndex === 0) {
            return (
                <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                    {this.renderSectionOne()}
                </View>
            )
        } else if (this.state.activeIndex === 1) {
            return (
                <View>
                    <Text>
                        This is second section
                    </Text>
                </View>
            )
        }
    };

    handlePressOnEdit = () => {
        alert('test');
    };

    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Icon name='md-person-add' style={{paddingLeft: 10}}/>
                    </Left>

                    <Body>
                    <Text>Tomek</Text>
                    </Body>
                    <Right>
                        <EntypoIcon name='back-in-time' style={{paddingRight: 10}} size={32}/>
                    </Right>
                </Header>
                <Content>
                    <View style={{paddingTop: 10}}>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{flex: 1, alignItems: 'center'}}>
                                <Image source={pic} style={{width: 75, height: 75, borderRadius: 37.5}}/>
                            </View>
                            <View style={{flex: 3}}>
                                <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                                    <View style={{alignItems: 'center'}}>
                                        <Text>20</Text>
                                        <Text style={{fontSize: 10, color: 'grey'}}>posts</Text>
                                    </View>
                                    <View style={{alignItems: 'center'}}>
                                        <Text>102</Text>
                                        <Text style={{fontSize: 10, color: 'grey'}}>fallowers</Text>
                                    </View>
                                    <View style={{alignItems: 'center'}}>
                                        <Text>220</Text>
                                        <Text style={{fontSize: 10, color: 'grey'}}>fallowing</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection: 'row', paddingTop: 10}}>
                                    <Button bordered dark
                                            style={{
                                                flex: 3, marginLeft: 10, justifyContent: 'center',
                                                height: 35
                                            }}
                                            onPress={this.handlePressOnEdit}
                                    >
                                        <Text>Edit Profile</Text>
                                    </Button>
                                    <Button bordered dark style={{
                                        flex: 1, height: 35, marginRight: 10,
                                        marginLeft: 5, justifyContent: 'center'
                                    }}>
                                        <Icon name='settings' size={10}/>
                                    </Button>
                                </View>

                            </View>
                        </View>
                        <View style={{paddingVertical: 10, paddingHorizontal: 10}}>
                            <Text style={{fontWeight: 'bold'}}>
                                Tomek
                            </Text>
                            <Text>music | yoga | guitar</Text>
                            <Text>www.tomek.pl</Text>
                        </View>
                    </View>
                    <View>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            borderTopWidth: 1,
                            borderTopColor: '#eae5e5'
                        }}>
                            <Button transparent
                                    onPress={() => this.segmentClicked(0)}
                                    active={this.state.activeIndex === 0}

                            >
                                <Icon name='ios-apps'
                                      style={[this.state.activeIndex === 0 ? {} : {color: 'grey'}]}/>
                            </Button>
                            <Button transparent
                                    onPress={() => this.segmentClicked(1)}
                                    active={this.state.activeIndex === 1}>
                                <Icon name='ios-list'
                                      style={[this.state.activeIndex === 1 ? {} : {color: 'grey'}]}/>
                            </Button>
                            <Button transparent
                                    onPress={() => this.segmentClicked(2)}
                                    active={this.state.activeIndex === 2}>
                                <Icon name='ios-people'
                                      style={[this.state.activeIndex === 2 ? {} : {color: 'grey'}]}/>
                            </Button>
                            <Button transparent
                                    onPress={() => this.segmentClicked(3)}
                                    active={this.state.activeIndex === 3}>
                                <Icon name='ios-bookmark'
                                      style={[this.state.activeIndex === 3 ? {} : {color: 'grey'}]}/>
                            </Button>
                        </View>
                        {this.renderSection()}
                    </View>

                </Content>


            </Container>
        );
    }
}

export default ProfileTab;


