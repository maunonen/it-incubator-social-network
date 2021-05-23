import React from 'react';
import classes from '../../Dialogs/Dialogs.module.css';

export type MessageType = {
    id : number
    message : string
}

const Message : React.FC<MessageType> = (props  ) => {
    return (
        <div className={classes.message}>{props.message}</div>

    )
}


export default Message