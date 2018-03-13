import { Message } from '../constants';

export default {
    send: message => ({type: Message.REQUEST_ADD, message}),
}