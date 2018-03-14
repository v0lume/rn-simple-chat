import React, { PureComponent } from 'react';
import { ScrollView, StatusBar, Button, Text } from 'react-native';
import { SafeAreaView, StackNavigator, TabNavigator } from 'react-navigation';

import Chat from './Chat';
import Chats from './Chats';
import Settings from './Settings';

const MyNavScreen = ({ navigation, banner }) => (
    <ScrollView>
        <SafeAreaView forceInset={{ horizontal: 'always' }}>
            <Text>{banner}</Text>
            <Button
                onPress={() => navigation.navigate('Chat', { name: 'Jordan' })}
                title="Open profile screen"
            />
            <Button
                onPress={() => navigation.navigate('NotifSettings')}
                title="Open notifications screen"
            />
            <Button
                onPress={() => navigation.navigate('SettingsTab')}
                title="Go to settings tab"
            />
            <Button onPress={() => navigation.goBack(null)} title="Go back" />
        </SafeAreaView>
        <StatusBar barStyle="default" />
    </ScrollView>
);


const TabNav = TabNavigator(
    {
        MainTab: {
            screen: ({ navigation }) => <Chats navigation={ navigation } />,
            path: '/',
            navigationOptions: Chats.navigationOptions
        },
        SettingsTab: {
            screen: ({ navigation }) => <Settings navigation={ navigation } />,
            path: '/settings',
            navigationOptions: Settings.navigationOptions
        },
    },
    {
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false,
    }
);

const Root = StackNavigator({
    Root: {
        screen: TabNav,
    },
    Chat: {
        screen: ({ navigation }) => <Chat navigation={ navigation } />,
        path: '/chat/:id',
        navigationOptions: Chat.navigationOptions
    },
});

export default Root;