import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    DrawerLayoutAndroid,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TabNavigator, TabBarBottom } from 'react-navigation';
//import { TabHome } from './TabHome';
//import { NewsFeed } from './NewsFeed';
//import { Search } from './Search';

const Profile = {
    name: 'Lưu Chí Nghĩa',
    ID: 'Exynos_neo',
    following: '226',
    follower: '24'
};
class Search extends React.Component {
    render() {
        return (
            <View>
                <Text> Seacrh </Text>
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
class Noti extends React.Component {
    render() {
        return (
            <View>
                <Text> Notification </Text>
            </View>
        );
    }
}
class Inbox extends React.Component {
    render() {
        return (
            <View>
                <Text> Message </Text>
            </View>
        );
    }
}
const TabHome = TabNavigator(
    {
        NewsFeed: { screen: NewsFeed },
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

                return <Ionicons name={iconName} size={25} color={tintColor} />;
            }
        }),

        tabBarOptions: {
            activeTintColor: '#1DA1F2',
            inactiveTintColor: '#AAB8C2',
            activeBackgroundColor: 'white',
            inactiveBackgroundColor: 'white'
        },
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'top',
        animationEnabled: true,
        swipeEnabled: true
    }
);

class Home extends React.Component {
    constructor() {
        super();
        this.openDrawer = this.openDrawer.bind(this);
    }

    openDrawer() {
        this.drawer.openDrawer();
    }

    render() {
        var navigationView = (
            <View style={styles.fullnavigationView}>
                <View style={styles.firstnavigationView}>
                    <Image
                        style={styles.avatars}
                        source={require('../assets/image/avaN.jpg')}
                    />
                    <Text style={styles.name}>{Profile.name}</Text>
                    <Text style={styles.id}>@{Profile.ID}</Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-evenly'
                        }}
                    >
                        <TouchableOpacity>
                            <Text style={styles.follower}>
                                {Profile.following} Đang theo dõi{' '}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.following}>
                                {Profile.follower} Người theo dõi{' '}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.secondnavigationView}>
                    <TouchableOpacity>
                        <Text style={styles.textsecond}>
                            <Ionicons
                                name="ios-person-outline"
                                size={27}
                                color="#AAB8C2"
                            />
                            {'    '}
                            Hồ sơ{' '}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.textsecond}>
                            <Ionicons
                                name="ios-paper-outline"
                                size={27}
                                color="#AAB8C2"
                            />
                            {'   '}
                            Danh sách{' '}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.textsecond}>
                            <Ionicons
                                name="ios-bookmark-outline"
                                size={27}
                                color="#AAB8C2"
                            />
                            {'    '}
                            Dấu trang{' '}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.textsecond}>
                            <Ionicons
                                name="md-flash"
                                size={27}
                                color="#AAB8C2"
                            />
                            {'     '}
                            Khoảnh khắc{' '}
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.thirdnavigationView}>
                    <TouchableOpacity>
                        <Text style={styles.textsecond}>
                            {' '}
                            Cài đặt và riêng tư{' '}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.textsecond}>
                            {' '}
                            Trung tâm trợ giúp{' '}
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.endnavigationView}>
                    <TouchableOpacity>
                        <Ionicons
                            name="ios-moon-outline"
                            size={27}
                            color="#1DA1F2"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons
                            name="ios-qr-scanner-outline"
                            size={27}
                            color="#1DA1F2"
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );

        return (
            <DrawerLayoutAndroid renderNavigationView={() => navigationView}>
                <View style={styles.topHome}>
                    <TouchableOpacity onPress={() => this.openDrawer}>
                        <Image
                            style={styles.avatarshome}
                            source={require('../assets/image/avaN.jpg')}
                        />
                    </TouchableOpacity>
                </View>
                <TabHome />
            </DrawerLayoutAndroid>
        );
    }
}
export default Home;
const styles = StyleSheet.create({
    fullnavigationView: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch'
    },
    firstnavigationView: {
        borderBottomWidth: 1,
        borderBottomColor: '#AAB8C2',
        paddingHorizontal: 20,
        paddingBottom: 18,
        paddingTop: 10
    },
    secondnavigationView: {
        borderBottomWidth: 1,
        borderBottomColor: '#AAB8C2',
        paddingHorizontal: 20,
        paddingBottom: 18,
        paddingTop: 10
    },
    thirdnavigationView: {
        flex: 2,
        borderBottomWidth: 1,
        borderBottomColor: '#AAB8C2',
        paddingHorizontal: 20,
        paddingBottom: 18,
        paddingTop: 10
    },
    endnavigationView: {
        paddingHorizontal: 20,
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    avatars: {
        height: 66,
        width: 66,
        borderRadius: 33
    },
    avatarshome: {
        height: 44,
        width: 44,
        borderRadius: 22,
        marginLeft: 5
    },
    topHome: {
        height: 65,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    name: {
        fontSize: 22,
        marginVertical: 5,
        fontWeight: 'bold',
        color: 'black'
    },
    id: {
        fontSize: 17,
        color: '#AAB8C2',
        marginBottom: 15
    },
    follower: {
        fontSize: 17,
        color: '#AAB8C2',
        marginRight: 25
    },
    following: {
        fontSize: 17,
        color: '#AAB8C2'
    },
    textsecond: {
        marginVertical: 17,
        fontSize: 20,
        color: 'black'
    }
});
