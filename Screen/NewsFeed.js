import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import Post from './Post';
import { Login } from './Login';
import colors from '../Styles/styles';

class NewsFeed extends React.Component {
    constructor(props) {
        super(props);
        //console.log('CONSTRUCTOR');
        var data = [];
        var name = [
            'Chị Bé',
            'Hoàng tử yếu đuối',
            'Gấu gầy guộc',
            'Mimi mập mạp',
            'Hoa Vẹt',
            'Cháo Thỏ'
        ];
        var ava = [
            require('../assets/image/1.jpg'),
            require('../assets/image/2.jpg'),
            require('../assets/image/3.jpg'),
            require('../assets/image/4.jpg'),
            require('../assets/image/5.png'),
            require('../assets/image/7.jpg')
        ];
        var id = ['be', 'hoa', 'gauteddy', 'mimi', 'vet', 'thaopham'];
        var content = [
            'Đôi khi anh mơ về một giấc mơ xa vời. Ta đi bên nhau một ngày nào đó em ơi',
            'Chẳng hiểu vì sao bàn chân của em cứ phải chùn lại? Đừng quá vô tâm,đừng buông tay anh khi em bất cần.',

            'Tìm về nơi đâu để anh vẫn thấy ta còn nhau? ',
            'Chờ đợi bao lâu để cho câu nói đó thành câu?',
            'Tình yêu sẽ đưa ta đến đâu? ',
            'Cứ yêu đi đừng bận tâm chi ngày sau. '
        ];
        var time = ['2', '4', '1', '3', '5', '6'];
        var comment = ['25', '54', '4', '65', '904', '12'];
        var tweet = ['4', '0', '3', '32', '5', '8', '11'];
        var like = ['233', '12', '1', '45', '54', '65'];

        for (let i = 0; i < 20; i++) {
            data[i] = {
                ava: ava[Math.round(Math.random() * 5)],
                id: id[Math.round(Math.random() * 5)],
                name: name[Math.round(Math.random() * 5)],
                content: content[Math.round(Math.random() * 5)],
                time: time[Math.round(Math.random() * 5)],
                comment: comment[Math.round(Math.random() * 5)],
                tweet: tweet[Math.round(Math.random() * 5)],
                like: like[Math.round(Math.random() * 5)]
            };
        }
        this.data = data;
    }

    renderItem({ item }) {
        //   console.log('ITEM:');
        //  console.log('item.color:', item.color);
        // console.log('item.color:', item.color);
        return (
            <View style={styles.feedArea}>
                <View style={styles.avaArea}>
                    <Image style={styles.avatarshome} source={item.ava} />
                </View>
                <View style={styles.newsArea}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.nameNewsArea}> {item.name} </Text>
                        <Text style={styles.idNewsArea}>
                            {' '}
                            @{item.id} · {item.time} giờ
                        </Text>
                    </View>
                    <View style={styles.contentNewsArea}>
                        <Text style={{ fontSize: 16, color: '#14171A' }}>
                            {' '}
                            {item.content}{' '}
                        </Text>
                    </View>
                    <View style={styles.likeNewsArea}>
                        <TouchableOpacity style={styles.buttonComment}>
                            <Ionicons
                                name="ios-text-outline"
                                size={19}
                                color="#657786"
                            />
                            <Text> {item.comment}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonTweet}>
                            <Ionicons
                                name="ios-git-compare-outline"
                                size={19}
                                color="#657786"
                            />
                            <Text> {item.tweet}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonLike}>
                            <Ionicons
                                name="md-heart-outline"
                                size={19}
                                color="#657786"
                            />
                            <Text> {item.like}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonShare}>
                            <Ionicons
                                name="md-share"
                                size={19}
                                color="#657786"
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'space-between',
                    alignContent: 'flex-end'
                }}
            >
                <View style={styles.container}>
                    <FlatList
                        //  style={styles.flatContainer}
                        renderItem={this.renderItem}
                        //keyExtractor={this._keyExtractor}
                        //getItemLayout={(data, index) => (
                        //  {length: width, offset: width * index, index}
                        //)}
                        data={this.data}
                    />
                </View>

                <TouchableOpacity
                    style={styles.buttonPost}
                    onPress={() => this.props.navigation.navigate('Post')}
                >
                    <Ionicons
                        name="ios-create-outline"
                        size={40}
                        color="white"
                    />
                </TouchableOpacity>
            </View>
        );
    }
}
export default NewsFeed;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        zIndex: 2
    }, // Phần to nhất
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#34495e'
    },
    avaArea: {
        marginRight: 8
    }, //avatar
    newsArea: {
        flexDirection: 'column'
    }, // Phần tin
    nameNewsArea: {
        fontSize: 19,
        color: '#14171A',
        fontWeight: 'bold'
    }, // Tên người
    idNewsArea: {
        color: '#657786',
        fontSize: 17
    }, //Tên UID
    contentNewsArea: {
        flex: 2,
        marginVertical: 8,
        alignItems: 'stretch',
        width: 300
    }, // Phần nội dung tin
    likeNewsArea: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 23
    }, //Phần các nút like, share,..
    feedArea: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
        minHeight: 120,
        backgroundColor: 'white',
        borderBottomColor: '#E1E8ED',
        borderBottomWidth: 1,
        padding: 8
    }, //Phần mỗi News trên feed

    buttonComment: {
        flexDirection: 'row',
        position: 'absolute',
        marginBottom: 8
    }, // nút comment
    buttonTweet: {
        marginLeft: 80,
        marginBottom: 8,
        flexDirection: 'row',
        position: 'absolute'
    },
    buttonLike: {
        marginLeft: 160,
        marginBottom: 8,
        flexDirection: 'row',
        position: 'absolute'
    },
    buttonShare: {
        marginLeft: 240,
        marginBottom: 8,
        flexDirection: 'row',
        position: 'absolute'
    },
    avatarshome: {
        height: 60,
        width: 60,
        borderRadius: 30,
        margin: 8
    },
    buttonPost: {
        position: 'absolute',
        marginLeft: 300,
        marginTop: 480,
        zIndex: 3,
        height: 70,
        width: 70,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.blue
    }
});
