import { chatSaga } from './chat';
import { messageSaga } from './message';

const sagas = [
    chatSaga,
    messageSaga
];

export default sagas;