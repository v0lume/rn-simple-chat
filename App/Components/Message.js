import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, Image } from 'react-native';
import GravatarApi from 'gravatar-api';

const Message = ({ chatMessage }) => {
    const avatarUrl = GravatarApi.imageUrl({
        email: chatMessage.email,
        parameters: { size: "50", "d": "monsterid"},
    }).replace('http', 'https');

    return (
        <View style={{flex: 1, flexDirection:'row', alignSelf: 'flex-end', height: 60, maxHeight: 60}}>
            <Text>{chatMessage.message}</Text>
            <Image style={styles.roundedProfileImage}
                   source={{uri: avatarUrl}} />
        </View>
    )
};

const styles = StyleSheet.create({
    roundedProfileImage: {
        width:50, height:50, borderWidth:3,
        borderColor:'black', borderRadius:25
    }
});

Message.propTypes = {
    chatMessage: PropTypes.object.isRequired,
};

export default Message