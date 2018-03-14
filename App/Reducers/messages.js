import { Message, Mock } from '../constants';

const defaultState = {};


const messages = (state = defaultState, action) => {
    switch (action.type) {
        case Message.ADD:
            let { chat_id, email, message } = action;

            const messageObj = {
                id: Date.now(),
                email,
                message,
            };

            let messagesList = [];

            if (Object.prototype.hasOwnProperty.call(state, chat_id)) {
                messagesList = [...state[chat_id]];
            }

            messagesList.push(messageObj);

            let nextState = {
                ...state
            };

            nextState[chat_id] = messagesList;
            return nextState;

        default:
            return state
    }
};

export default messages;
