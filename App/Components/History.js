import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import Message from './Message';

const History = ({ messages }) => {
    return (
        <View style={{flex: 1, flexDirection:'column', width: '100%'}} >
            {messages.map((chatMessage, i) => {
                return (
                    <Message key={`chat${i}`} chatMessage={chatMessage} />
                )
            })}
        </View>
    )
};

History.propTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape({
            message: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
};

export default History
