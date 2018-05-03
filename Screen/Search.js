import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import colors from '../Styles/styles';
//import { ScrollView } from 'react-native-gesture-handler';

class Search extends React.Component {
    constructor(props) {
        super(props);
        //console.log('CONSTRUCTOR');
        var data = [];
        var news = [];
        var keyword = [
            'Vietnam',
            '#Sontungmtp',
            'Eroski',
            'OkDiario',
            'Tokuda'
        ];

        var tweet = [1244, 5430, 3422, 32123, 12095, 800];
        var domain = [
            'marca.com',
            'vnexpress.vn',
            'ahihi.com',
            'thiendia.gamo',
            'bolobala.top'
        ];
        var content = [
            'Mình ta lê thê bước Ngược chiều gió đến với góc phố rất thân quen ',
            'Tìm về đó với những nỗi nhớ không mang tên Mà giờ ta vẫn cồn cào nhớ đến ',
            'Chiều mang mây đen tới Gọi màn đêm cho ta lãng quên về bầu trời',
            'Và thời gian như đang giấu thêm vào lòng người Những ngày ta khoác trên môi nụ cười ',
            'Từng chiếc lá nhẹ trôi theo áng mây đi về đâu Từng lời hát mỗi lúc lại cất lên một nốt sầu '
        ];
        var images = [
            require('../assets/image/7.jpg'),
            require('../assets/image/8.jpg'),
            require('../assets/image/9.jpg'),
            require('../assets/image/10.jpg'),
            require('../assets/image/11.jpg'),
            require('../assets/image/12.jpg')
        ];
        for (let i = 0; i < 5; i++) {
            data[i] = {
                key: i + 1,
                keyword: keyword[i],
                tweet: tweet[i]
            };
        }
        for (let i = 0; i < 5; i++) {
            news[i] = {
                domain: domain[i],
                content: content[i],
                images: images[i]
            };
        }
        this.data = data;
        this.news = news;
    }

    renderItem({ item }) {
        return (
            <TouchableOpacity>
                <View style={styles.feedArea}>
                    <View style={styles.keyArea}>
                        <Text> {item.key} </Text>
                    </View>
                    <View style={styles.tweetArea}>
                        <Text style={styles.keyword}> {item.keyword}</Text>
                        <Text style={styles.tweet}> {item.tweet} Tweet </Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.captionTrend}>
                    <Text
                        style={{
                            color: colors.Black,
                            fontSize: 21,
                            marginLeft: 8
                        }}
                    >
                        {' '}
                        Xu hướng cho bạn{' '}
                    </Text>
                </View>
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
        );
    }
}
export default Search;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: 'white'
    }, // Phần to nhất
    captionTrend: {
        backgroundColor: 'white',
        alignItems: 'stretch',
        borderBottomColor: colors.extraLightGray,
        borderBottomWidth: 1,
        paddingVertical: 12,
        borderTopWidth: 1,
        borderTopColor: colors.extraLightGray
    },
    feedArea: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
        paddingVertical: 17,
        backgroundColor: 'white',
        borderBottomColor: '#E1E8ED',
        borderBottomWidth: 1,
        paddingLeft: 8
    }, //Phần mỗi News trên feed
    keyArea: {
        marginRight: 13,
        marginLeft: 5
    }, //avatar
    tweetArea: {
        flexDirection: 'column'
    }, // Phần tin
    keyword: {
        fontSize: 19,
        color: colors.Black
    },
    tweet: {
        color: colors.lightGray,
        fontSize: 17
    }
});
