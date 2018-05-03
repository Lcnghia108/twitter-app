/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { View, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './Home';
import StartUp from './StartUp';
import Login from './Login';
import SignUp from './SignUp';
import NewsFeed from './NewsFeed';
import Search from './Search';
import Post from './Post';

class LogoTitle extends React.Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}
            >
                <Image
                    source={require('../assets/icon/Twitter_Logo_Blue.png')}
                    style={{ width: 50, height: 50 }}
                />
            </View>
        );
    }
}

const App = StackNavigator({
    StartUp: {
        screen: StartUp,
        navigationOptions: { header: null }
    },

    SignUp: {
        screen: SignUp,
        navigationOptions: {
            header: null
            // title: 'Đăng ký tài khoản',
            // headerTitle: <LogoTitle />
        }
    },
    Login: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    },
    // initialRouter
    Home: {
        screen: Home,
        navigationOptions: {
            header: null
        }
    },

    NewsFeed: {
        screen: NewsFeed,
        navigationOptions: {
            header: null
        }
    },
    Post: {
        screen: Post,
        navigationOptions: {
            header: null
        }
    },
    Search: {
        screen: Search,
        navigationOptions: {
            header: null
        }
    }
});
export default App;
