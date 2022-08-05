import React from 'react';
import {ChannelType} from './types';

function Channel({channel_name, uuid, channel_id, created_at}: ChannelType) {
    const ThisChannelId = channel_id;
    const ThisChannelTitle = channel_name;
    return (
        <>
            <span># {ThisChannelTitle}</span>
        </>
    );
}

export default Channel;
