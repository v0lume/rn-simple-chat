import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
            marginLeft: 10,
        };

        const containerButtonStyles = {
            alignItems: 'center',
            justifyContent: 'center',
            width: 50,
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
                    <TouchableOpacity
                        style={ buttonStyles }
                        title="Send"
                        onPress={ this.handleSubmit }
                    >
                        <Ionicons
                            name={'md-send'}
                            size={40}
                            style={{ transform: [{ rotate: '-30deg'}] }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

MessageForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default MessageForm;