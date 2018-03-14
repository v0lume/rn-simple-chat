import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import { View, FlatList } from 'react-native';
import { withNavigation } from 'react-navigation';

import Channel from './Channel';

class ChatHistory extends PureComponent {
    handleChannelClick = (id, name) => () => {
        const { navigation } = this.props;

        navigation.navigate('Chat', { id, name });
    };

    render() {
        const { chats } = this.props;

        return (
            <View style={{alignItems: 'stretch', flex: 1, flexDirection:'column', width: '100%'}} >
                <FlatList
                    data={chats}
                    keyExtractor={item => item.id}
                    ref={ref => this.flatList = ref}
                    renderItem={({item}) => <Channel {...item} handleChannelClick={ this.handleChannelClick } />}
                    onContentSizeChange={() => this.flatList.scrollToEnd({animated: true})}
                    onLayout={() => this.flatList.scrollToEnd({animated: true})}
                />
            </View>
        )
    }
}

ChatHistory.propTypes = {
    chats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            users: PropTypes.arrayOf( PropTypes.string ).isRequired,
        }).isRequired
    ).isRequired,
};

export default withNavigation(ChatHistory);
