import React, {ChangeEventHandler} from 'react';
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message, {MessageType} from './Message/Message';
import {MapDispatchToPropsDialogsType, MapStateToPropsDialogsType} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {TextArea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../utils/validators";

export type OwnPropsType = {
    title?: string
}

export type DialogsPropsType = MapStateToPropsDialogsType & MapDispatchToPropsDialogsType & OwnPropsType

const Dialogs: React.FC<DialogsPropsType> = (props) => {

    const addNewMessage = (values : AddMessageFormType) => {
        props.sendMessage(values.newMessageBody)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {
                    props.dialogs.map((dialog: any) => {
                        return <DialogItem key={dialog.id} id={dialog.id} name={dialog.name}/>
                    })
                }

            </div>
            <div className={classes.messages}>
                {
                    props.messages.map((message: any) => {
                        return <Message key={message.id} message={message.message} id={message.id}/>
                    })
                }
            </div>
            <div className={classes.newMessage}>
                <AddMessageReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

type AddMessageFormType = {
    newMessageBody: string
}

const maxLengthCreator100 = maxLengthCreator(100)

const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                name={"newMessageBody"}
                component={TextArea}
                validate={[required, maxLengthCreator100]}s
                placeholder={"Enter your message"}
            />
            <div>
                <button>New message</button>
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm<AddMessageFormType>({
    form: "dialogAddMessageForm"
})(AddMessageForm)

export default Dialogs