import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message, {MessageType} from './Message/Message';
import {DialogPageType, RootStateType} from "../../redux/state";

const Dialogs : React.FC<DialogPageType> = ( props : DialogPageType) => {

    let newMessageElement  = React.createRef<HTMLTextAreaElement>();

    const onNewMessageChanges = (e : any) => {
        let body = e .target.value
        props.updateNewMessageBody(body);
    }

    const onSendMessageClick = () => {
        props.sendMessage()
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {
                    props.dialogs.map((dialog : any) => {
                        return <DialogItem key={dialog.id} id={dialog.id} name={dialog.name} />
                    })
                }

            </div>
            <div className={classes.messages}>
                {
                    props.messages.map((message : any) => {
                    return <Message key={message.id} message={message.message} id={message.id}/>
                })
                }
            </div>
            <div className={classes.newMessage}>
                <div>
                    <textarea ref={newMessageElement}></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>New message</button>
                </div>

            </div>
        </div>
    )
}


export default Dialogs