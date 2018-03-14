import React, { PureComponent } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';

import History from '../Components/History';
import MessageForm from '../Components/MessageForm';

import actions from '../Actions';

class Chat extends PureComponent {
    static navigationOptions = ({ navigation: {state: {params = {}}} }) => {
        return {
            title: params.name,
        };
    };

    handleSubmit = value => {
        const { navigation: {state: {params = {}}} } = this.props;
        const { send } = this.props;

        value && send(params.id, value);
    };

    render() {
        const { messages, navigation: {state: {params = {}}} } = this.props;

        const messagesList = Object.prototype.hasOwnProperty.call(messages, params.id)
            ? messages[params.id]
            : [];

        return (
            <KeyboardAvoidingView
                behavior="padding"
                style={{flex: 1, flexDirection:'column', width: '100%'}}
            >
                <History messages={ messagesList } />
                <MessageForm onSubmit={ this.handleSubmit } />
            </KeyboardAvoidingView>
        );
    }
}

const mapStateToProps = state => ({
    messages: state.messages,
});

const mapDispatchToProps = {
    send: actions.message.send
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Chat);