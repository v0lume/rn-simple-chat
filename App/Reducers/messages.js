import { Message, Mock } from '../constants';

const defaultState = [
    {
        email: Mock.email_user,
        message: 'Hello world!',
    },
];


const messages = (state = defaultState, action) => {
    switch (action.type) {
        case Message.ADD:
            let { email, message } = action;
            return [
                ...state,
                {
                  email,
                  message,
                }
            ];
            break;

        default:
            return state
    }
};

export default messages;
