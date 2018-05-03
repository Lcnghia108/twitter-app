import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    AsyncStorage
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../Styles/styles';
import Home from './Home';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            texts: ''
        };
    }
    componentDidMount() {
        AsyncStorage.getItem('texts').then(value =>
            this.setState({ texts: value })
        );
    }

    setName(value) {
        AsyncStorage.setItem('texts', value);
        this.setState({ ztexts: value });
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.headerArea}>
                    <TouchableOpacity
                        // style={styles.backButton}
                        onPress={() => this.props.navigation.goBack()}
                    >
                        <Ionicons
                            name="ios-close-outline"
                            size={30}
                            color={colors.blue}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonTweet}>
                        <Text style={styles.fontTweet}> Tweet </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.inputArea}>
                    <TextInput
                        style={styles.inputStatus}
                        multiline={true}
                        maxLength={1000}
                        placeholder="Điều gì đang xảy ra?"
                        onChangeText={this.setName}
                        value={this.state.texts}
                    />
                </View>
                <View style={styles.bottomArea}>
                    <View style={styles.assetbottomArea}>
                        <TouchableOpacity style={styles.buttonAsset}>
                            <Ionicons
                                name="ios-image-outline"
                                size={30}
                                color={colors.blue}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonAsset}>
                            <Ionicons
                                name="ios-images-outline"
                                size={30}
                                color={colors.blue}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonAsset}>
                            <Ionicons
                                name="ios-podium-outline"
                                size={30}
                                color={colors.blue}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonAsset}>
                            <Ionicons
                                name="ios-locate-outline"
                                size={30}
                                color={colors.blue}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.additionalBottom}>
                        <TouchableOpacity style={styles.buttonAsset}>
                            <Ionicons
                                name="ios-ionic-outline"
                                size={30}
                                color={colors.blue}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonAsset}>
                            <Ionicons
                                name="md-add-circle"
                                size={30}
                                color={colors.blue}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
export default Post;
const styles = StyleSheet.create({
    headerArea: {
        flexDirection: 'row',
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        height: 70
    },
    buttonTweet: {
        paddingHorizontal: 25,
        paddingVertical: 8,
        backgroundColor: colors.blue,
        borderRadius: 20
    },
    fontTweet: {
        fontSize: 18,
        color: colors.white
    },
    inputArea: {
        flex: 2,
        alignItems: 'stretch',
        backgroundColor: colors.white
    },
    inputStatus: {
        flex: 2,
        borderBottomWidth: 0,
        fontSize: 23
    },
    bottomArea: {
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    assetbottomArea: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    additionalBottom: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    buttonAsset: {
        paddingHorizontal: 12
    }
});
