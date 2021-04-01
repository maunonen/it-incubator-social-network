import React from 'react';
import classes from './Dialogs.module.css'
import Navbar from "../Navbar/Navbar";
import {NavLink} from 'react-router-dom';

type DialogsType = {}

type DialogType = {}

type DialogItemType = {
    name : string
    id : number
}

type MessageType = {
    id : number
    message : string
}

const Message = (props : MessageType ) => {
    return (
        <div className={classes.message}>Hi</div>
    )
}

const DialogItem = ( props : DialogItemType ) => {
    let path = "/dialogs/1" + props.id
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={ path }>{ props.name }</NavLink>
        </div>
    )

}

const Dialogs = (props: DialogsType) => {
    let dialogData = [
        { id : 1,name : 'Alex'},
        { id : 2,name : 'Jenny'},
        { id : 3,name : 'Jari'},
        { id : 4,name : 'Emil'},
        { id : 5,name : 'Miko'},
    ]

    let messageData = [
        { id : 1, Message : 'Hello'},
        { id : 2, Message : 'How are you'},
        { id : 3, Message : 'I am fine'},
        { id : 4, Message : 'See you'},
        { id : 5, Message : 'Bye bye'},
    ]

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem
                    id={1}
                    name={"Alex"}
                />
                <DialogItem
                    id={2}
                    name={"Jenny"}
                />
                <DialogItem
                    id={3}
                    name={"Mikko"}
                />
                <DialogItem
                    id={4}
                    name={"Jari"}
                />

            </div>
            <div className={classes.messages}>
                <Message message={"Hello"}/>
                <Message message={"how are you"}/>
                <Message message={"Yo"}/>
            </div>
        </div>
    )
}
export default Dialogs