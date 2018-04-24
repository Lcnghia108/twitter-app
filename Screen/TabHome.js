import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TabNavigator } from 'react-navigation';

class Search extends React.Component {
    render() {
        return (
            <View>
                <Text> NewsFeed </Text>
            </View>
        );
    }
}
class NewsFeed extends React.Component {
    render() {
        return (
            <View>
                <Text> NewsFeed </Text>
            </View>
        );
    }
}
const TabHome = TabNavigator(
    {
        NewsFeed: { screen: NewsFeed },
        Search: { screen: Search }
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'NewsFeed') {
                    iconName = `ios-information-circle${
                        focused ? '' : '-outline'
                    }`;
                } else if (routeName === 'Search') {
                    iconName = `ios-options${focused ? '' : '-outline'}`;
                }

                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Ionicons name={iconName} size={25} color={tintColor} />;
            }
        }),

        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray'
        },
        animationEnabled: true,
        swipeEnabled: true
    }
);
export default TabHome;
