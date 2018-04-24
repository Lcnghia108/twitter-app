import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import { Ionicons } from 'react-native-vector-icons/Ionicons';
import { StackNavigator } from 'react-navigation';
import { StartUp } from './StartUp';
import { Home } from './Home';
class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            mail: ''
        };
    }
    componentWillMount() {}
    render() {
        return (
            <View style={styles.fullDisp}>
                <View style={styles.headerArea}>
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => this.props.navigation.goBack()}
                    >
                        <Ionicons
                            name="md-arrow-back"
                            size={30}
                            color="#1DA1F2"
                        />
                    </TouchableOpacity>
                    <View
                        style={{
                            alignItems: 'center',
                            position: 'relative',
                            marginLeft: 130
                        }}
                    >
                        <Image
                            source={require('../assets/icon/Twitter_Logo_Blue.png')}
                            style={{
                                width: 60,
                                height: 60
                            }}
                        />
                    </View>
                </View>
                <View style={styles.inputArea}>
                    <TextInput
                        style={styles.input}
                        placeholder="Tên"
                        onChangeText={name => this.setState({ name })}
                        underlineColorAndroid="#1DA1F2"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Số điện thoại hoặc email"
                        onChangeText={mail => this.setState({ mail })}
                        underlineColorAndroid="#1DA1F2"
                    />
                </View>
                <View style={styles.bottomArea}>
                    <TouchableOpacity
                        style={styles.buttonNext}
                        onPress={() => this.props.navigation.navigate('Home')}
                    >
                        <View>
                            <Text style={{ color: 'white', fontSize: 18 }}>
                                {' '}
                                Tiếp{' '}
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
export default SignUp;

const styles = StyleSheet.create({
    fullDisp: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    backButton: {
        padding: 15,
        alignItems: 'flex-start'
    },
    input: {
        justifyContent: 'center',
        alignItems: 'stretch',
        padding: 12,
        //  width: 200,
        marginBottom: 20,
        fontSize: 18
    },
    inputArea: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        paddingTop: 40,
        paddingLeft: 40,
        paddingRight: 40
    },
    headerArea: {
        flexDirection: 'row'
    },
    bottomArea: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: 70,
        borderTopWidth: 1,

        borderTopColor: '#AAB8C2',
        zIndex: 2
    },
    buttonNext: {
        paddingHorizontal: 25,
        paddingVertical: 8,
        backgroundColor: '#1DA1F2',
        borderRadius: 20,
        marginRight: 40
    }
});
