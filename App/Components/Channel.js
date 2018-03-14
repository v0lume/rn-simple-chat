import React from 'react';
import PropTypes from 'prop-types';
import { Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import GravatarApi from 'gravatar-api';

const Channel = ({ id, name, handleChannelClick}) => {
    const avatarUrl = GravatarApi.imageUrl({
        email: name,
        parameters: { size: "50", "d": "identicon"},
    }).replace('http', 'https');

    return (
        <TouchableOpacity style={styles.container} onPress={ handleChannelClick(id, name) }>
            <Image
                style={styles.roundedImage}
                source={{uri: avatarUrl}}
            />

            <Text>{name}</Text>
        </TouchableOpacity>
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
    roundedImage: {
        width:50,
        height:50,
        borderWidth:3,
        borderColor:'black',
        borderRadius:25,
        marginLeft: 10,
        marginRight: 10,
    }
});

Channel.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    users: PropTypes.arrayOf( PropTypes.string ).isRequired,
};

export default Channel;
