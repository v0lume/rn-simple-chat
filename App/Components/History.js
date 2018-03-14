import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import { View, FlatList } from 'react-native';

import Message from './Message';

class History extends PureComponent {
    render() {
        const { messages } = this.props;

        return (
            <View style={{alignItems: 'stretch', flex: 1, flexDirection:'column', width: '100%'}} >
                <FlatList
                    data={messages}
                    keyExtractor={item => item.id}
                    ref={ref => this.flatList = ref}
                    renderItem={({item}) => <Message {...item} />}
                    onContentSizeChange={() => this.flatList.scrollToEnd({animated: true})}
                    onLayout={() => this.flatList.scrollToEnd({animated: true})}
                />
            </View>
        )
    }
}

History.propTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape({
            message: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
};

export default History
