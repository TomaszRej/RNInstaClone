import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Button ,Container} from 'native-base';


class EditScreen extends Component{
    handlePressOnEdit = () => {
        () => this.props.navigation.navigate('Home')
    };
    render() {
        return (
        <Container style={{ alignItems: 'center', justifyContent:'center'}}>

                <Button bordered dark
                        style={{
                              justifyContent: 'center', alignSelf: 'center',
                            height: 35,alignItems: 'center', padding: 10
                        }}
                        onPress={() => this.props.navigation.navigate('New')}
                >
                    <Text>Edit Profile</Text>
                </Button>
        </Container>


        );
    }
}
export default EditScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: '#F5FCFF',

    },

});
