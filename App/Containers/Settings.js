import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

class Settings extends PureComponent {
    static navigationOptions = ({ navigation: {state: {params = {}}} }) => ({
        title: 'Settings',
        tabBarIcon: ({ tintColor, focused }) => (
            <Ionicons
                name={focused ? 'ios-settings' : 'ios-settings-outline'}
                size={26}
                style={{ color: tintColor }}
            />
        ),
    });

    render() {
        return (
            <View>
                <Text>Settings tab</Text>
            </View>
        );
    }
}

export default Settings;