import React, {ChangeEventHandler} from 'react';
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message, {MessageType} from './Message/Message';
import {MapDispatchToPropsDialogsType, MapStateToPropsDialogsType} from "./DialogsContainer";
import { Redirect } from 'react-router-dom';

export type OwnPropsType  = {
    title? : string
}

export type DialogsPropsType = MapStateToPropsDialogsType & MapDispatchToPropsDialogsType & OwnPropsType

const Dialogs : React.FC<DialogsPropsType> = ( props ) => {

    // let state = props.dialogsPage

    let newMessageElement  = React.createRef<HTMLTextAreaElement>();
    // const onNewMessageChanges = (e : ChangeEventHandler<HTMLTextAreaElement>) => {
    const onNewMessageChanges = (e : any) => {
        let body = e.target.value
        props.updateNewMessageBody(body);
    }
    const onSendMessageClick = () => {
        if ( newMessageElement.current) {
            /*let body = newMessageElement.current.value*/
            props.sendMessage()
            /*body = ''*/
        }
    }

    if ( !props.isAuth ) {
        return <Redirect to={"/login"}/>
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
                    <textarea
                        ref={newMessageElement}
                        onChange={onNewMessageChanges}
                        value={props.newMessageBody}
                    ></textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>New message</button>
                </div>
            </div>
        </div>
    )
}


export default Dialogs