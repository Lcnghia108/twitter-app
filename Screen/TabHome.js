import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import NewsFeed from './NewsFeed';
import Search from './Search';
// import Profiles from '../data/Profile';
import Noti from './Noti';
import Inbox from './Inbox';
//import Post from './Post';

const TabHome = TabNavigator(
    {
        NewsFeed: { screen: NewsFeed },
        //   Post: { screen: Post },
        Search: { screen: Search },
        Notifications: { screen: Noti },
        Inbox: { screen: Inbox }
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'NewsFeed') {
                    iconName = `ios-home${focused ? '' : '-outline'}`;
                }
                if (routeName === 'Search') {
                    iconName = `ios-search${focused ? '' : '-outline'}`;
                }
                if (routeName === 'Notifications') {
                    iconName = `ios-notifications${focused ? '' : '-outline'}`;
                }
                if (routeName === 'Inbox') {
                    iconName = `ios-mail${focused ? '' : '-outline'}`;
                }
                if (routeName === 'Post') {
                    iconName = `ios-create${focused ? '' : '-outline'}`;
                }
                return <Ionicons name={iconName} size={28} color={tintColor} />;
            }
        }),

        tabBarOptions: {
            activeTintColor: '#1DA1F2',
            inactiveTintColor: '#657786',
            activeBackgroundColor: 'white',
            inactiveBackgroundColor: 'white'
        },
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'top',
        animationEnabled: true,
        swipeEnabled: true
    }
);
export default TabHome;
