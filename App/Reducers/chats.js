import { Chat } from '../constants';

const defaultState = [
    // {
    //     id: Date.now(),
    //     email: Mock.email_user,
    //     message: 'Hello world!',
    // },
];


const chats = (state = defaultState, action) => {
    switch (action.type) {
        case Chat.ADD:
            let { id, name, users } = action;
            return [
                {
                    id,
                    name,
                    users,
                },
                ...state,
            ];

        default:
            return state
    }
};

export default chats;
