import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';

class StartUp extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, padding: 40, paddingBottom: 60 }}>
                <Image
                    source={require('../assets/icon/Twitter_Logo_Blue.png')}
                    style={{ width: 60, height: 60 }}
                />
                <View style={styles.fulldisp}>
                    <Text style={styles.bigtext1}>
                        Xem chuyện gì đang xảy ra trên thế giới ngay lúc này
                    </Text>

                    <TouchableOpacity
                        style={styles.buttonStart}
                        onPress={() => this.props.navigation.navigate('SignUp')}
                    >
                        <View style={styles.buttonStart}>
                            <Text style={{ fontSize: 22, color: 'white' }}>
                                {' '}
                                Bắt đầu{' '}
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.bottomtext}>
                    <Text style={{ color: 'black' }}>
                        {' '}
                        Đã có một tài khoản?{' '}
                    </Text>
                    <TouchableOpacity
                        style={{}}
                        onPress={() => this.props.navigation.navigate('Login')}
                    >
                        <Text style={{ color: '#1DA1F2' }}> Đăng nhập</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
export default StartUp;
const styles = StyleSheet.create({
    fulldisp: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        paddingTop: 40
    },
    bigtext1: {
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        fontSize: 30,
        color: 'black',
        paddingBottom: 20,
        paddingTop: 20,
        marginBottom: 40
    },
    buttonStart: {
        paddingHorizontal: 55,
        paddingVertical: 8,
        backgroundColor: '#1DA1F2',
        borderRadius: 30
    },
    bottomtext: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    }
});
