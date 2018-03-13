import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Button, TextInput } from 'react-native';

class MessageForm extends PureComponent {
    state = { text: '' };

    handleChangeText = text => this.setState({text});
    handleSubmit = () => {
        const { onSubmit } = this.props;
        const { text } = this.state;

        onSubmit(text);
        this.setState({ text: '' })
    };

    render() {
        const { text } = this.state;

        const contaninerStyles = {
            alignItems: 'stretch',
            flexDirection: 'row',
            height: 60,
        };

        const containerTextinputStyles = {
            backgroundColor: '#eee',
            flexGrow: 1,
        };

        const containerButtonStyles = {
            backgroundColor: '#ddd',
            width: 100,
        };

        const textinputStyles = {
            height: '100%',
        };

        const buttonStyles = {
        };

        return (
            <View style={ contaninerStyles }>
                <View style={ containerTextinputStyles }>
                    <TextInput
                        placeholder={ 'Enter message' }
                        style={ textinputStyles }
                        value={ text }
                        onChangeText={ this.handleChangeText }
                        onEndEditing={ this.handleSubmit }
                    />
                </View>
                <View style={ containerButtonStyles }>
                    <Button
                        style={ buttonStyles }
                        title="Send"
                        onPress={ this.handleSubmit }
                    />
                </View>
            </View>
        );
    }
}

MessageForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default MessageForm;