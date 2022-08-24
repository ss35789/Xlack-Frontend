import {backUrl} from '../features/cookie';
import io from 'socket.io-client';
import {useCallback} from 'react';
import axios from 'axios';

const useSocket = (workspace?: string) => {
    const socket = io(`${backUrl}/ws-${workspace}`);
};

export default useSocket;
