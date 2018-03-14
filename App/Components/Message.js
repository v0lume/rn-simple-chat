import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, StyleSheet } from 'react-native';
import GravatarApi from 'gravatar-api';

import { Mock } from '../constants';

const Message = ({ email, message }) => {
    const avatarUrl = GravatarApi.imageUrl({
        email,
        parameters: { size: "50", "d": "monsterid"},
    }).replace('http', 'https');

    const isMyMessage = email === Mock.email_user;

    return (
        <View
            style={[
                styles.container,
                isMyMessage ? styles.myMessage : styles.notMyMessage,
            ]}
        >
            {!isMyMessage && (
                <Image
                    style={styles.roundedProfileImage}
                    source={{uri: avatarUrl}}
                />
            )}

            <Text>
                {message}
            </Text>

            {isMyMessage && (
                <Image
                    style={styles.roundedProfileImage}
                    source={{uri: avatarUrl}}
                />
            )}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        height: 60,
        maxHeight: 60,
        width: '100%',
    },
    roundedProfileImage: {
        width:50,
        height:50,
        borderWidth:3,
        borderColor:'black',
        borderRadius:25,
        marginLeft: 10,
        marginRight: 10,
    },
    myMessage: {
        backgroundColor: '#dba0a4',
        justifyContent: 'flex-end',
        paddingLeft: 10,
    },
    notMyMessage: {
        backgroundColor: '#9494dc',
        paddingRight: 10,
    }
});

Message.propTypes = {
    email: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
};

export default Message
