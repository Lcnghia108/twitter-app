import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    DrawerLayoutAndroid,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import TabHome from './TabHome';
import NewsFeed from './NewsFeed';
import Search from './Search';
import Profiles from '../data/Profile';
import Noti from './Noti';
import Inbox from './Inbox';
import colors from '../Styles/styles';
import Post from './Post';
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
                    <Text style={styles.name}>{Profiles.name}</Text>
                    <Text style={styles.id}>@{Profiles.ID}</Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-evenly'
                        }}
                    >
                        <TouchableOpacity>
                            <Text style={styles.follower}>
                                {Profiles.following} Đang theo dõi{' '}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.following}>
                                {Profiles.follower} Người theo dõi{' '}
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
            <DrawerLayoutAndroid
                ref={_drawer => (this.drawer = _drawer)}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => navigationView}
            >
                <View style={styles.topHome}>
                    <TouchableOpacity onPress={() => this.openDrawer}>
                        <Image
                            style={styles.avatarshome}
                            source={require('../assets/image/avaN.jpg')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Post')}
                    >
                        <Ionicons
                            name="ios-create-outline"
                            size={40}
                            color="#1DA1F2"
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
        borderBottomColor: colors.extraLightGray,
        paddingHorizontal: 20,
        paddingBottom: 18,
        paddingTop: 10
    },
    secondnavigationView: {
        borderBottomWidth: 1,
        borderBottomColor: colors.extraLightGray,
        paddingHorizontal: 20,
        paddingBottom: 18,
        paddingTop: 10
    },
    thirdnavigationView: {
        flex: 2,
        borderBottomWidth: 1,
        borderBottomColor: colors.extraLightGray,
        paddingHorizontal: 20,
        paddingBottom: 18,
        paddingTop: 15
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
        height: 36,
        width: 36,
        borderRadius: 18,
        marginLeft: 5
    },
    topHome: {
        height: 65,
        paddingHorizontal: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white'
    },
    name: {
        fontSize: 22,
        marginVertical: 5,
        fontWeight: 'bold',
        color: colors.Black
    },
    id: {
        fontSize: 17,
        color: colors.darkGray,
        marginBottom: 15
    },
    follower: {
        fontSize: 17,
        color: colors.darkGray,
        marginRight: 25
    },
    following: {
        fontSize: 17,
        color: colors.darkGray
    },
    textsecond: {
        marginVertical: 17,
        fontSize: 20,
        color: colors.Black
    }
});
