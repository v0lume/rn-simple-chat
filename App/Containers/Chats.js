import React, { PureComponent } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ChannelHistory from '../Components/ChannelHistory';

import actions from '../Actions';

class Chats extends PureComponent {
    static navigationOptions = ({ navigation: {state: {params = {}}} }) => ({
        title: 'Chats',
        tabBarLabel: 'Chats',
        tabBarIcon: ({ tintColor, focused }) => (
            <Ionicons
                name={focused ? 'ios-chatboxes' : 'ios-chatboxes-outline'}
                size={26}
                style={{ color: tintColor }}
            />
        ),
        headerRight: (
            <TouchableOpacity onPress={ params.handleAdd }>
                <Ionicons
                    name={'ios-add'}
                    size={26}
                    style={{marginRight: 15}}
                />
            </TouchableOpacity>
        )
    });

    componentDidMount() {
        const { navigation, add: handleAdd } = this.props;

        navigation.setParams({ handleAdd });
    }

    render() {
        const { chats, navigation } = this.props;

        return (
            <ChannelHistory chats={chats} />
        );
    }
}

const mapStateToProps = state => ({
    chats: state.chats,
});

const mapDispatchToProps = {
    add: actions.chat.add
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Chats);