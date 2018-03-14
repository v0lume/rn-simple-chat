import { Message } from '../constants';

export default {
    send: (chat_id, message) => ({type: Message.REQUEST_ADD, chat_id, message}),
}