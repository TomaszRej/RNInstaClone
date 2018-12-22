import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Container, Content, Item, Input, Form} from 'native-base';


class New extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'xxx'
        }
    }


    handlePressOnEdit = (val) => {
        console.log(val,'va;ue');
        this.setState({
            name: val
        },()=>{

            console.log(this.state.name);
        });
    };

    submitEdit = () => {
        this.props.navigation.goBack();
        //pass the state to store
        console.log(this.state.name);
    };

    render() {
        return (
            <Container>
                <Content>
                    <Form>
                        <Item>
                            <Input placeholder='write your name' onChangeText={this.handlePressOnEdit} value={this.state.name}/>
                        </Item>

                        <Button bordered dark
                                style={{
                                    justifyContent: 'center', alignSelf: 'center',
                                    height: 35, width:'100%',alignItems: 'center', padding: 10
                                }}
                                onPress={this.submitEdit}
                        >
                            <Text>New</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>


        );
    }
}

export default New;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: '#F5FCFF',

    },

});
