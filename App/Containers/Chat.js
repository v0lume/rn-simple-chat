import React, { PureComponent } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';

import History from '../Components/History';
import MessageForm from '../Components/MessageForm';

import actions from '../Actions';

class Chat extends PureComponent {
    handleSubmit = value => {
        const { send } = this.props;

        value && send(value);
    };

    render() {
        const { messages } = this.props;

        return (
            <KeyboardAvoidingView
                behavior="padding"
                style={{flex: 1, flexDirection:'column', width: '100%'}}
            >
                <History messages={ messages } />
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