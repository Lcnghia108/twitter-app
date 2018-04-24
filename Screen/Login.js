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
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            pass: ''
        };
    }
    //    componentWillMount() {}
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
                    <Text style={styles.captions}>
                        {' '}
                        Tên, số điện thoại hoặc e-mail
                    </Text>
                    <TextInput
                        style={styles.input}
                        // placeholder="Tên, số điện thoại hoặc e-mail"
                        onChangeText={name => this.setState({ name })}
                        underlineColorAndroid="#1DA1F2"
                    />
                    <Text style={styles.captions}> Mật khẩu </Text>
                    <TextInput
                        style={styles.input}
                        //  placeholder="Mật khẩu"
                        onChangeText={pass => this.setState({ pass })}
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
                                Đăng nhập{' '}
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
export default Login;
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
    captions: {
        fontSize: 18,
        color: '#AAB8C2'
    },
    inputArea: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10
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
